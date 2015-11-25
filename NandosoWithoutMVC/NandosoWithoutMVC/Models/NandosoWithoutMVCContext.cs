using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Data.Entity.Migrations;


namespace NandosoWithoutMVC.Models
{
    [DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]
    public class NandosoWithoutMVCContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx

        public class MyConfiguration : DbMigrationsConfiguration<NandosoWithoutMVCContext>
        {
            public MyConfiguration()
            {
                this.AutomaticMigrationsEnabled = true;
            }

            protected override void Seed(NandosoWithoutMVCContext context)
            {
                var specials = new List<Special>
                {
                    new Special {Dish = "Flamed Chicken",Price = 30 },
                };
                specials.ForEach(s => context.Specials.AddOrUpdate(p => p.Dish, s));
                context.SaveChanges();

                var feedbacks = new List<Feedback>
                {
                    new Feedback {CustomerFirstName = "Andrew", CustomerLastName = "Nguyen", Comment = "The Flamed Chicken tastes pretty good" }
                };
                feedbacks.ForEach(s => context.Feedbacks.AddOrUpdate(s));
                context.SaveChanges();

                var employees = new List<Employee>
                {
                    new Employee {EmployeeFirstName = "Xizhe", EmployeeLastName = "Qiu", Role = role.CEO }
                };
                employees.ForEach(e => context.Employees.AddOrUpdate(p => p.EmployeeLastName, e));

                var replies = new List<Reply>
                {
                    new Reply {
                        EmployeeID = employees.Single(e => e.EmployeeLastName == "Qiu").ID,
                        FeedbackID = feedbacks.Single(f => f.CustomerLastName == "Nguyen").ID,
                        Content = "Thank you for your feedback"
                    }
                };
                foreach (Reply r in replies)
                {
                    var replyInDatabase = context.Replies.Where(
                        s => s.Employee.ID == r.EmployeeID &&
                        s.Feedback.ID == r.FeedbackID).SingleOrDefault();
                    if(replyInDatabase == null)
                    {
                        context.Replies.Add(r);
                    }
                }
                context.SaveChanges();
            }
        }
    
        public NandosoWithoutMVCContext() : base("name=NandosoWithoutMVCContext")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<NandosoWithoutMVCContext, MyConfiguration>());
        }

        public System.Data.Entity.DbSet<NandosoWithoutMVC.Models.Employee> Employees { get; set; }

        public System.Data.Entity.DbSet<NandosoWithoutMVC.Models.Feedback> Feedbacks { get; set; }

        public System.Data.Entity.DbSet<NandosoWithoutMVC.Models.Reply> Replies { get; set; }

        public System.Data.Entity.DbSet<NandosoWithoutMVC.Models.Special> Specials { get; set; }
    }
}

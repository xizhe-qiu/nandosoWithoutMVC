using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NandosoWithoutMVC.Models
{

    public enum role
    {
        CEO, Manager, Chef, Waiter 
    }
    public class Employee
    {
        public int ID { get; set; }
        public string EmployeeFirstName { get; set; }
        public string EmployeeLastName { get; set; }
        public role Role { get; set; }

        [JsonIgnore]
        public virtual ICollection<Reply> Replys { get; set; }

    }
}
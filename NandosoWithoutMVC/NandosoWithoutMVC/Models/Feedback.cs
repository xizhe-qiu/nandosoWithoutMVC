using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NandosoWithoutMVC.Models
{
    public class Feedback
    {
        public int ID { get; set; }
        public string CustomerFirstName { get; set; }
        public string CustomerLastName { get; set; }
        public string Comment { get; set; }

        [JsonIgnore]
        public virtual ICollection<Reply> Replys { get; set; }
    }
}
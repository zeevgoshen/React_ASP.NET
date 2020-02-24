using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting.Internal;
using Microsoft.Extensions.Logging;
using Nancy.Json;
using Newtonsoft.Json;


// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ASPNetWithReactJS.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AutoCompleteController : ControllerBase 
    {
        // GET: /<controller>/
        
        private readonly ILogger<AutoCompleteController> _logger;

         

        public AutoCompleteController(ILogger<AutoCompleteController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<AutoComplete> Get()
        {
            //deserialize JSON from file  
            try {
                string Json = System.IO.File.ReadAllText("Data\\people.json");
                JavaScriptSerializer ser = new JavaScriptSerializer();
                var personlist = ser.Deserialize<List<AutoComplete>>(Json);
                return personlist;

            } catch(Exception ex) {
                ex.ToString();
                return null;
            }
        }
    }
}

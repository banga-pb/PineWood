using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pinewood_demo.Model;
using Pinewood_demo.Services.Interface;

namespace Pinewood_demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService _heroService;

        public CustomerController(ICustomerService heroService)
        {
            _heroService = heroService;
        }

        [HttpGet]
        public IActionResult GetCustomerList([FromQuery] bool? isActive = null)
        {
            return Ok(_heroService.GetCustomerList(isActive));
        }


        [HttpGet]
        [Route("{id}")]
        public IActionResult GetCustomerDetails(int id)
        {
            var hero = _heroService.GetCutomerByID(id);
            if (hero == null)
            {
                return NotFound();
            }
            return Ok(hero);
        }

        [HttpPost]
        public IActionResult RegisterCustomer(AddCustomer customerobject)
        {
            var hero = _heroService.RegisterCustomer(customerobject);

            if (hero == null)
            {
                return BadRequest();
            }

            return Ok(new
            {
                message = "Customer registered Successfully!!!",
                id = hero!.Id
            });
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult UpdateCustomer([FromRoute] int id, [FromBody] UpdateCustomer customerObject)
        {
            var flag = _heroService.UpdateCustomer(id, customerObject);
            if (flag == null)
            {
                return NotFound();
            }

            return Ok(new
            {
                message = "Customer Updated Successfully!!!",
                id = flag!.Id
            });
        }

        [HttpDelete]
        [Route("{_id}")]
        public IActionResult DeleteCustomer(int _id)
        {
            if (!_heroService.DeleteCustomerByID(_id))
            {
                return NotFound();
            }

            return Ok(new
            {
                message = "Customer Deleted Successfully!!!",
                id = _id
            });
        }
    }
}

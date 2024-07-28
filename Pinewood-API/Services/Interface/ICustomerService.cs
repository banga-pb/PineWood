using Pinewood_demo.Model;


namespace Pinewood_demo.Services.Interface
{
     
    public interface ICustomerService
    {
        List<CustomerModel> GetCustomerList(bool? isActive);

        CustomerModel? GetCutomerByID(int id);

        CustomerModel RegisterCustomer(AddCustomer obj);

        CustomerModel? UpdateCustomer(int id, UpdateCustomer obj);

        bool DeleteCustomerByID(int id);
    }
}

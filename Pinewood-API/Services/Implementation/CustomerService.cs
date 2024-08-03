using Pinewood_demo.Model;

using Pinewood_demo.Services.Interface;

namespace Pinewood_demo.Services.Implementation
{
    public class CustomerService : ICustomerService
    {
        private readonly List<CustomerModel> _customerList;
        public CustomerService()
        {
            _customerList = new List<CustomerModel>()
            {
                new CustomerModel(){
                Id = 1,
                FirstName = "Customer One",
                LastName = "C1",
                isActive = true,
                },
                new CustomerModel()
                {
                    Id = 2,
                    FirstName = "Customer Two",
                    LastName = "C2",
                    isActive = true,
                },
                 new CustomerModel()
                {
                    Id = 3,
                    FirstName = "Customer Three",
                    LastName = "C3",
                    isActive = false,
                }
            };
        }
        public bool DeleteCustomerByID(int id)
        {
            try
            {
                var isCustomerExists = _customerList.FindIndex(index => index.Id == id);
                if (isCustomerExists >= 0)
                {
                    _customerList.RemoveAt(isCustomerExists);
                }
                return isCustomerExists >= 0;
            }
            catch (Exception ex)
            {

                ex.GetBaseException();
                return false;
            }

        }

        public List<CustomerModel> GetCustomerList(bool? isActive)
        {
            return isActive == null ? _customerList : _customerList.Where(p => p.isActive == isActive).ToList();
        }

        public CustomerModel? GetCutomerByID(int id)
        {
            return _customerList.FirstOrDefault(p => p.Id == id);
        }

        public CustomerModel RegisterCustomer(AddCustomer obj)
        {
            var addCustomer = new CustomerModel()
            {
                Id = _customerList.Max(p => p.Id) + 1,
                FirstName = obj.FirstName,
                LastName = obj.LastName
            };

            _customerList.Add(addCustomer);

            return addCustomer;
        }

        public CustomerModel? UpdateCustomer(int id, UpdateCustomer obj)
        {
            var customerIndex = _customerList.FindIndex(index => index.Id == id);
            try
            {
                if (customerIndex > -1)
                {
                    var Customer = _customerList[customerIndex];

                    Customer.FirstName = obj.FirstName;
                    Customer.LastName = obj.LastName;
                    Customer.isActive = obj.isActive;

                    _customerList[customerIndex] = Customer;

                    return Customer;
                }
            }
            catch (Exception ex)
            {

                ex.GetBaseException();
            }
            return null;
        }
    }
}

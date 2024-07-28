namespace Pinewood_demo.Model
{
    public class CustomerModel
    {
        public int Id { get; set; }
        public required string FirstName { get; set; }
        public string LastName { get; set; } = string.Empty;
        public bool isActive { get; set; } = true;
    }


    public class AddCustomer
    {
        public required string FirstName { get; set; }
        public string LastName { get; set; } = string.Empty; 
    }
    public class UpdateCustomer
    {
        public required string FirstName { get; set; }
        public string LastName { get; set; } = string.Empty;
        public bool isActive { get; set; } = true;
    }
}

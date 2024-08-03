import { Component } from '@angular/core';
import { Customers } from '../../models/customers';
import { CustomersService } from '../../services/customers.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-customer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-customer.component.html',
  styleUrl: './register-customer.component.css'
})
export class RegisterCustomerComponent {
  customer: Customers = {
    firstName: '',
    lastName: '',
    id: false
  };
  submitted = false;

  constructor(private customersService: CustomersService,
     private route: ActivatedRoute,
    private router: Router) {}

  saveCustomer(): void {
    const data = {
      firstName: this.customer.firstName,
      lastName: this.customer.lastName
    };

    this.customersService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  CustomerList(): void {
    this.router.navigate(['/customers']);
  }
  newCustomer(): void {
  this.submitted = false;
  this.customer = {
    firstName: '',
    lastName: '',
    isActive: false
  };
  }

}
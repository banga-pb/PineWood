import { Component, Input, OnInit } from '@angular/core';
import { Customers } from '../../models/customers';
import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import { RouterLink,RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-customer-details',
  standalone: true, 
  imports: [RouterLink,RouterOutlet,FormsModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentCustomer: Customers = {
    firstName: '',
    lastName: '',
    isActive: false
  };

  message = '';

  constructor(
    private customersService: CustomersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCustomer(this.route.snapshot.params['id']);
    }
  }
  getCustomer(id: string): void {
    this.customersService.getCustomerDetails(id).subscribe({
      next: (data) => {
        this.currentCustomer = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  
  updatePublished(status: boolean): void {
    const data = {
      firstName: this.currentCustomer.firstName,
      lastName: this.currentCustomer.lastName,
      isActive: status
    };

    this.message = '';

    this.customersService.update(this.currentCustomer.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentCustomer.isActive = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }

  
  updateCustomer(): void {
    this.message = '';

    this.customersService
      .update(this.currentCustomer.id, this.currentCustomer)
      .subscribe({
        next: (res) => { 
          this.message = res.message
            ? res.message
            : 'This customer is updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteCustomer(): void {
    this.customersService.delete(this.currentCustomer.id).subscribe({
      next: (res) => { 
        this.router.navigate(['/customers']);
      },
      error: (e) => console.error(e)
    });
  }

}

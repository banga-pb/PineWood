import { Component } from '@angular/core';
import { Customers } from '../../models/customers';
import { CustomersService } from '../../services/customers.service';
import { CustomerDetailsComponent } from "../customer-details/customer-details.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomerDetailsComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  customers?: Customers[];
  currentCustomer: Customers = {};
  currentIndex = -1;
  title = '';
firsname: any;
currentcustomer: any;

  constructor(private customersService: CustomersService) {}
  ngOnInit(): void {
    this.retrieveCustomers();
  }

  retrieveCustomers(): void {
    this.customersService.getCustomerList().subscribe({
      next: (data) => {
        this.customers = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveCustomers();
    this.currentCustomer = {};
    this.currentIndex = -1;
  }

  setActiveCustomer(customers: Customers, index: number): void {
    this.currentCustomer = customers;
    this.currentIndex = index;
  } 
}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component'; 
import { CustomerDetailsComponent } from './component/customer-details/customer-details.component';
import { RegisterCustomerComponent } from './component/register-customer/register-customer.component';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
    { path: '', redirectTo: 'customers', pathMatch: 'full' },
    { path: 'customers', component: HomeComponent },
    { path: 'customer/:id', component: CustomerDetailsComponent },
    { path: 'add', component: RegisterCustomerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes),FormsModule],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
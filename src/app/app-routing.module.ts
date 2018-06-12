import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { EmployeeListHttpComponent } from "./employee-list-http/employee-list-http.component";

// Route config let's you map routes to components
const routes: Routes = [
  // map '/' to '/home' as our default route
  {
    path: 'home',
    component: HomeComponent,
  },

  // map '/addemployee' to add employee component
  {
    path: 'addemployee', 
    component: AddEmployeeComponent 
  },

  // map '/employee' to the employee list component
  {
    path: 'employee',
    component: EmployeeListComponent,
  },
  // map '/employee/:id' to employee details component
  {
    path: 'employeedetails/:id', 
    component: EmployeeDetailsComponent 
  },
  
  // map '/emp list http' to emp list http component
  {
    path: 'employeelisthttp', 
    component: EmployeeListHttpComponent 
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

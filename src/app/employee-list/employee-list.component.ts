import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "../employee.service";

@Component({
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  emps: any = [];
  
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.emps = this.employeeService.getAll();
  }

  // to display selected emp details
  showEmpDetails(id){
    let link = ['/employeedetails',id];
    this.router.navigate(link);
  }

  // to delete selected emp
  onDelete(selectedEmp){
    this.employeeService.delete(selectedEmp);
  }
}

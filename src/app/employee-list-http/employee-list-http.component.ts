import { Component, OnInit } from '@angular/core';
import { EmployeeHttpService } from "../employeehttp.service";

@Component({
  templateUrl: './employee-list-http.component.html'
})
export class EmployeeListHttpComponent implements OnInit {
empsList: any = [];
  constructor(private emphttpService: EmployeeHttpService) { }

  ngOnInit() {
    this.emphttpService.getEmpList()
    .subscribe(resp => {
     this.empsList = resp;
    });
  }
}

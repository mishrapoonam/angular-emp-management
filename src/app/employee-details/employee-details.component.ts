import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { EmployeeService } from "../employee.service";

@Component({
  templateUrl: './employee-details.component.html',
  styles: []
})
export class EmployeeDetailsComponent implements OnInit{

  sub:any;
  emp: any= [];
  id : number = 0;
  constructor(private route: ActivatedRoute,
              private empService: EmployeeService,
              private router: Router) { }

  ngOnInit() { 
    this.sub = this.route.params.subscribe(params => {
      let idVal = Number.parseInt(params['id']);
      if(isNaN(idVal)){
        this.id = 1;
        this.emp = this.empService.get(this.id);
      }else{
        this.id = idVal;
        this.emp = this.empService.get(this.id);
      }     
    });
  }

// to navigate to emplist
  gotoEmpList(){
    let link = ['/employee'];
    this.router.navigate(link);
  }

}

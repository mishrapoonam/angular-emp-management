import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from "../employee.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  addForm: FormGroup;
  roleList: string[];

  constructor(private fb:FormBuilder,
    private employeeService: EmployeeService,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.roleList =  ['Developer', 'Senior Developer','Business Analyst'];
    this.addForm  = this.fb.group({
      name: ['',[Validators.required]],
      phone: ['',[Validators.pattern('^\\d+$'),Validators.maxLength(10)]],
      email: ['',[Validators.required,
                  Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      jobrole: ['', Validators.required],
      terms: ['', Validators.requiredTrue]
  });
  }

  // to submit the data to server
  public onFormSubmit() {
    if(this.addForm.valid) {
      let formdata = this.addForm.value;
      this.http.get('/assets/formsubmit.json', formdata)
      .subscribe(
        res => {
          window.alert(res[0].successMsg);
          this.employeeService.add(formdata);
          let link = ['/employee'];
          this.router.navigate(link);
        },
        err => {
          console.log('Error occured');
        }
      );
      }

  }
}

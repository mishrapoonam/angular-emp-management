import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeHttpService {
  constructor(private http: HttpClient){
  }

  getEmpList(){
    return this.http.get('/assets/data.json');
  }

}

import { Injectable } from '@angular/core';

export class EmployeeService {

  empList = [
    {
      id: 1,
      name: "Romin Iranii",
      email: "romin.k.irani@gmail.com",
      phone: "408-1234567",
      jobrole: 'Senior Developer',
      terms: true
    },
    {
      id: 2,
      name: "Luke Skywalker",
      email: "luke.skywal@gmail.com",
      phone: "408-1734567",
      jobrole: 'Business Analyst',
      terms: true
    }, {
      id: 3,
      name: "Han Solo",
      email: "han.solo@gmail.com",
      phone: "408-1233457",
      jobrole: 'Developer',
      terms: true
    }, {
      id: 4,
      name: "Neil Irani",
      email: "neilrirani@gmail.com",
      phone: "408-1222567",
      jobrole: 'Tester',
      terms: true
    }, {
      id: 5,
      name: "Tom Hanks",
      email: "tomhanks@gmail.com",
      phone: "408-2222222",
      jobrole: 'Developer',
      terms: true
    }
  ];


// to get emplist
  getAll() {
    return this.empList;
  }
  
  // to add emp
  add(emp) {
    this.empList.push(emp);
  }
  
  // to get emp details
  get(id: number)  {
    return this.empList.find(p => p.id === id);
  }

  // to delete selected emp
  delete(emp) {
    let index = this.empList.indexOf(emp);
    if(index >= 0) {
      this.empList.splice(index, 1);
    }
  }

  
}

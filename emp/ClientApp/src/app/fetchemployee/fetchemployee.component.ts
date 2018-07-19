import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-fetchemployee',
  templateUrl: './fetchemployee.component.html',
  styleUrls: ['./fetchemployee.component.css']
})
export class FetchemployeeComponent implements OnInit {

  public empList: EmployeeData[];

  constructor(public http: Http, private _router: Router, private _employeeService: EmpserviceService) {
    this.getEmployees();
  }

  getEmployees() {
    this._employeeService.getEmployees().subscribe(
      data => this.empList = data
    )
  }

  delete(employeeID) {
    var ans = confirm("Do you want to delete customer with Id: " + employeeID);
    if (ans) {
      this._employeeService.deleteEmployee(employeeID).subscribe((data) => {
        this.getEmployees();
      }, error => console.error(error))
    }
  }

  
  ngOnInit() {
  }

}

interface EmployeeData {
  id: number;
  name: string;
  gender: string;
  department: string;
  city: string;
}  

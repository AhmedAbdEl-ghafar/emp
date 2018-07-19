import { Component, OnInit, Inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EmpserviceService } from '../empservice.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  employeeForm: FormGroup;
  //name: FormControl;
  //gender: FormControl;
  //department: FormControl;
  //city: FormControl;

  title: string = "Create";
  id: number;
  errorMessage: any;

  constructor(

    private http: HttpClient,
    private _fb: FormBuilder,
    private _avRoute: ActivatedRoute,
    private _employeeService: EmpserviceService,
    private _router: Router,
    @Inject('BASE_URL') private baseUrl: string
  ) {

    if (this._avRoute.snapshot.params["id"]) {
      this.id = this._avRoute.snapshot.params["id"];
    }

    
  }  

  ngOnInit() {
    if (this.id > 0) {
      this.title = "Edit";
      this._employeeService.getEmployeeById(this.id)
        .subscribe(resp => this.employeeForm.setValue(resp)
          , error => this.errorMessage = error);
    }

    this.employeeForm = this._fb.group({
      id: ['0'],
      name: ['', [Validators.required]] ,
      gender: ['', [Validators.required]],
      department: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });

  }

  save() {

    //if (!this.employeeForm.valid) {
    //  return;
    //}
    console.log("1");
    if (this.title == "Create") {
      console.log("2");

      //this.http.post(this.baseUrl + "api/Employee/Create", JSON.stringify(this.employeeForm.value)).subscribe(res => {
      //  console.log(res)

      //});
      

      this._employeeService.saveEmployee(this.employeeForm.value).subscribe(data => {
        console.log(data);
        console.log(this.employeeForm.value);
          this._router.navigate(['/fetch-employee']);
      }, error => this.errorMessage = error)


    }
    else if (this.title == "Edit") {
      this._employeeService.updateEmployee(this.employeeForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-employee']);
        }, error => this.errorMessage = error)
    }
  }

  cancel() {
    this._router.navigate(['/fetch-employee']);
  }

  get name() { return this.employeeForm.get('name'); }
  get gender() { return this.employeeForm.get('gender'); }
  get department() { return this.employeeForm.get('department'); }
  get city() { return this.employeeForm.get('city'); }
}  

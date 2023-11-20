import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SignupUserService } from '../services/signup-user.service';
import { SignupEmployeeService } from '../services/signup-employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
    signupEmployeeForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    mobileNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    salary: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required)
  })

  signupEmployee(){
    console.log(this.signupEmployeeForm.value)
  }
  get firstNameValidator(){
    return this.signupEmployeeForm.get('firstName')
  }
  get lastNameValidator(){
    return this.signupEmployeeForm.get('lastName')
  }
  get mobileNoValidator(){
    return this.signupEmployeeForm.get('mobileNo')
  }
  get emailValidator(){
    return this.signupEmployeeForm.get('email')
  }
  get salaryValidator(){
    return this.signupEmployeeForm.get('salary')
  }
  get userIdValidator(){
    return this.signupEmployeeForm.get('userId')
  }

  constructor(private auth: SignupEmployeeService, private router: Router) { }
  createEmployee(formData: any) {
    this.auth.signupEmployee(formData).subscribe({
    })
  }
}

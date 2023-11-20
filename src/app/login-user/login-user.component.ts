import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginUserService } from '../services/login-user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  loginUserForm = new FormGroup({
    userId: new FormControl('', Validators.required),
    userName: new FormControl(''),
    password: new FormControl('', Validators.required),
    roleId: new FormControl('')
  })

  // signupUser(){
  //   console.log(this.loginUserForm.value)
  // }
  get userIdValidator(){
    return this.loginUserForm.get('userId')
  }
  get userNameValidator(){
    return this.loginUserForm.get('userName')
  }
  get passwordValidator(){
    return this.loginUserForm.get('password')
  }
  get roleIdValidator(){
    return this.loginUserForm.get('roleId')
  }

  myToken: any
  role: any
  user: any
  constructor(private auth: LoginUserService, private router: Router, 
    private data: DataService) { }
  loginUser(formData: any)
   {
    // console.log(formData)
    this.auth.loginUser(formData).subscribe({
      next: (response) => {
        //get token value from header
        this.myToken = response.headers.get('jwt')
        //convert from Json
        this.myToken = JSON.parse(this.myToken)
        console.log(this.myToken)
        //store it in LS
        localStorage.setItem("token", this.myToken)
        
        //access object from response body
        this.user = response.body
        
        //store user info in data service vars
        this.data.userId = this.user.userId
        this.data.userName = this.user.userName

        //admin or emp
        if (this.user.roleName == "admin")
          this.router.navigateByUrl("/createadmin"); //admin dashboard
        if (this.user.roleName == "employee")
          this.router.navigateByUrl("/createemployee"); //employee dashboard
        if (this.user.roleName == "agent")
          this.router.navigateByUrl("/createagent"); //agent dashboard
        if (this.user.roleName == "customer")
          this.router.navigateByUrl("/createcustomer") //customer dashBoard
        else
          this.router.navigateByUrl("/createadmin"); //
      },
      error: (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse)
      }
    })
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SignupUserService } from '../services/signup-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  title = 'create-Users';
  signupUserForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('',[Validators.required, Validators.minLength(5)]),
    roleId: new FormControl('', Validators.required)
  })

  signupUser(){
    console.log(this.signupUserForm.value)
  }
  get userNameValidator(){
    return this.signupUserForm.get('userName')
  }
  get passwordValidator(){
    return this.signupUserForm.get('password')
  }
  get roleIdValidator(){
    return this.signupUserForm.get('roleId')
  }

  // myToken: any = "";
  constructor(private auth: SignupUserService, private router: Router) { }
  createUser(formData: any) {
    this.auth.signupUser(formData).subscribe({
  //     next: (token) => {
  //       console.log(token)
  //       this.myToken = token
  //       localStorage.setItem("token", this.myToken.tokenValue)
        // this.router.navigateByUrl("/createUser");
  //     },
  //     error: (errorResponse: HttpErrorResponse) => {
  //       console.log(errorResponse)
  //     }
    })
  }
}

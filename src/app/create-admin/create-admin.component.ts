import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SignupAdminService } from '../services/signup-admin.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent {
  title = 'create-Admin';
  signupAdminForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  })

    signupAdmin(){
    console.log(this.signupAdminForm.value)
  }
  get firstNameValidator(){
    return this.signupAdminForm.get('firstName')
  }
  get lastNameValidator(){
    return this.signupAdminForm.get('lastName')
  }

  constructor(private auth: SignupAdminService, private router: Router) { }
  createAdmin(formData: any) {
    this.auth.signupAdmin(formData).subscribe({
    })
  }
}

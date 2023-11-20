import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SignupAgentService } from '../services/signup-agent.service';

@Component({
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styleUrls: ['./create-agent.component.css']
})
export class CreateAgentComponent {
  title = 'create-Agent';
  signupAgentForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    qualification: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    userId: new FormControl('', Validators.required),
    commissionEarned: new FormControl('', Validators.required)
  })
  signupAgent(){
    console.log(this.signupAgentForm.value)
  }
  get firstNameValidator(){
    return this.signupAgentForm.get('firstName')
  }
  get lastNameValidator(){
    return this.signupAgentForm.get('lastName')
  }
  get qualificationValidator(){
    return this.signupAgentForm.get('qualification')
  }
  get emailValidator(){
    return this.signupAgentForm.get('email')
  }
  get mobileNoValidator(){
    return this.signupAgentForm.get('mobileNo')
  }
  get userIdValidator(){
    return this.signupAgentForm.get('userId')
  }
  get commissionEarned(){
    return this.signupAgentForm.get('commission')
  }

constructor(private auth: SignupAgentService, private router: Router) { }
createAgent(formData: any) {
  this.auth.signupAgent(formData).subscribe({
    })
  }
}

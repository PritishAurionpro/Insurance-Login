import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SignupCustomerService } from '../services/signup-customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {
    signupCustomerForm = new FormControl({ 
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),  
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    nominee: new FormControl('', Validators.required),
    nomineeRelation: new FormControl('', Validators.required),
    agentId: new FormControl('', Validators.required)
  })

    signupCustomer(){
    console.log(this.signupCustomerForm.value)
  }
  get firstNameValidator(){
    return this.signupCustomerForm.get('firstName')
  }
  get lastNameValidator(){
    return this.signupCustomerForm.get('lastName')
  }
  get emailValidator(){
    return this.signupCustomerForm.get('email')
  }
  get mobileNoValidator(){
    return this.signupCustomerForm.get('mobileNo')
  }
  get stateValidator(){
    return this.signupCustomerForm.get('state')
  }
  get cityValidator(){
    return this.signupCustomerForm.get('city')
  }
  get nomineeValidator(){
    return this.signupCustomerForm.get('nominee')
  }
  get nomineeRelationValidator(){
    return this.signupCustomerForm.get('nomineeRelation')
  }
  get agentIdValidator(){
    return this.signupCustomerForm.get('agentId')
  }

  constructor(private auth: SignupCustomerService, private router: Router) { }
  createCustomer(formData: any) {
    this.auth.signupCustomer(formData).subscribe({
    })
  }
}

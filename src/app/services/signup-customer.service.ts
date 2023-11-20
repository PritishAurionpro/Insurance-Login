import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupCustomerService {
  url = "https://localhost:7029/api/Customer/addCustomer"
  constructor(private http: HttpClient) { }
  signupCustomer(data: any) {
    return this.http.post(this.url, data)
  }
}

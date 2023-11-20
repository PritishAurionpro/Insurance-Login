import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupEmployeeService {
  url = "https://localhost:7029/api/Employee/addEmployee"
  constructor(private http: HttpClient) { }

  signupEmployee(data: any) {
    return this.http.post(this.url, data)
  }
}

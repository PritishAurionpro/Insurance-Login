import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupUserService {
  url = "https://localhost:7029/api/User"
  constructor(private http: HttpClient) { }

  signupUser(data: any) {
    return this.http.post(this.url, data)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupAgentService {
  url = "https://localhost:7029/api/Agent/addAgent"
  constructor(private http: HttpClient) { }

  signupAgent(data: any) {
    return this.http.post(this.url, data)
  }
}

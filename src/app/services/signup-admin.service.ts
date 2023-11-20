import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupAdminService {
  url = "https://localhost:7029/api/Admin/addAdmin"
  constructor(private http: HttpClient) { }
  
  signupAdmin(data: any) {
    return this.http.post(this.url, data);
  }
}

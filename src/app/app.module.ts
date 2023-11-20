import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { JwtInterceptor } from './jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    CreateAdminComponent,
    CreateEmployeeComponent,
    CreateAgentComponent,
    CreateCustomerComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass:JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';

const routes: Routes = [
  {
    path: "",
    component: LoginUserComponent
  },
  {
    path: "createadmin",
    component: CreateAdminComponent
  },
  {
    path: "createemployee",
    component: CreateEmployeeComponent
  },
  {
    path: "Createagent",
    component: CreateAgentComponent
  },
  {
    path: "Createemployee",
    component: CreateEmployeeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

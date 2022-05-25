import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ValidationComponent } from './validation/validation.component';

const routes: Routes = [
  { path: '', component: ValidationComponent },
  {path: "validationComponent", component: ValidationComponent},
  {path:"src\app\login",component: LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

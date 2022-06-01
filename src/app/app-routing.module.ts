import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { ValidationComponent } from './validation/validation.component';

const routes: Routes = [
  { path: 'AppComponent', component: AppComponent },
  {path: "validation", component: ValidationComponent},
  {path:"login",component: LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  { path: 'admin',
  canActivate: [AuthGuard],
  loadChildren: () =>
    import('./modules/admin/admin.module').then((m) => m.AdminModule),
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

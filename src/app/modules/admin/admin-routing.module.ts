import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DriverMasterComponent } from './components/driver-master/driver-master.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SliderimagesComponent } from './components/sliderimages/sliderimages.component';
import { VehicleRegistrationComponent } from './components/vehicle-registration/vehicle-registration.component';

const routes: Routes = [{path:'',component:DashboardComponent,
children:[
    { path: '', redirectTo: '/admin', pathMatch: 'full' },
    { path:'DriverMaster',component:DriverMasterComponent },
    { path:'Sliderimages',component:SliderimagesComponent},
    { path:'VehicleMaster',component:VehicleRegistrationComponent}
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

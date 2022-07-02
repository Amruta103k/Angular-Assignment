import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DriverMasterComponent } from './components/driver-master/driver-master.component';
import { SliderimagesComponent } from './components/sliderimages/sliderimages.component';
import { ReactiveFormsModule,FormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VehicleRegistrationComponent } from './components/vehicle-registration/vehicle-registration.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DriverMasterComponent,
    SliderimagesComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    VehicleRegistrationComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }

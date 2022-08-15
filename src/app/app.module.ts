import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ValidationComponent } from './validation/validation.component';
import { LoginComponent } from './Components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatePipe } from '@angular/common';
import { ListFilterPipe } from './Pipes/listFilterPipe';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {ServiceService} from './services/db-connectivity-service.service';

@NgModule({
  declarations: [AppComponent, ValidationComponent, LoginComponent,ListFilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [AuthService,DatePipe,HttpClient,ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}

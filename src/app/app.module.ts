import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { HomeComponent } from './home/home.component';
 import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import {AngularFireDatabaseModule} from "angularfire2/Database"
import { RegisterComponent } from './register/register.component';
import { environment } from '../environments/environment';
import { AppointmentComponent } from './appointment/appointment.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    AppointmentComponent   
    
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    DlDateTimePickerDateModule,
    BrowserModule,
    FormsModule,
   
RouterModule.forRoot([
  {path:'',component:HomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'login',component:LoginComponent},  
  {path:'register',component:RegisterComponent} ,
  {path:'appointment',component:AppointmentComponent} 
  
  
  ])    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

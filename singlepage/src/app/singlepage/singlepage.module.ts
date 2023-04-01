
//import { LoginComponent } from './login.component';
//import { loginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglepageComponent } from './singlepage.component';
import { singlepageRoutingModule } from './singlepage-Routingmodule';



@NgModule({
  declarations: [SinglepageComponent],
  imports: [
    CommonModule,
    singlepageRoutingModule,
    CommonModule
  ]
})
export class SinglepageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Menu/login/login.component';
import { HomeComponent } from './Menu/home/home.component';
import { SignUpComponent } from './Menu/sign-up/sign-up.component';
import { AboutUsComponent } from './Menu/about-us/about-us.component';


const routes: Routes = [
  { path: 'home',  component: HomeComponent } ,
  { path: 'login', component: LoginComponent},
  {path:'sign-up', component: SignUpComponent},
  {path:'about-us' , component: AboutUsComponent}


];

@NgModule({

  imports:[  RouterModule.forRoot(routes) , CommonModule ],
  declarations:[
  ],
  exports:[ RouterModule ]

 
})
export class AppRoutingModule { }

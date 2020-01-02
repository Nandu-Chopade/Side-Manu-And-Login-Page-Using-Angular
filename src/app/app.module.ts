import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './Menu/login/login.component';
import { HomeComponent } from './Menu/home/home.component';
import { SignUpComponent } from './Menu/sign-up/sign-up.component';
import { AboutUsComponent } from './Menu/about-us/about-us.component';



 @NgModule({
    imports:[
        BrowserModule, 
        FormsModule,
        AppRoutingModule
    ],
    declarations:[
        AppComponent,
        LoginComponent,
        HomeComponent,
        SignUpComponent,
        AboutUsComponent,

       
    ],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule {}
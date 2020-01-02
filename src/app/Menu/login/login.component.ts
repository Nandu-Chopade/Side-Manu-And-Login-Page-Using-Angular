import {Component} from '@angular/core';

@Component({
selector:'Login-page',
templateUrl:'./login.component.html',
styleUrls:[ './login.component.css']


})

export class LoginComponent{
Remove:boolean= true;
showloginPage: boolean = true;

getRemove() : void {
    this.Remove = !this.Remove;
}

//setLoginPage() : void {
   // this.showloginPage = !this.showloginPage;
//}
    
}
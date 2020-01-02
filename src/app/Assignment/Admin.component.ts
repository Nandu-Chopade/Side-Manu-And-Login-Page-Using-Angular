import { Component, OnInit } from '@angular/core';
import {Userlist} from './user.model';
@Component({
    selector:'user-app',
    templateUrl:'./User.component.html',
    styleUrls: ['./user.component.css']      
})
export class AdminComponent {
   
    userText:string;
    
    
     constructor() {
       
     }
    userInformation: Userlist[] =[ 
        {
        'Id':1,
        'usreName': 'Nandu',
        'userEmailId': 'abcd@gmail.com',
        'userphone': '8788002260'
    }, {
        'Id':2,
        'usreName': 'Akash',
        'userEmailId': 'abxcde@gmail.com',
        'userphone': '8788002261'
    }, {
        'Id':3,
        'usreName': 'Pavan',
        'userEmailId': 'abcdef@gmail.com',
        'userphone': '8788002262'
    }, {
        'Id':4,
        'usreName': 'Kiran',
        'userEmailId': 'abcpcvjdeaf@gmail.com',
        'userphone': '8788002263'
    }, {
        'Id':5,
        'usreName': 'Sagar',
        'userEmailId': 'abcqdlpegfn@gmail.com',
        'userphone': '8788002264'
    }, {
        'Id':6,
        'usreName': 'Suresh',
        'userEmailId': 'abchzdeff@gmail.com',
        'userphone': '8788002265'
    }
]



onInit() { }

}

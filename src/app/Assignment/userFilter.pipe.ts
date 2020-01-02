import {Pipe,PipeTransform} from '@angular/core';
import {Userlist} from './user.model';

@Pipe({
    name:'search'
})
export class UserSearchPipe implements PipeTransform{
    transform(value:Userlist[],userInput:string){
        //Verify user input and change in Lowercase
        userInput=userInput ? userInput.toLocaleLowerCase():null;
        return userInput ? value.filter((Info)=>
           ((Info.usreName .toLowerCase().indexOf(userInput) !== -1) || Info.userEmailId.toLowerCase().indexOf(userInput) !== -1 )
        ): value;
    }
}

import {Component} from '@angular/core';
import {EmployeeList} from './employee.model'
@Component({
selector:'Home-page',
templateUrl:'./home.component.html',
styleUrls:[ './home.component.css']


})

export class HomeComponent{
    today: number = Date.now();
    employee :EmployeeList[] = [
        
        {
        'name' : 'Myexperiments with Truth',
        'author':'M.K.Gandhi ',
        'price':'$145'
        
        },

        {
        'name' : 'The Merchant of venice',
        'author':'William shakespeare',
        'price':'$543'},
        {'name' : 'A Tale of Two Cities',
        'author':'Charles Dickens ',
        'price':'$64'},
        {'name' : 'Origin of species',
        'author':'charles Darwin ',
        'price':'$283'},
        {'name' : 'Time Machine ',
        'author':'H.G. Wells ',
        'price':'$12'},
        {'name' : 'Mein Kampf ',
        'author':'Adolf Hitler ','price':'$384'},
        {'name' : 'Invisible Man  ',
        'author':'H.G. Wells',
        'price':'$123'
    
    }
]
    
}
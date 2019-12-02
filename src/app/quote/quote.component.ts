import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quote:Quote[];
constructor() { 
this.quote=[
{id:1, name:'"Act as if what you do makes a difference. It does'},
{id:2,name:'"Success is not final, failure is not fatal: it is the courage to continue that counts."'},
{id:3,name:'"Try not to become a man of success. Rather become a man of value."'},
{id:4,name:'"Life is like riding a bicycle. To keep your balance, you must keep moving."'},
{id:5,name:'"Success usually comes to those who are too busy to be looking for it."'},
{id:6,name:'"There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed."'},
];
}
   

  ngOnInit() {
  }

}

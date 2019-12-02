import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote:Quote[];

  toggleDetail(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete  this Quote for  ${this.quote[index].name}?`)
      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }

constructor() { 
this.quote=[
new Quote(1, 'William James','"Act as if what you do makes a difference. It does',new Date()),
new Quote(2,'Winston.S.Churchill','"Success is not final, failure is not fatal: it is the courage to continue that counts."',new Date()),
new Quote(3,'Albert Einstein','"Try not to become a man of success. Rather become a man of value."',new Date()),
new Quote(4,'Dr. Seuss','"Life is like riding a bicycle. To keep your balance, you must keep moving."',new Date()),
new Quote(5,'Henry David Thoreu','"Success usually comes to those who are too busy to be looking for it."',new Date()),
];
}
addNewQuote(quote){
  let quoteLength = this.quote.length;
  quote.id = quoteLength+1;
  quote.completenewDate = new Date(quote.completeDate)
  this.quote.push(quote)
}
  ngOnInit() {
  }
}

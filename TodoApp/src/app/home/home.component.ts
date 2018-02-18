import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  animations: [
    trigger('itemEnterAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 0, transform: 'translateY(0)', offset: 1.0}),
          ]))
        ]), { optional: true}),
        
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 0, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1.0}),
          ]))
        ]), { optional: true}) 
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  public inputText = "Enter first item..";
  public todoList: string[] = [];
  constructor() { }

  AddItem(): void{
    this.todoList.push(this.inputText);
  }

  RemoveItem(index: number): void{
    for(var i = 0; i < this.todoList.length; i++){
        if(i == index){
          this.todoList.splice(i, 1);
        }
    }
  }

  ngOnInit() {
  }

}

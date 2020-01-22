import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public title: string = "Todo List Page";
  public buttonStatus: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public onClick(): void {
    console.log("On Click");
  }

  public onKeyUp(event: any): void {
    console.log("On KeyUp:", event.target.value);
  }

}
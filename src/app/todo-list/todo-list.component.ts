import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public title: string = "Todo List Page";
  public buttonStatus: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';
import { TodoListComponent } from "../components/todo-list/todo-list.component";
import { AddNewTodoItemComponent } from "../components/add-new-todo-item/add-new-todo-item.component";
import { todoList, TodoServiceService } from '../todo-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  imports: [TodoListComponent, AddNewTodoItemComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  TodoList: Observable<todoList> | undefined



    constructor(private service: TodoServiceService){}

  ngOnInit(): void {
    this.TodoList = this.service.get()
  }
}

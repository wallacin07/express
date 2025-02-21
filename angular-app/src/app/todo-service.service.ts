import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { todo } from './model/todo';


export interface TodoItem {
  _id?: string;
  description: string;
  completed: boolean;
  __v?: number;
}

export type TodoList = TodoItem[];

@Injectable({
  providedIn: 'root'
})



export class TodoServiceService {


  private apiUrl = "http://localhost:8080/";

  constructor(private client: HttpClient) { }

  get() : Observable<TodoList>{
    return this.client.get<TodoList>(this.apiUrl+ "todoList")
  }

  post(description: string, completed: boolean) {
    const newTodo: TodoItem = {
      description: description,
      completed: completed
    };
    console.log(newTodo)
    this.client.post(this.apiUrl + "todoList",newTodo).subscribe(res => console.log(res))
  }
}

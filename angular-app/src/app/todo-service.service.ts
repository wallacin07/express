import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { todo } from './model/todo';


export interface todoList{
  todoList: todo[]
}

export interface todoItem{
  description: string,
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})



export class TodoServiceService {


  private apiUrl = "http://localhost:8080";

  constructor(private client: HttpClient) { }

  get() : Observable<todoList>{
    return this.client.get<todoList>(this.apiUrl)
  }

  post(description: string, completed: boolean): Observable<string> {
    const newTodo: todoItem = {
      description: description,
      completed: completed
    };
    return this.client.post<string>(this.apiUrl,newTodo)
  }
}

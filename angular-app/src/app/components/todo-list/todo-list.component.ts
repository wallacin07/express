import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TodoList } from '../../todo-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-list',
  imports: [CommonModule,],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent{


  @Input()
  TodoList: TodoList | null = null;

}

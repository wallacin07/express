import { Component, Input } from '@angular/core';
import { todoList } from '../../todo-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  @Input()
  TodoList: Observable<todoList>| undefined
}

import { Component } from '@angular/core';
import { TodoServiceService } from '../../todo-service.service';

@Component({
  selector: 'add-new-todo-item',
  imports: [],
  templateUrl: './add-new-todo-item.component.html',
  styleUrl: './add-new-todo-item.component.css'
})
export class AddNewTodoItemComponent {

    isModalOpen = false

    constructor(private service: TodoServiceService){}

    closeModal(){
      this.isModalOpen = false
    }

    openModal(){
      this.isModalOpen = true
    }

    addTask(description: string , completed: boolean){
      this.service.post(description,completed)
    }
}

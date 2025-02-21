import { Component, Input } from '@angular/core';
import { TodoServiceService } from '../../todo-service.service';
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'add-new-todo-item',
  imports: [FormsModule],
  templateUrl: './add-new-todo-item.component.html',
  styleUrl: './add-new-todo-item.component.css'
})
export class AddNewTodoItemComponent {

    newTaskDescription: string = "";
    completed : boolean = false

    isModalOpen = false

    constructor(private service: TodoServiceService){}

    closeModal(){
      this.isModalOpen = false
    }

    openModal(){
      this.isModalOpen = true
    }

    addTask(description: string , completed: boolean){
      console.log(description,completed)
      this.service.post(description,completed)
      this.newTaskDescription = "";
      this.completed = false
      this.closeModal()
    }
}

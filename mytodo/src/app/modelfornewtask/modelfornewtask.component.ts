import { Component, EventEmitter, Output } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms';
import { AddtaskService } from '../addtask.service';
import { TodoComponent } from '../todo/todo.component';
@Component({
  selector: 'app-modelfornewtask',
  templateUrl: './modelfornewtask.component.html'
})
export class ModelfornewtaskComponent {
  isVisible = false;
  
  public smsg:boolean = false;
  newTaskForm=new FormGroup({
    task:new FormControl(''),
    id:new FormControl(),
    completed:new FormControl(false),
    // id:new FormControl(99),
  });
  constructor(private addtaskservice:AddtaskService) {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    
    this.addtaskservice.storeInDb(this.newTaskForm.value);
    this.newTaskForm.reset({});
    this.isVisible = false;

   
    
    
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}

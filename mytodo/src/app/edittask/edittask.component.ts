import { Component, Input } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms';
import { EdittaskService } from '../edittask.service';
@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html'
})
export class EdittaskComponent {
  isVisible = false;
@Input() public tid: number;
  updateTaskForm=new FormGroup({
    task:new FormControl(''),
    id:new FormControl(),
    // completed:new FormControl(false),
    // id:new FormControl(99),
  });
  constructor(private et:EdittaskService) {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.updateTaskForm.value.id=this.tid;
    // console.log(this.updateTaskForm.value.userId);
    this.et.updateDb(this.updateTaskForm.value);
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}

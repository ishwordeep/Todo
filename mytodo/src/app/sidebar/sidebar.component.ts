import { Component } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  visible = false;
  public tasklist:any=[];
  constructor(private ds:DisplayService){}
  ngOnInit() {
    // this.ds.getTasklist().subscribe(tasklist => this.tasklist = tasklist);
    // console.log("Hello:::");
    // console.log(this.tasklist);
    this.ds.getComTaskList().subscribe(data => this.tasklist=data);
    console.log("Lets Check: ")
    console.log(this.tasklist);
  }
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}

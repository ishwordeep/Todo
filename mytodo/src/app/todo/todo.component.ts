import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public tasklist:any=[];
  
  constructor(private ds:DisplayService) { }

  ngOnInit() {
    // this.ds.getTasklist().subscribe(tasklist => this.tasklist = tasklist);
    // console.log("Hello:::");
    // console.log(this.tasklist);
    this.ds.getTasklist().subscribe(data => this.tasklist=data);
    console.log("Lets Check: ")
    console.log(this.tasklist);
    
  }

}

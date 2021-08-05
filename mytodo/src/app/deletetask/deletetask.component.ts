import { Component, Input } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { DeleteserviceService } from '../deleteservice.service';
@Component({
  selector: 'app-deletetask',
  templateUrl: './deletetask.component.html'
})
export class DeletetaskComponent {
  confirmModal: NzModalRef; // For testing by now
  @Input() public tid:number;
// public tid: number;
  constructor(private modal: NzModalService,private deleteservice:DeleteserviceService) {}

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          // console.log('Is it oo');
          // console.log("DATA FROM DELETE COMPONENT:"+this.tid);
          this.deleteservice.deleteDataFromDb(this.tid);
          
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'))
    });
    
  }
  
  
}

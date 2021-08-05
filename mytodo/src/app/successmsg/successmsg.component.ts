import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-successmsg',
  templateUrl: './successmsg.component.html'
})
export class SuccessmsgComponent {
  createBasicMessage(): void {
    this.message.success('This is a prompt message for success, and it will disappear in 10 seconds', {
      nzDuration: 10000
    });
  }

  constructor(private message: NzMessageService) {}
}

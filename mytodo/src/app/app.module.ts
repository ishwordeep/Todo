import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
// import { AddnewtaskComponent } from './addnewtask/addnewtask.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ModelfornewtaskComponent } from './modelfornewtask/modelfornewtask.component';

import{ReactiveFormsModule} from '@angular/forms';
import { EdittaskComponent } from './edittask/edittask.component';
import { DeletetaskComponent } from './deletetask/deletetask.component';
import { ChecktaskComponent } from './checktask/checktask.component';

import{DisplayService} from './display.service';
import { SuccessmsgComponent } from './successmsg/successmsg.component';
import { SidebarComponent } from './sidebar/sidebar.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent,
    // AddnewtaskComponent,
    ModelfornewtaskComponent,
    EdittaskComponent,
    DeletetaskComponent,
    ChecktaskComponent,
    SuccessmsgComponent,
    SidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },DisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }

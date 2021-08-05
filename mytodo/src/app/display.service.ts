import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DisplayService {
private _url = 'http://localhost:3000/taskTable?completed=false';
private _urlcom = 'http://localhost:3000/taskTable?completed=true';
  constructor(private http: HttpClient) { }
  getTasklist(){
    console.log('From Sevice');
    return this.http.get(this._url);
  }
  getComTaskList(){
    return this.http.get(this._urlcom);
  }
}

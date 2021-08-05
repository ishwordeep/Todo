import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddtaskService {
  private _url: string = 'http://localhost:3000/tasktable';
  constructor(private http: HttpClient) { }
  storeInDb(postData){
    this.http.post(this._url, postData).subscribe(data => {
      console.log(data);
  
    });
  }
}

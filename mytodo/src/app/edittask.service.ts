import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EdittaskService {
  private _url: string = 'http://localhost:3000/tasktable/';
  constructor(private http:HttpClient) { }
  updateDb(postData){
    // console.log('CHECKDATA:::::::');
    // console.log(JSON.stringify(postData.userId));
    // console.log('CHECKed::::::');
    
    this.http.put(this._url + JSON.stringify(postData.id), postData).subscribe(data => {

      console.log(data);
  
    });
  }
}

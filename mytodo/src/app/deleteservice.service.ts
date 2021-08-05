import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DeleteserviceService {
  private _url: string = 'http://localhost:3000/tasktable/';
  constructor(private http: HttpClient) { }
  deleteDataFromDb(tid:number){
    this.http.delete(this._url+tid).subscribe(data => {
      // console.log("UUURRLLL::"+this._url+tid);
      console.log("Data Deleted hai"+data);
      
    });
  }
}

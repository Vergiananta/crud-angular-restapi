import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl:any= 'http://api.sunhouse.co.id/bookstore/index.php/';
  constructor(
    public http:HttpClient
    ) { }

    get(url){
      return this.http.get(this.serverUrl+url);
    }
    
    post(url,data){
      return this.http.post(this.serverUrl+url,data);
    }
}
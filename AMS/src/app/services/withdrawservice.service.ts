import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WithDraw } from '../models/withdraw';

@Injectable({
  providedIn: 'root'
})
export class WithdrawserviceService {


  constructor(private http:HttpClient) { }
  getWithDraw(): Observable<WithDraw>{
    return this.http.get<WithDraw>('http://localhost:8028/allusers');  // change
  }
  addWithDraw(withdraw:any){
    return this.http.post('http://localhost:8028/addUser',withdraw); //change
  }
  deleteWithDraw(withdraw:any){

    return this.http.delete('');

  }
}
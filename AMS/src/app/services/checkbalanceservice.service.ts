import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CheckBalance } from '../models/checkbalance';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckbalanceserviceService {

  
  constructor(private http:HttpClient) { }

  getCheckBalance(): Observable<CheckBalance>{
    return this.http.get<CheckBalance>('http://localhost:8028/allusers'); //change
  }
  addCheckBalance(checkbalance:any){
    return this.http.post('http://localhost:8028/addUser',checkbalance); //c
  }
}

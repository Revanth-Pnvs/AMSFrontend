import { Injectable } from '@angular/core';
import { Deposit } from '../models/deposit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepositserviceService {
 
  
  constructor(private http:HttpClient) { }

  getdeposit(): Observable<Deposit>{
    return this.http.get<Deposit>('http://localhost:8028/allusers');
  }
  addDeposit(userdetails:any){
    return this.http.post('http://localhost:8028/addUser',Deposit);
  }
}

import { Injectable } from '@angular/core';
import { Transfer } from '../models/transfer';
import { HttpClient } from '@angular/common/http';
import { Deposit } from '../models/deposit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferserviceService {

  constructor(private http:HttpClient) { }

  gettransfer(): Observable<Transfer>{
    return this.http.get<Transfer>('http://localhost:8028/allusers');
  }
  addtransfer(transfer:any){
    return this.http.post('http://localhost:8028/addUser',transfer);
  }  
}
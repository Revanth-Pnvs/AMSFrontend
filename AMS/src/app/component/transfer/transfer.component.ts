import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Transfer } from 'src/app/models/transfer';
import { TransferserviceService } from 'src/app/services/transferservice.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  
  
  constructor(private service:TransferserviceService,@Inject(Router)private router:Router){}
  public transfer = new Transfer;
 
   ngOnInit(): void {
    
   }
   OnSubmit(form:NgForm){
     if(form.valid){
       this.service.addtransfer(this.transfer).subscribe(data=>{
         
       })
       alert('Transfer successfull');
     }
     else{
       alert('Not Found');
     }
   }
 }

import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Deposit } from 'src/app/models/deposit';
import { DepositserviceService } from 'src/app/services/depositservice.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
 
   
  constructor(private service:DepositserviceService,@Inject(Router)private router:Router){}
  public deposit = new Deposit;
 
   ngOnInit(): void {
    
   }
   OnSubmit(form:NgForm){
     if(form.valid){
       this.service.addDeposit(this.deposit).subscribe(data=>{
         
       })
       alert('Deposit successful');
     }
     else{
       alert('Not Found');
     }
   }
 
 
 }
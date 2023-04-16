import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { WithDraw } from 'src/app/models/withdraw';
import { WithdrawserviceService } from 'src/app/services/withdrawservice.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
 
   constructor(private service:WithdrawserviceService,private router:Router){}
   public withdraw = new WithDraw;
  
    ngOnInit(): void {
     
    }
    OnSubmit(form:NgForm){
      if(form.valid){
        this.service.addWithDraw(this.withdraw).subscribe(data=>{
          
        })
        alert('With draw successful');
      }
      else{
        alert('Not Found');
      }
    }
  
  
  }
  

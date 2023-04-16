import { Component, INJECTOR, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckBalance } from 'src/app/models/checkbalance';
import { CheckbalanceserviceService } from 'src/app/services/checkbalanceservice.service';

@Component({
  selector: 'app-checkbalance',
  templateUrl: './checkbalance.component.html',
  styleUrls: ['./checkbalance.component.css']
})
export class CheckbalanceComponent implements OnInit {

  constructor(private service:CheckbalanceserviceService,@Inject(Router)private router:Router){}
  public checkbalance = new CheckBalance;

  ngOnInit(): void {
   
  }
  OnSubmit(form:NgForm){
    if(form.valid){
      this.service.addCheckBalance(this.checkbalance).subscribe(data=>{
        
      })
      alert('Your Account Balance is {{balance}}');
    }
    else{
      alert('Not Found');
    }
  }

}

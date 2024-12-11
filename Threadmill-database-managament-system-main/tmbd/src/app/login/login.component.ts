// import { Component } from '@angular/core';
// import { Router } from '@angular/router';



// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

// }
import { HttpClient } from '@angular/common/http';
import { Component ,OnInit ,OnDestroy } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';  
import { Observable } from "rxjs";
import { Subscription } from 'rxjs';
import {
  InsertedSuccess,
  LoginDetails,
  UniqueConstraintError,
  Read} from '../regis';
import { RegisService } from '../regis.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
    constructor(private Service:RegisService,private router: Router){}
    ngOnInit() {}
    Subscription: Subscription = new Subscription();
    a=[]
  umail:string='';
  upass:string='';
  User:LoginDetails={
  name:'',
  pass:''
  }
  Read(){
    this.umail=this.User.name;
    this.upass=this.User.pass;
    this.Subscription=this.Service.Dlogin(this.User.name).subscribe(
      (data:any)=>{
        if(data){
          this.a=data.Result[0];
          this.User={
            name:this.a[0],
            pass:this.a[1]
          }
          if(this.umail==this.User.name && this.upass==this.User.pass)
          {
            // document.write('failed');
            this.router.navigate(['/home']);
             
          }
          else{
            this.router.navigate(['/']);
            // document.write('failed');
          }
      }
        else{
         alert("Can't read");
        }
      }
    )
  }
}
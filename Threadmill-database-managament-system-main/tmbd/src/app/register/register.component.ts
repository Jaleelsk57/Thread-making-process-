// //  import { Component ,OnInit ,OnDestroy } from '@angular/core';
// // import {
// //   InsertedSuccess,
// //   CottonDetails,
// //   UniqueConstraintError,
// //   Read} from '../cotton';
//  // import { Subscription } from 'rxjs';
// // import { CottonService   } from '../cotton.service';
// //  import { NgForm } from '@angular/forms'

// // @Component({
// //   selector: 'app-register',
// //   templateUrl: './register.component.html',
// //   styleUrls: ['./register.component.css']
// // })
// // export class RegisterComponent implements OnInit , OnDestroy {
  
// //   public dat=[];

// //   constructor(private Service:CottonService ){}
// //   ngOnInit() {}
// //   Subscription: Subscription = new Subscription();
// //   User: CottonDetails = {
// //     ID:'',
// //     TOC:'',
// //     QIN:'',
// //     ETWC:'',
// //     LOC:''
// //   };
 

// //   Delete(){
// //     this.ErrorMsg='';
// //     this.SuccessMsg='';
// //     this.Subscription=this.Service.Delete(this.User.ID).subscribe(
// //       (data)=>{
// //         if(data){
// //           console.log(data);
// //           document.write('Successfully deleted');
// //         }
// //         else{
// //           console.log("failed");
// //         }
// //       }
// //     )
// //   }
  
// //   Read(){
// //     this.ErrorMsg='';
// //     this.SuccessMsg='';
// //     this.Subscription=this.Service.Read(this.User.ID).subscribe(
// //       (data : any)=>{
// //         if(data){
// //           this.dat=data.Result[0];
// //           console.log(data);
// //           this.User={
// //             ID:this.dat[0],
// //             TOC:this.dat[1],
// //             QIN:this.dat[2],
// //             ETWC:this.dat[3],
// //             LOC:this.dat[4]
// //           }
// //         }
// //         else{
// //           console.log("failed");
// //         }
// //       }
// //     )
// //   }

// //   update(){
// //     this.ErrorMsg='';
// //     this.SuccessMsg='';
// //     this.Subscription=this.Service.Update(this.User.ID,this.User).subscribe(
// //       (data:any)=>{
// //         if(data){
// //           this.SuccessMsg="updated successfully";
// //           document.write("updated successfully");

// //         }
// //         else{
// //           console.log("can't update");
// //         }
// //       }
// //     )
// //     console.log(this.User);
// //   }
// //   ngOnDestroy() {
// //     this.Subscription.unsubscribe();
// //   }
// // }
// import { Component, OnInit } from '@angular/core';
// import { CottonService } from '../cotton.service';
// import { InsertedSuccess, Read, CottonDetails,UniqueConstraintError} from '../cotton';
// import { Subscription } from 'rxjs';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css'],
// })
// export class RegisterComponent implements OnInit {
//   ngOnInit(): void {
//     this.Read('All');
//   }
//   constructor(private Service: CottonService) {}
//   ID: string = '';
//   GotResult: Boolean = false;
//   UpdatedUser: CottonDetails = {
//     TOC: '',
//     QIN:'',
//     ETWC:'',
//     LOC:'',
//     ID: ''
//   };
//   Results = [];
//   Read(ID: string) {
//     this.Service.Read(ID).subscribe({
//       next: (Data: Read) => {
//         this.Results = Data.Result;
//         this.GotResult = true;
//       },
//       error: (Err) => {
//         console.log(Err);
//       },
//     });
//   }
//   Update(ID: string, Details: CottonDetails) {
//     this.Service.Update(ID, Details).subscribe({
//       next: (Data) => {
//         console.log(Data);
//         this.Read('All');
//       },
//       error: (err) => {
//         console.log(err);
//       },
//     });
//   }
//   Delete(ID: string) {
//     this.Service.Delete(ID).subscribe({
//       next: (Data: InsertedSuccess) => {
//         console.log(Data.rowsAffected);
//         this.Read('All');
//       },
//       error: (Error) => {
//         console.log(Error);
//       },
//     });
//   }



// }
import { Component, OnInit,OnDestroy } from '@angular/core';
 import { CottonService } from '../cotton.service';
 import { InsertedSuccess, Read, CottonDetails,UniqueConstraintError } from '../cotton';
 import { Subscription } from 'rxjs';

 @Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css'],
 })
 export class RegisterComponent implements OnInit,OnDestroy {
  canShow:boolean=false;
  retrive:boolean=false;
  clicked:boolean=false;
   ngOnInit(): void {
    
     this.Read('All');
   }
   Subscription: Subscription = new Subscription();
   constructor(private Service: CottonService) {}
   ID:string = '';
   GotResult: Boolean = false;
   UpdatedUser: CottonDetails = {
     ID:'',
     TOC: '',
     QIN: '',
     ETWC: '',
     LOC: '',
   };
   a=[];
  SuccessMsg = '';
  ErrorMsg = '';
   Results = [];
   Read(ID:string) {
     this.Service.Read(this.ID).subscribe({
       next: (Data: Read) => {
         this.Results = Data.Result;
         this.GotResult = true;
       },
       error: (Err) => {
         console.log(Err);
       },
     });
   }
   Readd(ID:string) {
    this.Service.Read(ID).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  //  Update(ID:string, Details: CottonDetails) {
  //    this.Service.Update(ID, Details).subscribe({
  //      next: (Data) => {
  //        console.log(Data);
  //        this.Read('All');
  //      },
  //      error: (err) => {
  //        console.log(err);
  //      },
  //    });
  //  }
 
   Delete(ID:string) {
     this.Service.Delete(ID).subscribe({
       next: (Data: InsertedSuccess) => {
         console.log(Data.rowsAffected);
         this.Read('All');
       },
       error: (Error) => {
         console.log(Error);
       },
     });
   }


   Update(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Update(this.UpdatedUser.ID,this.UpdatedUser).subscribe(


      
      (data:any)=>{
        if(data){
        
          this.SuccessMsg = `${this.UpdatedUser.ID} updated sucessfully`;
        }
        else{
          this.ErrorMsg = `${this.UpdatedUser.ID} No record Found`;
        }

      }
    )
    
  alert(" Updated successfully (●'◡'●)")
   
    console.log(this.UpdatedUser);
    this.canShow=false;
  }
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.canShow=false;
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
   
 }
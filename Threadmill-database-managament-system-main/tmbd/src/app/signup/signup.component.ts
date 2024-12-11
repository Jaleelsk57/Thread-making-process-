// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent {

// }
import { Component,OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {
  InsertedSuccess,
  RegisDetails,
  UniqueConstraintError,
} from '../regis';
import { Subscription } from 'rxjs';
import { RegisService } from '../regis.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,OnDestroy {
  constructor(private Service: RegisService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: RegisDetails= {
    email: '',
    pass:'',
    rpass:'',
    name: '',
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.name} alredy Exists`;
          
        } else {
          this.SuccessMsg = `${this.User.name} Inserted Succesfully`;
          
        }
        
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  }
  
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}

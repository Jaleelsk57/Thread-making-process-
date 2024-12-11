import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  CottonDetails,
  UniqueConstraintError,
} from '../cotton';
import { Subscription } from 'rxjs';
import { CottonService } from '../cotton.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css'],
})
export class InsertComponent implements OnInit, OnDestroy {
  constructor(private Service: CottonService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: CottonDetails= {
    TOC: '',
    QIN:'',
    ETWC:'',
    LOC:'',
    ID: '',
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';



    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.ID} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.ID} Inserted Succesfully`;
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
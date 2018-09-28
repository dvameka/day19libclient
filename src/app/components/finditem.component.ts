import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {BooklibDBService} from '../services/booklibDB.service';


@Component({
  selector: 'app-finditem',
  templateUrl: './finditem.component.html',
  styleUrls: ['./finditem.component.css']
})
export class FinditemComponent implements OnInit {

  item = {};
/*  bkvalue: bklimit[] = [
    {value: '5', viewValue: '5 records'},
    {value: '10', viewValue: '10 records'},
    {value: '15', viewValue: '15 records'}
  ];
}
*/

  @Output()

  bookItems = new EventEmitter();

  constructor(private booklibdbsvc: BooklibDBService) { }

  ngOnInit() {

  }

  searchItem(form: NgForm) {
    const bktitle = '%' + form.value.bktitle + '%';
    const authname = '%' + form.value.authname + '%';
    const pglimit = form.value.pglimit;

    console.log('PGlimit >>>>>', pglimit);

    this.booklibdbsvc.getItem('0', pglimit, bktitle, authname)
    .then((results) => {
      this.item = results;
    });


    this.bookItems.emit(this.item);

    console.log('*Loggin this  ', this.item);
  }
}

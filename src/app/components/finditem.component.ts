import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {GrocerDBService} from '../services/grocerDB.service';


@Component({
  selector: 'app-finditem',
  templateUrl: './finditem.component.html',
  styleUrls: ['./finditem.component.css']
})
export class FinditemComponent implements OnInit {

  item = {};

  @Output()
  // albumAdded = new EventEmitter<string>();
  itemList = new EventEmitter();

  constructor(private grocerdbsvc: GrocerDBService) { }

  ngOnInit() {

  }

  searchItem(form: NgForm) {
    const brand = '%' + form.value.brand + '%';
    const pdname = '%' + form.value.pdname + '%';

    this.grocerdbsvc.getItem('0', '50', brand, pdname)
    .then((results) => {
      this.item = results;
    });

    console.log('>>>>>', brand);

    this.itemList.emit(this.item);

    console.log('*Loggin this  ', this.item);
  }
}

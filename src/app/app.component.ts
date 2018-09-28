import { Component, EventEmitter, Output, Input } from '@angular/core';

/*
export interface itemList {
  id: number;
  brand: string;
  name: string;
}
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day8 Grocer Client';
  itemResult: string[];

  // myItemList: itemList[];

  @Input()
  item: any;


  @Output()

  propagateList(item: any) {
    console.log ('>>> Items Found: ', item);

    this.itemResult = Object.values(item);

    console.log('>> this.itemResult<< ', this.itemResult);

    }

}

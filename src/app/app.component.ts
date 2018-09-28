import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booklibrary';
  searchResult: string[];


  @Input()
  getItem: any;


  @Output()

  BookList(getItem: any) {
    console.log ('>>> search Found: ', getItem);

    this.searchResult = Object.values(getItem);

    console.log('>> this.itemResult >> ', this.searchResult);

    }

}

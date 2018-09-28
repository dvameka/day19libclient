import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {take} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class BooklibDBService {

  constructor(private http: HttpClient) { }

  getItem(offset = '0', pglimit = '', bktitle, authname): Promise<any> {

    const bkresult = new HttpParams()
      .set('offset' , offset)
      .set('pglimit' , pglimit)
      .set('bktitle', bktitle)
      .set('authname', authname);

    return (
      this.http.get('http://localhost:3000/booklist', {params: bkresult})
        .pipe(take(1)).toPromise()
    );

  }
}

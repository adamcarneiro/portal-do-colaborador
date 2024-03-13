import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private data = new Subject<string>
  data$ = this.data.asObservable();

  setData(data: string){
    this.data.next(data)
  }
  constructor() { }


}


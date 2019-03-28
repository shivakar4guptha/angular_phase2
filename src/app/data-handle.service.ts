import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandleService {

  private sub = new Subject();
  constructor() { }

  setData(data){
   this.sub.next(data);
  }

  getData(){
    return this.sub.asObservable();
  }
}

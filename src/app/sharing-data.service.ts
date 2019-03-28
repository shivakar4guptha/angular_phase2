import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  setSub = new Subject;
  constructor() { }
  sendingData(value){
    this.setSub.next(value);
  }
  gettingData(){
    return this.setSub.asObservable();
  }
}

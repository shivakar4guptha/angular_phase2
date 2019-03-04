import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  constructor(private httpclient: HttpClient) {

   }
   getSamleData (){
     return this.httpclient.get("./assets/initial.json")
   }
}

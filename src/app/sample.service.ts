import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private httpClient: HttpClient) { }

  getJsonData(){
   return this.httpClient.get("http://dummy.restapiexample.com/api/v1/employees");
  }

  postJsonDaeta(userData){
    return this.httpClient.post("url", userData)
  }
}



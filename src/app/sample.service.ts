import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
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
    let url = "http://dummy.restapiexample.com/api/v1/create";
    return this.httpClient.post(url, userData);
  }
  deleteJsonData(inputData){
    let url = "	http://dummy.restapiexample.com/api/v1/update/4794";
    return this.httpClient.delete(url);
  }
  getEmpData(id){
    //let url = "http://dummy.restapiexample.com/api/v1/employee/"+id;
    let url = `http://dummy.restapiexample.com/api/v1/employee/${id}`;
    
    return this.httpClient.get(url);
  }
}
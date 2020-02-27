import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private data: string;
  constructor(private httpClient : HttpClient) { }
  //Singleton create one instance and shared by two component app and service demo.
  setData(newData) {
    this.data = newData;
  }

  getData(){
    return this.data;
  }

  //Api call GET Method
  getEmployee() {
    return this.httpClient.get('http://dummy.restapiexample.com/api/v1/employees');
  }

  //Api call POST Method
  createEmployeeData(empObj: any) {
    return this.httpClient.post('https://reqres.in/api/users', empObj);
  }

  //Api call PUT Method
  updateEmployee(empObj :any){
    return this.httpClient.put("https://reqres.in/api/users/2",empObj);
  }
  deleteEmployee(){
    return this.httpClient.delete("https://reqres.in/api/users/2");
  }

}

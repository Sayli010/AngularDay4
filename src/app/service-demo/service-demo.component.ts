import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit {
  employeeData = [];
  createdEmployee: any;
  updateEmployee : any;
  
  constructor(private loginService:LoginService) { }

  ngOnInit() {
   console.log(this.loginService.getData());
  }

  fetchData() {
    this.loginService.getEmployee()
      .subscribe((result: any) => {
        console.log(result);
        this.employeeData = result.data;
      });
  }

  createEmployee() {
    const obj = {
      "name": "morpheus",
      "job": "leader"
    };

    this.loginService.createEmployeeData(obj)
      .subscribe( (result: any) => {
        console.log(result);
        this.createEmployee = result;
      });
  }

  updateEmployeeRecord(){
    const obj = {
      "name": "morpheus",
      "job": "zion resident"
  };

  this.loginService.updateEmployee(obj)
  .subscribe((result:any)=>{
    console.log(result);
    this.updateEmployee = result;
  })
  }

  deleteEmployeeRecord(){
    console.log("delete")
    this.loginService.deleteEmployee()
    .subscribe((result:any)=>{
      console.log(result);
    })
  }

}

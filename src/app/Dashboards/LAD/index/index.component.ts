import { Component, Input, OnInit } from '@angular/core';

import { Employee } from 'src/app/Entities/HR/Employee/employee';
import { EmployeeService } from 'src/app/Entities/HR/Employee/employee.service';
import { ForeignComponent } from 'src/xcore/tools/foreign.component';
import { IndexView } from 'src/xcore/tools/ui/view-base/index.view';

@Component({
  selector: 'lad-dashboard-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class LADIndexComponent extends IndexView<Employee> implements OnInit {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }
  
  ngOnInit(): void {
  }

  currentDate: Date = new Date();

  //#region -- Employee --

  employeeComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.employeeService);

  @Input()
  public set Employee(value: Employee) {
    this.currentInstance = this.employeeComponent.instance = value;
  }  


  //#endregion -- Employee --

}

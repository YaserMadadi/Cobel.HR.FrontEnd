import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/Entities/HR/Employee/employee';
import { EmployeeService } from 'src/app/Entities/HR/Employee/employee.service';
import { Coaching } from 'src/app/Entities/LAD/Coaching/coaching';

@Component({
  selector: 'app-coaching',
  templateUrl: './coaching.component.html',
  styleUrls: ['./coaching.component.scss']
})
export class CoachingComponent implements OnInit {
  

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

    //#region Employee
    private _employee: Employee;

    public get Employee(): Employee {
      return this._employee;
    }
  
    @Input()
    public set Employee(value: Employee) {
      this._employee = value;
      if (this._employee.id > 0)
        this.loadData();
    }
    //#endregion

    public CoachingList: Coaching[] = [];

  async loadData() {
    this.CoachingList = await this.employeeService.ServiceCollection.CollectionOfCoaching(this.Employee);
    
  }

}

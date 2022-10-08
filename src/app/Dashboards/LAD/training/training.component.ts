import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/Entities/HR/Employee/employee';
import { EmployeeService } from 'src/app/Entities/HR/Employee/employee.service';
import { Training } from 'src/app/Entities/IDEA/Training/training';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

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

  trainingList: Training[] = [];

  async loadData() {
    this.trainingList = await this.employeeService.ServiceCollection.CollectionOfTraining(this.Employee);
    //console.log(this.trainingList);

  }

}

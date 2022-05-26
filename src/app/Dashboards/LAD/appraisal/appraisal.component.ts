import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/Entities/HR/Employee/employee';
import { EmployeeService } from 'src/app/Entities/HR/Employee/employee.service';
import { AppraiseResult } from 'src/app/Entities/PMS/AppraiseResult/appraiseResult';
import { CriticalIncident } from 'src/app/Entities/PMS/CriticalIncident/criticalIncident';
import { TargetSettingService } from 'src/app/Entities/PMS/TargetSetting/targetSetting.service';

@Component({
  selector: 'lad-appraisal',
  templateUrl: './appraisal.component.html',
  styleUrls: ['./appraisal.component.scss']
})
export class AppraisalComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private targetSettingService: TargetSettingService
  ) { }

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



  async loadData() {

    this.loadAppraisalResult();

    this.loadCriticalIncident();
  }


  oldRangeAppraisal: boolean = false;

  criticalIncidentList: CriticalIncident[] = [];

  async loadCriticalIncident() {
    let criticalIncidentList = await this.employeeService.ServiceCollection.CollectionOfCriticalIncident(this.Employee);
  }

  async loadAppraisalResult() {
    let appraisalResultList: AppraiseResult[] = [];

    let targetSettingList = await this.employeeService.ServiceCollection.CollectionOfTargetSetting(this.Employee);
    targetSettingList.forEach(async targetSetting => {
      appraisalResultList = await this.targetSettingService.ServiceCollection.CollectionOfAppraiseResult(targetSetting);
    });

    //this.oldRangeAppraisal = appraisalResultList.filter(item => this.Employee.companyComponent.id == 1 && item.period?.id <= 11).length > 0;
  }

  CriticalIncidentTypeCount(criticalIncidenType_id: number) {
    return this.criticalIncidentList.filter(item => item.criticalIncidentType.id == criticalIncidenType_id).length;
  }
}

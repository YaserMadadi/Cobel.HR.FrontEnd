import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/Entities/HR/Employee/employee';
import { EmployeeService } from 'src/app/Entities/HR/Employee/employee.service';
import { Assessment } from 'src/app/Entities/LAD/Assessment/assessment';
import { AssessmentService } from 'src/app/Entities/LAD/Assessment/assessment.service';
import { AssessmentScore } from 'src/app/Entities/LAD/AssessmentScore/assessmentScore';
import { CompetencyItem } from 'src/app/Entities/PMS/CompetencyItem/competencyItem';
import { CompetencyItemService } from 'src/app/Entities/PMS/CompetencyItem/competencyItem.service';
import { ActionPlanComponent } from '../action-plan/action-plan.component';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private competencyService: CompetencyItemService,
    private assessmentService: AssessmentService
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

    public barChartData: any[] = [];

  assessmentScoreList: AssessmentScore[] = [];

  competencyItems: CompetencyItem[] = [];

  //personPosition: PersonPosition = new PersonPosition();

  prePosition: string;

  assessmentList: Assessment[] = [];

  async loadData() {
    this.assessmentList = [];
    this.assessmentScoreList = [];
    this.initiateLabels();
    let assess = await this.employeeService.ServiceCollection.CollectionOfAssessment(this.Employee);
    assess.forEach((assessment, index) => {
      this.assessmentService.ServiceCollection.CollectionOfAssessmentScore(assessment)
        .then(list => {
          //this.assessmentScoreList.push(...list);
          this.appendChartData(index, assessment, list);
        })

    });
    // let personReportLineList: PersonPosition[] = [];
    // this.employeeService.ServiceCollection.CollectionOfPersonPosition(this.Person)
    //   .then(list => {
    //     personReportLineList = list.sort((a, b) => a.id - b.id);
    //     this.personPosition = list.length > 0 ? list[0] : new PersonPosition();
    //     this.prePosition = list.length > 2 ? list[1].position.descriptor : '-';
    //   });
  }

  async initiateLabels() {
    this.competencyItems = await this.competencyService.RetrieveAll();
    this.barChartLabels = this.competencyItems.map(a => a.title);
  }

  async appendChartData(index: number, assessment: Assessment, assessmentScoreList: AssessmentScore[]) {
    this.barChartData[index] = [];
    this.assessmentService.ServiceCollection.CollectionOfAssessmentScore(assessment)
      .then(assessmentScoreList => {
        this.barChartData[index] = [
          {
            label: 'Expected Score',
            data: assessmentScoreList.map(a => a.expectedScore),
            barThickness: 8,
            barPercentage: 0.5,
            backgroundColor: '#a8a8a9',
            hoverBackgroundColor: '#56606b',
          },
          {
            label: 'Employee Score',
            data: assessmentScoreList.map(a => a.employeeScore),
            barThickness: 8,
            barPercentage: 0.5,
            hoverBackgroundColor: '#2072d8',
          },
          {
            label: 'Manager Score',
            data: assessmentScoreList.map(a => a.managerScore), //this.assessmentScoreList.map(a => a.managerScore),
            barThickness: 8,
            barPercentage: 0.5,
            hoverBackgroundColor: '#ffc107',
          }
        ];

        if (this.assessmentList.filter(item => item.id == assessment.id).length == 0)
          this.assessmentList[index] = assessment;
      })
  }

  public barChartOptions: any = {
    scales: {
      xAxes: [{
        ticks: {
          suggestedMin: 0,
          suggestedMax: 10
        }
      }]
    },
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels: any[] = [];
  public barChartType = 'horizontalBar';//'horizontalBar';
  public barChartLegend = true;

  openActionPlan(actionPalnUI: ActionPlanComponent) {
    actionPalnUI.ShowDialog(this.Employee);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/Entities/HR/Employee/employee';
import { EmployeeService } from 'src/app/Entities/HR/Employee/employee.service';
import { AssessmentService } from 'src/app/Entities/LAD/Assessment/assessment.service';
import { AssessmentTraining } from 'src/app/Entities/LAD/AssessmentTraining/assessmentTraining';
import { Coaching } from 'src/app/Entities/LAD/Coaching/coaching';
import { CoachingService } from 'src/app/Entities/LAD/Coaching/coaching.service';
import { DevelopmentGoal } from 'src/app/Entities/LAD/DevelopmentGoal/developmentGoal';
import { EditModal } from 'src/xcore/tools/ui/view-base/edit.modal';

@Component({
  selector: 'lad-action-plan',
  templateUrl: './action-plan.component.html',
  styleUrls: ['./action-plan.component.scss']
})
export class ActionPlanComponent extends EditModal<Employee> implements OnInit {

  constructor(private employeeService: EmployeeService,
    private assessmentService: AssessmentService,
    private coachingService: CoachingService) {
    super(employeeService);
  }

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

  currentDate: Date = new Date();

  //CurrentPersonPosition: PersonPosition = new PersonPosition();

  DevelopmentGoalList: DevelopmentGoal[] = [];

  TrainingList: AssessmentTraining[] = [];

  CoachingList: Coaching[] = [];

  loadData() {
    console.log('Current Employee : ', this.Employee);
    this.DevelopmentGoalList = [];
    this.TrainingList = [];
    this.CoachingList = [];
    // this.CurrentPersonPosition = new PersonPosition();
    // this.employeeService.ServiceCollection.CollectionOfPersonPosition(this.Employee)
    //   .then(personPositionList => {
    //     this.CurrentPersonPosition = personPositionList.length == 0 ? new PersonPosition() : personPositionList[0];
    //   });
    this.employeeService.ServiceCollection.CollectionOfAssessment(this.Employee)
      .then(assessmentList => {
        assessmentList.forEach(item => {
          this.assessmentService.ServiceCollection.CollectionOfAssessmentTraining(item)
            .then(assessmentTrainingList => {
              this.TrainingList = assessmentTrainingList;
            });
          this.assessmentService.ServiceCollection.CollectionOfDevelopmentGoal(item)
            .then(developmentGoalList => {
              this.DevelopmentGoalList.push(...developmentGoalList);
            });
        })
      });

    this.employeeService.ServiceCollection.CollectionOfCoaching(this.Employee)
      .then(coachingList => {
        this.CoachingList = coachingList;
      });
  }

  onCancel() {
    this.onClose();
  }

}

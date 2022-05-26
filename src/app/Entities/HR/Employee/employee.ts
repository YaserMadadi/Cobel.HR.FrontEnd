import { Directive, OnInit } from '@angular/core';

import { Info } from '../../../../xcore/Info';
import { Validator } from '../../../../xcore/tools/Validator';
import { BusinessObject } from '../../../../xcore/business-object';
import { VisionComment } from '../../PMS/VisionComment/visionComment';
import { EmployeeDetail } from '../EmployeeDetail/employeeDetail';
import { FunctionalKPIComment } from '../../PMS/FunctionalKPIComment/functionalKPIComment';
import { VisionApproved } from '../../PMS/VisionApproved/visionApproved';
import { FunctionalObjectiveComment } from '../../PMS/FunctionalObjectiveComment/functionalObjectiveComment';
import { BehavioralAppraise } from '../../PMS/BehavioralAppraise/behavioralAppraise';
import { Vision } from '../../PMS/Vision/vision';
import { Coaching } from '../../LAD/Coaching/coaching';
import { FinalApprovement } from '../../PMS/FinalApprovement/finalApprovement';
import { Assessment } from '../../LAD/Assessment/assessment';
import { TargetSetting } from '../../PMS/TargetSetting/targetSetting';
import { EmployeeNotification } from '../EmployeeNotification/employeeNotification';
import { Training } from '../../IDEA/Training/training';
import { CriticalIncidentRecognition } from '../../PMS/CriticalIncidentRecognition/criticalIncidentRecognition';
import { FunctionalAppraise } from '../../PMS/FunctionalAppraise/functionalAppraise';
import { CriticalIncident } from '../../PMS/CriticalIncident/criticalIncident';
import { EmployeeEvent } from '../EmployeeEvent/employeeEvent';
import { Contract } from '../Contract/contract';
import { OperationalAppraise } from '../../PMS/OperationalAppraise/operationalAppraise';
import { PositionAssignment } from '../PositionAssignment/positionAssignment';
import { RoleMember } from '../../Core/RoleMember/roleMember';
import { NonOperationalAppraise } from '../../PMS/NonOperationalAppraise/nonOperationalAppraise';
import { QualitativeAppraise } from '../../PMS/QualitativeAppraise/qualitativeAppraise';
import { Person } from '../Person/person';
import { HoldingSection } from '../../Base/HoldingSection/holdingSection';
import { EmploymentStatus } from '../../Base.HR/EmploymentStatus/employmentStatus';


@Directive()
export class Employee extends BusinessObject implements OnInit {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Employee.Info) {
	
    super(id, descriptor, info);
    
  }
    
  ngOnInit() {
    
  }

  

  //region Info

  public static readonly Info: Info = new Info('HR', 'Employee', 'Employee');

  //endregion

  //#region Fields

	public person: Person = new Person();
	
	public lastEmployeeCode: number = 0;
	
	public lastHoldingSection: HoldingSection = new HoldingSection();
	
	public samAccountID: string = '';
	
	public emailAddress: string = '';
	
	public employmentStatus: EmploymentStatus = new EmploymentStatus();
	
	public lastCity: string = '';
	
	public lastDepartment: string = '';
	
	public lastPosition: string = '';
	
	public startWorkingInHoldingDate: Date = new Date();
	
	public lastTerminationDate: string = '';

	public isActive: boolean = true;

	//#endregion

  //#region Collection Properties

  public listOfCommentator_VisionComment: VisionComment[] = [];
	
	public listOfEmployeeDetail: EmployeeDetail[] = [];
	
	public listOfCommenter_FunctionalKPIComment: FunctionalKPIComment[] = [];
	
	public listOfByEmployee_VisionApproved: VisionApproved[] = [];
	
	public listOfCommenter_FunctionalObjectiveComment: FunctionalObjectiveComment[] = [];
	
	public listOfAppraiser_BehavioralAppraise: BehavioralAppraise[] = [];
	
	public listOfVision: Vision[] = [];
	
	public listOfCoaching: Coaching[] = [];
	
	public listOfApprover_FinalApprovement: FinalApprovement[] = [];
	
	public listOfAssessment: Assessment[] = [];
	
	public listOfTargetSetting: TargetSetting[] = [];
	
	public listOfEmployeeNotification: EmployeeNotification[] = [];
	
	public listOfTraining: Training[] = [];
	
	public listOfWriter_CriticalIncidentRecognition: CriticalIncidentRecognition[] = [];
	
	public listOfAppraiser_FunctionalAppraise: FunctionalAppraise[] = [];
	
	public listOfCriticalIncident: CriticalIncident[] = [];
	
	public listOfEmployeeEvent: EmployeeEvent[] = [];
	
	public listOfContract: Contract[] = [];
	
	public listOfApprover_OperationalAppraise: OperationalAppraise[] = [];
	
	public listOfPositionAssignment: PositionAssignment[] = [];
	
	public listOfRoleMember: RoleMember[] = [];
	
	public listOfApprover_NonOperationalAppraise: NonOperationalAppraise[] = [];
	
	public listOfAppraiser_QualitativeAppraise: QualitativeAppraise[] = [];

  //#endregion

  
  public get SeekInstance(): Employee {
    return Employee.SeekInstance();
  }

  public static SeekInstance() : Employee {
    let employee: Employee = new Employee();
    employee.startWorkingInHoldingDate = null;
    employee.ResetPaginate();
    return employee;
  }

  public static Validate(employee: Employee) : boolean {
    let result = Validator.Validate(employee.person) &&
					Validator.Validate(employee.lastHoldingSection) &&
					Validator.Validate(employee.samAccountID) &&
					Validator.Validate(employee.emailAddress) &&
					Validator.Validate(employee.employmentStatus) &&
					Validator.Validate(employee.lastCity) &&
					Validator.Validate(employee.lastDepartment) &&
					Validator.Validate(employee.lastPosition) &&
					Validator.Validate(employee.lastTerminationDate);
    if(result === false)
      console.log('Employee is unvalid : ', employee);
    return result;
  }
}
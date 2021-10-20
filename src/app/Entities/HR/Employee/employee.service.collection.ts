import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Employee } from './employee';

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


@Injectable({ providedIn: 'root' })
export class EmployeeServiceCollection extends ServiceCollection<Employee> {

  constructor(public API_Operation: API_Operation<Employee>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfAssessment(employee: Employee, assessment: Assessment = Assessment.SeekInstance()): Promise<Assessment[]> {
    return super.CollectionOf<Assessment>(employee, assessment);
  }

  CollectionOfBehavioralAppraise_Appraiser(appraiser: Employee, behavioralAppraise: BehavioralAppraise = BehavioralAppraise.SeekInstance()): Promise<BehavioralAppraise[]> {
    return super.CollectionOf<BehavioralAppraise>(appraiser, behavioralAppraise, 'Appraiser');
  }

  CollectionOfCoaching(employee: Employee, coaching: Coaching = Coaching.SeekInstance()): Promise<Coaching[]> {
    return super.CollectionOf<Coaching>(employee, coaching);
  }

  CollectionOfContract(employee: Employee, contract: Contract = Contract.SeekInstance()): Promise<Contract[]> {
    return super.CollectionOf<Contract>(employee, contract);
  }

  CollectionOfCriticalIncident(employee: Employee, criticalIncident: CriticalIncident = CriticalIncident.SeekInstance()): Promise<CriticalIncident[]> {
    return super.CollectionOf<CriticalIncident>(employee, criticalIncident);
  }

  CollectionOfCriticalIncidentRecognition_Writer(writer: Employee, criticalIncidentRecognition: CriticalIncidentRecognition = CriticalIncidentRecognition.SeekInstance()): Promise<CriticalIncidentRecognition[]> {
    return super.CollectionOf<CriticalIncidentRecognition>(writer, criticalIncidentRecognition, 'Writer');
  }

  CollectionOfEmployeeDetail(employee: Employee, employeeDetail: EmployeeDetail = EmployeeDetail.SeekInstance()): Promise<EmployeeDetail[]> {
    return super.CollectionOf<EmployeeDetail>(employee, employeeDetail);
  }

  CollectionOfEmployeeEvent(employee: Employee, employeeEvent: EmployeeEvent = EmployeeEvent.SeekInstance()): Promise<EmployeeEvent[]> {
    return super.CollectionOf<EmployeeEvent>(employee, employeeEvent);
  }

  CollectionOfEmployeeNotification(employee: Employee, employeeNotification: EmployeeNotification = EmployeeNotification.SeekInstance()): Promise<EmployeeNotification[]> {
    return super.CollectionOf<EmployeeNotification>(employee, employeeNotification);
  }

  CollectionOfFinalApprovement_Approver(approver: Employee, finalApprovement: FinalApprovement = FinalApprovement.SeekInstance()): Promise<FinalApprovement[]> {
    return super.CollectionOf<FinalApprovement>(approver, finalApprovement, 'Approver');
  }

  CollectionOfFunctionalAppraise_Appraiser(appraiser: Employee, functionalAppraise: FunctionalAppraise = FunctionalAppraise.SeekInstance()): Promise<FunctionalAppraise[]> {
    return super.CollectionOf<FunctionalAppraise>(appraiser, functionalAppraise, 'Appraiser');
  }

  CollectionOfFunctionalKPIComment_Commenter(commenter: Employee, functionalKPIComment: FunctionalKPIComment = FunctionalKPIComment.SeekInstance()): Promise<FunctionalKPIComment[]> {
    return super.CollectionOf<FunctionalKPIComment>(commenter, functionalKPIComment, 'Commenter');
  }

  CollectionOfFunctionalObjectiveComment_Commenter(commenter: Employee, functionalObjectiveComment: FunctionalObjectiveComment = FunctionalObjectiveComment.SeekInstance()): Promise<FunctionalObjectiveComment[]> {
    return super.CollectionOf<FunctionalObjectiveComment>(commenter, functionalObjectiveComment, 'Commenter');
  }

  CollectionOfNonOperationalAppraise_Approver(approver: Employee, nonOperationalAppraise: NonOperationalAppraise = NonOperationalAppraise.SeekInstance()): Promise<NonOperationalAppraise[]> {
    return super.CollectionOf<NonOperationalAppraise>(approver, nonOperationalAppraise, 'Approver');
  }

  CollectionOfOperationalAppraise_Approver(approver: Employee, operationalAppraise: OperationalAppraise = OperationalAppraise.SeekInstance()): Promise<OperationalAppraise[]> {
    return super.CollectionOf<OperationalAppraise>(approver, operationalAppraise, 'Approver');
  }

  CollectionOfPositionAssignment(employee: Employee, positionAssignment: PositionAssignment = PositionAssignment.SeekInstance()): Promise<PositionAssignment[]> {
    
    return super.CollectionOf<PositionAssignment>(employee, positionAssignment);
  }

  CollectionOfQualitativeAppraise_Appraiser(appraiser: Employee, qualitativeAppraise: QualitativeAppraise = QualitativeAppraise.SeekInstance()): Promise<QualitativeAppraise[]> {
    return super.CollectionOf<QualitativeAppraise>(appraiser, qualitativeAppraise, 'Appraiser');
  }

  CollectionOfRoleMember(employee: Employee, roleMember: RoleMember = RoleMember.SeekInstance()): Promise<RoleMember[]> {
    return super.CollectionOf<RoleMember>(employee, roleMember);
  }

  CollectionOfTargetSetting(employee: Employee, targetSetting: TargetSetting = TargetSetting.SeekInstance()): Promise<TargetSetting[]> {
    return super.CollectionOf<TargetSetting>(employee, targetSetting);
  }

  CollectionOfTraining(employee: Employee, training: Training = Training.SeekInstance()): Promise<Training[]> {
    return super.CollectionOf<Training>(employee, training);
  }

  CollectionOfVision(employee: Employee, vision: Vision = Vision.SeekInstance()): Promise<Vision[]> {
    return super.CollectionOf<Vision>(employee, vision);
  }

  CollectionOfVisionApproved_ByEmployee(byEmployee: Employee, visionApproved: VisionApproved = VisionApproved.SeekInstance()): Promise<VisionApproved[]> {
    return super.CollectionOf<VisionApproved>(byEmployee, visionApproved, 'ByEmployee');
  }

  CollectionOfVisionComment_Commentator(commentator: Employee, visionComment: VisionComment = VisionComment.SeekInstance()): Promise<VisionComment[]> {
    return super.CollectionOf<VisionComment>(commentator, visionComment, 'Commentator');
  }

	//endregion
}
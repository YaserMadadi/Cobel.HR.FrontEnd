import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmployeeDeleteUI } from '../delete/employee.delete';
import { EmployeeEditUI } from '../edit/employee.edit';
import { VisionCommentService } from '../../../PMS/VisionComment/visionComment.service';
import { EmployeeDetailService } from '../../EmployeeDetail/employeeDetail.service';
import { FunctionalKPICommentService } from '../../../PMS/FunctionalKPIComment/functionalKPIComment.service';
import { VisionApprovedService } from '../../../PMS/VisionApproved/visionApproved.service';
import { FunctionalObjectiveCommentService } from '../../../PMS/FunctionalObjectiveComment/functionalObjectiveComment.service';
import { BehavioralAppraiseService } from '../../../PMS/BehavioralAppraise/behavioralAppraise.service';
import { VisionService } from '../../../PMS/Vision/vision.service';
import { CoachingService } from '../../../LAD/Coaching/coaching.service';
import { FinalApprovementService } from '../../../PMS/FinalApprovement/finalApprovement.service';
import { AssessmentService } from '../../../LAD/Assessment/assessment.service';
import { TargetSettingService } from '../../../PMS/TargetSetting/targetSetting.service';
import { EmployeeNotificationService } from '../../EmployeeNotification/employeeNotification.service';
import { TrainingService } from '../../../IDEA/Training/training.service';
import { CriticalIncidentRecognitionService } from '../../../PMS/CriticalIncidentRecognition/criticalIncidentRecognition.service';
import { FunctionalAppraiseService } from '../../../PMS/FunctionalAppraise/functionalAppraise.service';
import { CriticalIncidentService } from '../../../PMS/CriticalIncident/criticalIncident.service';
import { EmployeeEventService } from '../../EmployeeEvent/employeeEvent.service';
import { ContractService } from '../../Contract/contract.service';
import { OperationalAppraiseService } from '../../../PMS/OperationalAppraise/operationalAppraise.service';
import { PositionAssignmentService } from '../../PositionAssignment/positionAssignment.service';
import { RoleMemberService } from '../../../Core/RoleMember/roleMember.service';
import { NonOperationalAppraiseService } from '../../../PMS/NonOperationalAppraise/nonOperationalAppraise.service';
import { QualitativeAppraiseService } from '../../../PMS/QualitativeAppraise/qualitativeAppraise.service';



@Component({
  selector: 'hr-employee-master',
  templateUrl: './employee.master.html',
  styleUrls: ['./employee.master.css'],
  providers: [
    EmployeeService,
    VisionCommentService,
		EmployeeDetailService,
		FunctionalKPICommentService,
		VisionApprovedService,
		FunctionalObjectiveCommentService,
		BehavioralAppraiseService,
		VisionService,
		CoachingService,
		FinalApprovementService,
		AssessmentService,
		TargetSettingService,
		EmployeeNotificationService,
		TrainingService,
		CriticalIncidentRecognitionService,
		FunctionalAppraiseService,
		CriticalIncidentService,
		EmployeeEventService,
		ContractService,
		OperationalAppraiseService,
		PositionAssignmentService,
		RoleMemberService,
		NonOperationalAppraiseService,
		QualitativeAppraiseService,
  ]
})
export class EmployeeMasterUI extends MasterModal<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }
}
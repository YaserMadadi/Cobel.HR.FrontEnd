import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmployeeMasterUI } from '../master/employee.master';
import { EmployeeEditUI } from '../edit/employee.edit';
import { EmployeeDeleteUI } from '../delete/employee.delete';

import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { HoldingSection } from '../../../Base/HoldingSection/holdingSection';
import { HoldingSectionEditUI } from '../../../Base/HoldingSection/edit/holdingSection.edit';
import { EmploymentStatus } from '../../../Base.HR/EmploymentStatus/employmentStatus';
import { EmploymentStatusEditUI } from '../../../Base.HR/EmploymentStatus/edit/employmentStatus.edit';



import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { EmployeeDetailEditUI } from '../../EmployeeDetail/edit/employeeDetail.edit';
import { EmployeeDetail } from '../../EmployeeDetail/employeeDetail';
import { VisionEditUI } from '../../../PMS/Vision/edit/vision.edit';
import { Vision } from '../../../PMS/Vision/vision';
import { CoachingEditUI } from '../../../LAD/Coaching/edit/coaching.edit';
import { Coaching } from '../../../LAD/Coaching/coaching';
import { AssessmentEditUI } from '../../../LAD/Assessment/edit/assessment.edit';
import { Assessment } from '../../../LAD/Assessment/assessment';
import { TargetSettingEditUI } from '../../../PMS/TargetSetting/edit/targetSetting.edit';
import { TargetSetting } from '../../../PMS/TargetSetting/targetSetting';
import { EmployeeNotificationEditUI } from '../../EmployeeNotification/edit/employeeNotification.edit';
import { EmployeeNotification } from '../../EmployeeNotification/employeeNotification';
import { TrainingEditUI } from '../../../IDEA/Training/edit/training.edit';
import { Training } from '../../../IDEA/Training/training';
import { CriticalIncidentEditUI } from '../../../PMS/CriticalIncident/edit/criticalIncident.edit';
import { CriticalIncident } from '../../../PMS/CriticalIncident/criticalIncident';
import { EmployeeEventEditUI } from '../../EmployeeEvent/edit/employeeEvent.edit';
import { EmployeeEvent } from '../../EmployeeEvent/employeeEvent';
import { ContractEditUI } from '../../Contract/edit/contract.edit';
import { Contract } from '../../Contract/contract';
import { PositionAssignmentEditUI } from '../../PositionAssignment/edit/positionAssignment.edit';
import { PositionAssignment } from '../../PositionAssignment/positionAssignment';
import { RoleMemberEditUI } from '../../../Core/RoleMember/edit/roleMember.edit';
import { RoleMember } from '../../../Core/RoleMember/roleMember';



@Component({
  selector: 'hr-employee-index',
  templateUrl: './employee.index.html',
  styleUrls: ['./employee.index.css']
})
export class EmployeeIndexUI extends IndexView<Employee> implements AfterViewInit, IIndexView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
    this.filterInstance = Employee.SeekInstance();
    this.currentInstance = new Employee();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  //#region EmployeeDetail

  public employeeDetail_Clicked(employeeDetailEditUI: EmployeeDetailEditUI) {
    employeeDetailEditUI.Employee = this.currentInstance;
    employeeDetailEditUI.ShowDialog(new EmployeeDetail());
  }
                    
  public employeeDetailEditUI_Closed(employeeDetail: EmployeeDetail) {
    if (!employeeDetail)
      return;
    this.onRefresh();
  }
  
  //#endregion EmployeeDetail





  //#region Vision

  public vision_Clicked(visionEditUI: VisionEditUI) {
    visionEditUI.Employee = this.currentInstance;
    visionEditUI.ShowDialog(new Vision());
  }
                    
  public visionEditUI_Closed(vision: Vision) {
    if (!vision)
      return;
    this.onRefresh();
  }
  
  //#endregion Vision

  //#region Coaching

  public coaching_Clicked(coachingEditUI: CoachingEditUI) {
    coachingEditUI.Employee = this.currentInstance;
    coachingEditUI.ShowDialog(new Coaching());
  }
                    
  public coachingEditUI_Closed(coaching: Coaching) {
    if (!coaching)
      return;
    this.onRefresh();
  }
  
  //#endregion Coaching


  //#region Assessment

  public assessment_Clicked(assessmentEditUI: AssessmentEditUI) {
    assessmentEditUI.Employee = this.currentInstance;
    assessmentEditUI.ShowDialog(new Assessment());
  }
                    
  public assessmentEditUI_Closed(assessment: Assessment) {
    if (!assessment)
      return;
    this.onRefresh();
  }
  
  //#endregion Assessment

  //#region TargetSetting

  public targetSetting_Clicked(targetSettingEditUI: TargetSettingEditUI) {
    targetSettingEditUI.Employee = this.currentInstance;
    targetSettingEditUI.ShowDialog(new TargetSetting());
  }
                    
  public targetSettingEditUI_Closed(targetSetting: TargetSetting) {
    if (!targetSetting)
      return;
    this.onRefresh();
  }
  
  //#endregion TargetSetting

  //#region EmployeeNotification

  public employeeNotification_Clicked(employeeNotificationEditUI: EmployeeNotificationEditUI) {
    employeeNotificationEditUI.Employee = this.currentInstance;
    employeeNotificationEditUI.ShowDialog(new EmployeeNotification());
  }
                    
  public employeeNotificationEditUI_Closed(employeeNotification: EmployeeNotification) {
    if (!employeeNotification)
      return;
    this.onRefresh();
  }
  
  //#endregion EmployeeNotification

  //#region Training

  public training_Clicked(trainingEditUI: TrainingEditUI) {
    trainingEditUI.Employee = this.currentInstance;
    trainingEditUI.ShowDialog(new Training());
  }
                    
  public trainingEditUI_Closed(training: Training) {
    if (!training)
      return;
    this.onRefresh();
  }
  
  //#endregion Training



  //#region CriticalIncident

  public criticalIncident_Clicked(criticalIncidentEditUI: CriticalIncidentEditUI) {
    criticalIncidentEditUI.Employee = this.currentInstance;
    criticalIncidentEditUI.ShowDialog(new CriticalIncident());
  }
                    
  public criticalIncidentEditUI_Closed(criticalIncident: CriticalIncident) {
    if (!criticalIncident)
      return;
    this.onRefresh();
  }
  
  //#endregion CriticalIncident

  //#region EmployeeEvent

  public employeeEvent_Clicked(employeeEventEditUI: EmployeeEventEditUI) {
    employeeEventEditUI.Employee = this.currentInstance;
    employeeEventEditUI.ShowDialog(new EmployeeEvent());
  }
                    
  public employeeEventEditUI_Closed(employeeEvent: EmployeeEvent) {
    if (!employeeEvent)
      return;
    this.onRefresh();
  }
  
  //#endregion EmployeeEvent

  //#region Contract

  public contract_Clicked(contractEditUI: ContractEditUI) {
    contractEditUI.Employee = this.currentInstance;
    contractEditUI.ShowDialog(new Contract());
  }
                    
  public contractEditUI_Closed(contract: Contract) {
    if (!contract)
      return;
    this.onRefresh();
  }
  
  //#endregion Contract


  //#region PositionAssignment

  public positionAssignment_Clicked(positionAssignmentEditUI: PositionAssignmentEditUI) {
    positionAssignmentEditUI.Employee = this.currentInstance;
    positionAssignmentEditUI.ShowDialog(new PositionAssignment());
  }
                    
  public positionAssignmentEditUI_Closed(positionAssignment: PositionAssignment) {
    if (!positionAssignment)
      return;
    this.onRefresh();
  }
  
  //#endregion PositionAssignment

  //#region RoleMember

  public roleMember_Clicked(roleMemberEditUI: RoleMemberEditUI) {
    roleMemberEditUI.Employee = this.currentInstance;
    roleMemberEditUI.ShowDialog(new RoleMember());
  }
                    
  public roleMemberEditUI_Closed(roleMember: RoleMember) {
    if (!roleMember)
      return;
    this.onRefresh();
  }
  
  //#endregion RoleMember




  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(employeeEditUI: EmployeeEditUI){
    employeeEditUI.ShowDialog(new Employee());
  }

  resetFilter() {
    this.filterInstance = Employee.SeekInstance();
    
    
  }

  public onEditModalClosed(employee: Employee) {
    this.onRefresh();
    this.currentInstance = new Employee();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
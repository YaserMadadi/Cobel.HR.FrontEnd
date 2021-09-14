import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { TargetSetting } from '../targetSetting';
import { TargetSettingService } from '../targetSetting.service';
import { TargetSettingMasterUI } from '../master/targetSetting.master';
import { TargetSettingEditUI } from '../edit/targetSetting.edit';
import { TargetSettingDeleteUI } from '../delete/targetSetting.delete';

import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { Year } from '../../../Base/Year/year';
import { YearEditUI } from '../../../Base/Year/edit/year.edit';
import { Position } from '../../../HR/Position/position';
import { PositionEditUI } from '../../../HR/Position/edit/position.edit';



import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { BehavioralObjectiveEditUI } from '../../BehavioralObjective/edit/behavioralObjective.edit';
import { BehavioralObjective } from '../../BehavioralObjective/behavioralObjective';
import { FinalApprovementEditUI } from '../../FinalApprovement/edit/finalApprovement.edit';
import { FinalApprovement } from '../../FinalApprovement/finalApprovement';
import { FinalAppraiseEditUI } from '../../FinalAppraise/edit/finalAppraise.edit';
import { FinalAppraise } from '../../FinalAppraise/finalAppraise';
import { QuantitativeAppraiseEditUI } from '../../QuantitativeAppraise/edit/quantitativeAppraise.edit';
import { QuantitativeAppraise } from '../../QuantitativeAppraise/quantitativeAppraise';
import { FunctionalObjectiveEditUI } from '../../FunctionalObjective/edit/functionalObjective.edit';
import { FunctionalObjective } from '../../FunctionalObjective/functionalObjective';
import { OperationalAppraiseEditUI } from '../../OperationalAppraise/edit/operationalAppraise.edit';
import { OperationalAppraise } from '../../OperationalAppraise/operationalAppraise';
import { NonOperationalAppraiseEditUI } from '../../NonOperationalAppraise/edit/nonOperationalAppraise.edit';
import { NonOperationalAppraise } from '../../NonOperationalAppraise/nonOperationalAppraise';
import { QualitativeObjectiveEditUI } from '../../QualitativeObjective/edit/qualitativeObjective.edit';
import { QualitativeObjective } from '../../QualitativeObjective/qualitativeObjective';
import { EmployeeExtendedService } from '../../../../partials/HR/employee/employee.service.extended';
import { PositionController } from '../../../../../xcore/tools/controller.positions';



@Component({
  selector: 'pms-targetSetting-index',
  templateUrl: './targetSetting.index.html',
  styleUrls: ['./targetSetting.index.css']
})
export class TargetSettingIndexUI extends IndexView<TargetSetting> implements AfterViewInit, IIndexView<TargetSetting> {

  constructor(private targetSettingService: TargetSettingService, private EmployeeExtendedService: EmployeeExtendedService) {
    super(targetSettingService);
    this.filterInstance = TargetSetting.SeekInstance();
    this.currentInstance = new TargetSetting();
  }

  async ngAfterViewInit() {
    // this.positionList = await this.EmployeeExtendedService.loadPosition(AuthService.currentEmployee);
    // console.log('Position List : ',this.positionList);
    this.onRefresh();
  }

  positionList: Position[] = [];

  // onRefresh(number: number = 0) {
  //   this.resetFilter();
  //   console.log(this.Id);
  //   this.Id === 0 ? this.onSeek(1) : this.onRetrieveById();
  // }

  async onSeek(pageNumber: number) {
    if (this.Id == 0) {
      this.filterInstance.paginate.currentPage = pageNumber;
      console.log('position List : ', AuthService.currentPositionList);
      // this section detect if current user is a HR position responsible for PMS -> Load All
      if (AuthService.currentPositionList.filter(i => i.id == PositionController.HR_PMS_Position_Id || i.parent.id == PositionController.HR_PMS_Position_Id).length > 0) { // Position_Id = 2131 : HRD Senior Specialist	
        this.targetSettingService.Seek(this.filterInstance)
          .then(list => this.list = list);

      } else {
        this.EmployeeExtendedService.loadTargetSettings(AuthService.currentEmployee)
          .then(list => {
            this.list = list;
          });
      }
      this.currentInstance = new TargetSetting();
      this.paginatorComponent?.RefreshUI(this.list[0]?.paginate);
    }
  }



  //#region BehavioralObjective

  public behavioralObjective_Clicked(behavioralObjectiveEditUI: BehavioralObjectiveEditUI) {
    behavioralObjectiveEditUI.TargetSetting = this.currentInstance;
    behavioralObjectiveEditUI.ShowDialog(new BehavioralObjective());
  }

  public behavioralObjectiveEditUI_Closed(behavioralObjective: BehavioralObjective) {
    if (!behavioralObjective)
      return;
    this.onRefresh();
  }

  //#endregion BehavioralObjective

  //#region FinalApprovement

  public finalApprovement_Clicked(finalApprovementEditUI: FinalApprovementEditUI) {
    finalApprovementEditUI.TargetSetting = this.currentInstance;
    finalApprovementEditUI.ShowDialog(new FinalApprovement());
  }

  public finalApprovementEditUI_Closed(finalApprovement: FinalApprovement) {
    if (!finalApprovement)
      return;
    this.onRefresh();
  }

  //#endregion FinalApprovement

  //#region FinalAppraise

  public finalAppraise_Clicked(finalAppraiseEditUI: FinalAppraiseEditUI) {
    finalAppraiseEditUI.TargetSetting = this.currentInstance;
    finalAppraiseEditUI.ShowDialog(new FinalAppraise());
  }

  public finalAppraiseEditUI_Closed(finalAppraise: FinalAppraise) {
    if (!finalAppraise)
      return;
    this.onRefresh();
  }

  //#endregion FinalAppraise

  //#region QuantitativeAppraise

  public quantitativeAppraise_Clicked(quantitativeAppraiseEditUI: QuantitativeAppraiseEditUI) {
    quantitativeAppraiseEditUI.TargetSetting = this.currentInstance;
    quantitativeAppraiseEditUI.ShowDialog(new QuantitativeAppraise());
  }

  public quantitativeAppraiseEditUI_Closed(quantitativeAppraise: QuantitativeAppraise) {
    if (!quantitativeAppraise)
      return;
    this.onRefresh();
  }

  //#endregion QuantitativeAppraise

  //#region FunctionalObjective

  public functionalObjective_Clicked(functionalObjectiveEditUI: FunctionalObjectiveEditUI) {
    functionalObjectiveEditUI.TargetSetting = this.currentInstance;
    functionalObjectiveEditUI.ShowDialog(new FunctionalObjective());
  }

  public functionalObjectiveEditUI_Closed(functionalObjective: FunctionalObjective) {
    if (!functionalObjective)
      return;
    this.onRefresh();
  }

  //#endregion FunctionalObjective

  //#region OperationalAppraise

  public operationalAppraise_Clicked(operationalAppraiseEditUI: OperationalAppraiseEditUI) {
    operationalAppraiseEditUI.TargetSetting = this.currentInstance;
    operationalAppraiseEditUI.ShowDialog(new OperationalAppraise());
  }

  public operationalAppraiseEditUI_Closed(operationalAppraise: OperationalAppraise) {
    if (!operationalAppraise)
      return;
    this.onRefresh();
  }

  //#endregion OperationalAppraise

  //#region NonOperationalAppraise

  public nonOperationalAppraise_Clicked(nonOperationalAppraiseEditUI: NonOperationalAppraiseEditUI) {
    nonOperationalAppraiseEditUI.TargetSetting = this.currentInstance;
    nonOperationalAppraiseEditUI.ShowDialog(new NonOperationalAppraise());
  }

  public nonOperationalAppraiseEditUI_Closed(nonOperationalAppraise: NonOperationalAppraise) {
    if (!nonOperationalAppraise)
      return;
    this.onRefresh();
  }

  //#endregion NonOperationalAppraise

  //#region QualitativeObjective

  public qualitativeObjective_Clicked(qualitativeObjectiveEditUI: QualitativeObjectiveEditUI) {
    qualitativeObjectiveEditUI.TargetSetting = this.currentInstance;
    qualitativeObjectiveEditUI.ShowDialog(new QualitativeObjective());
  }

  public qualitativeObjectiveEditUI_Closed(qualitativeObjective: QualitativeObjective) {
    if (!qualitativeObjective)
      return;
    this.onRefresh();
  }

  //#endregion QualitativeObjective



  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent;

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(targetSettingEditUI: TargetSettingEditUI) {
    targetSettingEditUI.ShowDialog(new TargetSetting());
  }

  resetFilter() {
    this.filterInstance = TargetSetting.SeekInstance();


  }

  public onEditModalClosed(targetSetting: TargetSetting) {
    this.onRefresh();
    this.currentInstance = new TargetSetting();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { BehavioralKPI } from '../behavioralKPI';
import { BehavioralKPIService } from '../behavioralKPI.service';
import { BehavioralKPIMasterUI } from '../master/behavioralKPI.master';
import { BehavioralKPIEditUI } from '../edit/behavioralKPI.edit';
import { BehavioralKPIDeleteUI } from '../delete/behavioralKPI.delete';

import { BehavioralObjective } from '../../BehavioralObjective/behavioralObjective';
import { BehavioralObjectiveEditUI } from '../../BehavioralObjective/edit/behavioralObjective.edit';
import { CompetencyItemKPI } from '../../CompetencyItemKPI/competencyItemKPI';
import { CompetencyItemKPIEditUI } from '../../CompetencyItemKPI/edit/competencyItemKPI.edit';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { BehavioralAppraiseEditUI } from '../../BehavioralAppraise/edit/behavioralAppraise.edit';
import { BehavioralAppraise } from '../../BehavioralAppraise/behavioralAppraise';



@Component({
  selector: 'pms-behavioralKPI-index',
  templateUrl: './behavioralKPI.index.html',
  styleUrls: ['./behavioralKPI.index.css']
})
export class BehavioralKPIIndexUI extends IndexView<BehavioralKPI> implements AfterViewInit, IIndexView<BehavioralKPI> {

  constructor(private behavioralKPIService: BehavioralKPIService) {
    super(behavioralKPIService);
    this.filterInstance = BehavioralKPI.SeekInstance();
    this.currentInstance = new BehavioralKPI();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region BehavioralAppraise

  public behavioralAppraise_Clicked(behavioralAppraiseEditUI: BehavioralAppraiseEditUI) {
    behavioralAppraiseEditUI.BehavioralKPI = this.currentInstance;
    behavioralAppraiseEditUI.ShowDialog(new BehavioralAppraise());
  }
                    
  public behavioralAppraiseEditUI_Closed(behavioralAppraise: BehavioralAppraise) {
    if (!behavioralAppraise)
      return;
    this.onRefresh();
  }
  
  //#endregion BehavioralAppraise


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(behavioralKPIEditUI: BehavioralKPIEditUI){
    behavioralKPIEditUI.ShowDialog(new BehavioralKPI());
  }

  resetFilter() {
    this.filterInstance = BehavioralKPI.SeekInstance();
    
    
  }

  public onEditModalClosed(behavioralKPI: BehavioralKPI) {
    this.onRefresh();
    this.currentInstance = new BehavioralKPI();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
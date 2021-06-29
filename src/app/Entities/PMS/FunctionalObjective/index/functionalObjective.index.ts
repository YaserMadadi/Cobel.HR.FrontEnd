import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { FunctionalObjective } from '../functionalObjective';
import { FunctionalObjectiveService } from '../functionalObjective.service';
import { FunctionalObjectiveMasterUI } from '../master/functionalObjective.master';
import { FunctionalObjectiveEditUI } from '../edit/functionalObjective.edit';
import { FunctionalObjectiveDeleteUI } from '../delete/functionalObjective.delete';

import { TargetSetting } from '../../TargetSetting/targetSetting';
import { TargetSettingEditUI } from '../../TargetSetting/edit/targetSetting.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { FunctionalObjectiveCommentEditUI } from '../../FunctionalObjectiveComment/edit/functionalObjectiveComment.edit';
import { FunctionalObjectiveComment } from '../../FunctionalObjectiveComment/functionalObjectiveComment';
import { FunctionalKPIEditUI } from '../../FunctionalKPI/edit/functionalKPI.edit';
import { FunctionalKPI } from '../../FunctionalKPI/functionalKPI';



@Component({
  selector: 'pms-functionalObjective-index',
  templateUrl: './functionalObjective.index.html',
  styleUrls: ['./functionalObjective.index.css']
})
export class FunctionalObjectiveIndexUI extends IndexView<FunctionalObjective> implements AfterViewInit, IIndexView<FunctionalObjective> {

  constructor(private functionalObjectiveService: FunctionalObjectiveService) {
    super(functionalObjectiveService);
    this.filterInstance = FunctionalObjective.SeekInstance();
    this.currentInstance = new FunctionalObjective();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region FunctionalObjectiveComment

  public functionalObjectiveComment_Clicked(functionalObjectiveCommentEditUI: FunctionalObjectiveCommentEditUI) {
    functionalObjectiveCommentEditUI.FunctionalObjective = this.currentInstance;
    functionalObjectiveCommentEditUI.ShowDialog(new FunctionalObjectiveComment());
  }
                    
  public functionalObjectiveCommentEditUI_Closed(functionalObjectiveComment: FunctionalObjectiveComment) {
    if (!functionalObjectiveComment)
      return;
    this.onRefresh();
  }
  
  //#endregion FunctionalObjectiveComment

  //#region FunctionalKPI

  public functionalKPI_Clicked(functionalKPIEditUI: FunctionalKPIEditUI) {
    functionalKPIEditUI.FunctionalObjective = this.currentInstance;
    functionalKPIEditUI.ShowDialog(new FunctionalKPI());
  }
                    
  public functionalKPIEditUI_Closed(functionalKPI: FunctionalKPI) {
    if (!functionalKPI)
      return;
    this.onRefresh();
  }
  
  //#endregion FunctionalKPI


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(functionalObjectiveEditUI: FunctionalObjectiveEditUI){
    functionalObjectiveEditUI.ShowDialog(new FunctionalObjective());
  }

  resetFilter() {
    this.filterInstance = FunctionalObjective.SeekInstance();
    
    
  }

  public onEditModalClosed(functionalObjective: FunctionalObjective) {
    this.onRefresh();
    this.currentInstance = new FunctionalObjective();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { DevelopmentGoal } from '../developmentGoal';
import { DevelopmentGoalService } from '../developmentGoal.service';
import { DevelopmentGoalMasterUI } from '../master/developmentGoal.master';
import { DevelopmentGoalEditUI } from '../edit/developmentGoal.edit';
import { DevelopmentGoalDeleteUI } from '../delete/developmentGoal.delete';

import { Assessment } from '../../Assessment/assessment';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'lad-developmentGoal-index',
  templateUrl: './developmentGoal.index.html',
  styleUrls: ['./developmentGoal.index.css']
})
export class DevelopmentGoalIndexUI extends IndexView<DevelopmentGoal> implements AfterViewInit, IIndexView<DevelopmentGoal> {

  constructor(private developmentGoalService: DevelopmentGoalService) {
    super(developmentGoalService);
    this.filterInstance = DevelopmentGoal.SeekInstance();
    this.currentInstance = new DevelopmentGoal();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(developmentGoalEditUI: DevelopmentGoalEditUI){
    developmentGoalEditUI.ShowDialog(new DevelopmentGoal());
  }

  resetFilter() {
    this.filterInstance = DevelopmentGoal.SeekInstance();
    
    
  }

  public onEditModalClosed(developmentGoal: DevelopmentGoal) {
    this.onRefresh();
    this.currentInstance = new DevelopmentGoal();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
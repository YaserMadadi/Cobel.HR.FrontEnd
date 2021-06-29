import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Conclusion } from '../conclusion';
import { ConclusionService } from '../conclusion.service';
import { ConclusionMasterUI } from '../master/conclusion.master';
import { ConclusionEditUI } from '../edit/conclusion.edit';
import { ConclusionDeleteUI } from '../delete/conclusion.delete';

import { Assessment } from '../../Assessment/assessment';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';
import { ConclusionType } from '../../ConclusionType/conclusionType';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'lad-conclusion-index',
  templateUrl: './conclusion.index.html',
  styleUrls: ['./conclusion.index.css']
})
export class ConclusionIndexUI extends IndexView<Conclusion> implements AfterViewInit, IIndexView<Conclusion> {

  constructor(private conclusionService: ConclusionService) {
    super(conclusionService);
    this.filterInstance = Conclusion.SeekInstance();
    this.currentInstance = new Conclusion();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(conclusionEditUI: ConclusionEditUI){
    conclusionEditUI.ShowDialog(new Conclusion());
  }

  resetFilter() {
    this.filterInstance = Conclusion.SeekInstance();
    
    
  }

  public onEditModalClosed(conclusion: Conclusion) {
    this.onRefresh();
    this.currentInstance = new Conclusion();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
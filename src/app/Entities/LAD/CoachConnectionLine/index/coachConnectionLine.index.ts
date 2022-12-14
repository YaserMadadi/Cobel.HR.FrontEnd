import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { CoachConnectionLine } from '../coachConnectionLine';
import { CoachConnectionLineService } from '../coachConnectionLine.service';
import { CoachConnectionLineMasterUI } from '../master/coachConnectionLine.master';
import { CoachConnectionLineEditUI } from '../edit/coachConnectionLine.edit';
import { CoachConnectionLineDeleteUI } from '../delete/coachConnectionLine.delete';

import { Coach } from '../../Coach/coach';
import { CoachEditUI } from '../../Coach/edit/coach.edit';
import { ConnectionType } from '../../../Base/ConnectionType/connectionType';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'lad-coachConnectionLine-index',
  templateUrl: './coachConnectionLine.index.html',
  styleUrls: ['./coachConnectionLine.index.css']
})
export class CoachConnectionLineIndexUI extends IndexView<CoachConnectionLine> implements AfterViewInit, IIndexView<CoachConnectionLine> {

  constructor(private coachConnectionLineService: CoachConnectionLineService) {
    super(coachConnectionLineService);
    this.filterInstance = CoachConnectionLine.SeekInstance();
    this.currentInstance = new CoachConnectionLine();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(coachConnectionLineEditUI: CoachConnectionLineEditUI){
    coachConnectionLineEditUI.ShowDialog(new CoachConnectionLine());
  }

  resetFilter() {
    this.filterInstance = CoachConnectionLine.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(coachConnectionLine: CoachConnectionLine) {
    this.onRefresh();
    this.currentInstance = new CoachConnectionLine();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
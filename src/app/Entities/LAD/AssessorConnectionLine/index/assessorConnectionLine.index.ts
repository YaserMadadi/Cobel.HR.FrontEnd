import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { AssessorConnectionLine } from '../assessorConnectionLine';
import { AssessorConnectionLineService } from '../assessorConnectionLine.service';
import { AssessorConnectionLineMasterUI } from '../master/assessorConnectionLine.master';
import { AssessorConnectionLineEditUI } from '../edit/assessorConnectionLine.edit';
import { AssessorConnectionLineDeleteUI } from '../delete/assessorConnectionLine.delete';

import { Assessor } from '../../Assessor/assessor';
import { AssessorEditUI } from '../../Assessor/edit/assessor.edit';
import { ConnectionType } from '../../../Base/ConnectionType/connectionType';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'lad-assessorConnectionLine-index',
  templateUrl: './assessorConnectionLine.index.html',
  styleUrls: ['./assessorConnectionLine.index.css']
})
export class AssessorConnectionLineIndexUI extends IndexView<AssessorConnectionLine> implements AfterViewInit, IIndexView<AssessorConnectionLine> {

  constructor(private assessorConnectionLineService: AssessorConnectionLineService) {
    super(assessorConnectionLineService);
    this.filterInstance = AssessorConnectionLine.SeekInstance();
    this.currentInstance = new AssessorConnectionLine();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(assessorConnectionLineEditUI: AssessorConnectionLineEditUI){
    assessorConnectionLineEditUI.ShowDialog(new AssessorConnectionLine());
  }

  resetFilter() {
    this.filterInstance = AssessorConnectionLine.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(assessorConnectionLine: AssessorConnectionLine) {
    this.onRefresh();
    this.currentInstance = new AssessorConnectionLine();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
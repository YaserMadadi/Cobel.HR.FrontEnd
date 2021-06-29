import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Relative } from '../relative';
import { RelativeService } from '../relative.service';
import { RelativeMasterUI } from '../master/relative.master';
import { RelativeEditUI } from '../edit/relative.edit';
import { RelativeDeleteUI } from '../delete/relative.delete';

import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { RelativeType } from '../../../Base.HR/RelativeType/relativeType';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-relative-index',
  templateUrl: './relative.index.html',
  styleUrls: ['./relative.index.css']
})
export class RelativeIndexUI extends IndexView<Relative> implements AfterViewInit, IIndexView<Relative> {

  constructor(private relativeService: RelativeService) {
    super(relativeService);
    this.filterInstance = Relative.SeekInstance();
    this.currentInstance = new Relative();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(relativeEditUI: RelativeEditUI){
    relativeEditUI.ShowDialog(new Relative());
  }

  resetFilter() {
    this.filterInstance = Relative.SeekInstance();
    
    
  }

  public onEditModalClosed(relative: Relative) {
    this.onRefresh();
    this.currentInstance = new Relative();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { MilitaryServiceInclusive } from '../militaryServiceInclusive';
import { MilitaryServiceInclusiveService } from '../militaryServiceInclusive.service';
import { MilitaryServiceInclusiveMasterUI } from '../master/militaryServiceInclusive.master';
import { MilitaryServiceInclusiveEditUI } from '../edit/militaryServiceInclusive.edit';
import { MilitaryServiceInclusiveDeleteUI } from '../delete/militaryServiceInclusive.delete';

import { MilitaryService } from '../../MilitaryService/militaryService';
import { MilitaryServiceEditUI } from '../../MilitaryService/edit/militaryService.edit';
import { InclusiveType } from '../../../Base/InclusiveType/inclusiveType';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-militaryServiceInclusive-index',
  templateUrl: './militaryServiceInclusive.index.html',
  styleUrls: ['./militaryServiceInclusive.index.css']
})
export class MilitaryServiceInclusiveIndexUI extends IndexView<MilitaryServiceInclusive> implements AfterViewInit, IIndexView<MilitaryServiceInclusive> {

  constructor(private militaryServiceInclusiveService: MilitaryServiceInclusiveService) {
    super(militaryServiceInclusiveService);
    this.filterInstance = MilitaryServiceInclusive.SeekInstance();
    this.currentInstance = new MilitaryServiceInclusive();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(militaryServiceInclusiveEditUI: MilitaryServiceInclusiveEditUI){
    militaryServiceInclusiveEditUI.ShowDialog(new MilitaryServiceInclusive());
  }

  resetFilter() {
    this.filterInstance = MilitaryServiceInclusive.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(militaryServiceInclusive: MilitaryServiceInclusive) {
    this.onRefresh();
    this.currentInstance = new MilitaryServiceInclusive();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
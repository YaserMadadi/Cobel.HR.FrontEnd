import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { MilitaryServiceExcemption } from '../militaryServiceExcemption';
import { MilitaryServiceExcemptionService } from '../militaryServiceExcemption.service';
import { MilitaryServiceExcemptionMasterUI } from '../master/militaryServiceExcemption.master';
import { MilitaryServiceExcemptionEditUI } from '../edit/militaryServiceExcemption.edit';
import { MilitaryServiceExcemptionDeleteUI } from '../delete/militaryServiceExcemption.delete';

import { MilitaryService } from '../../MilitaryService/militaryService';
import { MilitaryServiceEditUI } from '../../MilitaryService/edit/militaryService.edit';
import { ExcemptionType } from '../../../Base/ExcemptionType/excemptionType';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-militaryServiceExcemption-index',
  templateUrl: './militaryServiceExcemption.index.html',
  styleUrls: ['./militaryServiceExcemption.index.css']
})
export class MilitaryServiceExcemptionIndexUI extends IndexView<MilitaryServiceExcemption> implements AfterViewInit, IIndexView<MilitaryServiceExcemption> {

  constructor(private militaryServiceExcemptionService: MilitaryServiceExcemptionService) {
    super(militaryServiceExcemptionService);
    this.filterInstance = MilitaryServiceExcemption.SeekInstance();
    this.currentInstance = new MilitaryServiceExcemption();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(militaryServiceExcemptionEditUI: MilitaryServiceExcemptionEditUI){
    militaryServiceExcemptionEditUI.ShowDialog(new MilitaryServiceExcemption());
  }

  resetFilter() {
    this.filterInstance = MilitaryServiceExcemption.SeekInstance();
    
    
  }

  public onEditModalClosed(militaryServiceExcemption: MilitaryServiceExcemption) {
    this.onRefresh();
    this.currentInstance = new MilitaryServiceExcemption();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
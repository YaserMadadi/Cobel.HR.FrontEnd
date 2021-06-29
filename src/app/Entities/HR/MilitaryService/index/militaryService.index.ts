import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { MilitaryService } from '../militaryService';
import { MilitaryServiceService } from '../militaryService.service';
import { MilitaryServiceMasterUI } from '../master/militaryService.master';
import { MilitaryServiceEditUI } from '../edit/militaryService.edit';
import { MilitaryServiceDeleteUI } from '../delete/militaryService.delete';

import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { MilitaryServiceStatus } from '../../../Base/MilitaryServiceStatus/militaryServiceStatus';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { MilitaryServiceInclusiveEditUI } from '../../MilitaryServiceInclusive/edit/militaryServiceInclusive.edit';
import { MilitaryServiceInclusive } from '../../MilitaryServiceInclusive/militaryServiceInclusive';
import { MilitaryServiceExcemptionEditUI } from '../../MilitaryServiceExcemption/edit/militaryServiceExcemption.edit';
import { MilitaryServiceExcemption } from '../../MilitaryServiceExcemption/militaryServiceExcemption';



@Component({
  selector: 'hr-militaryService-index',
  templateUrl: './militaryService.index.html',
  styleUrls: ['./militaryService.index.css']
})
export class MilitaryServiceIndexUI extends IndexView<MilitaryService> implements AfterViewInit, IIndexView<MilitaryService> {

  constructor(private militaryServiceService: MilitaryServiceService) {
    super(militaryServiceService);
    this.filterInstance = MilitaryService.SeekInstance();
    this.currentInstance = new MilitaryService();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region MilitaryServiceInclusive

  public militaryServiceInclusive_Clicked(militaryServiceInclusiveEditUI: MilitaryServiceInclusiveEditUI) {
    militaryServiceInclusiveEditUI.MilitaryService = this.currentInstance;
    militaryServiceInclusiveEditUI.ShowDialog(new MilitaryServiceInclusive());
  }
                    
  public militaryServiceInclusiveEditUI_Closed(militaryServiceInclusive: MilitaryServiceInclusive) {
    if (!militaryServiceInclusive)
      return;
    this.onRefresh();
  }
  
  //#endregion MilitaryServiceInclusive

  //#region MilitaryServiceExcemption

  public militaryServiceExcemption_Clicked(militaryServiceExcemptionEditUI: MilitaryServiceExcemptionEditUI) {
    militaryServiceExcemptionEditUI.MilitaryService = this.currentInstance;
    militaryServiceExcemptionEditUI.ShowDialog(new MilitaryServiceExcemption());
  }
                    
  public militaryServiceExcemptionEditUI_Closed(militaryServiceExcemption: MilitaryServiceExcemption) {
    if (!militaryServiceExcemption)
      return;
    this.onRefresh();
  }
  
  //#endregion MilitaryServiceExcemption


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(militaryServiceEditUI: MilitaryServiceEditUI){
    militaryServiceEditUI.ShowDialog(new MilitaryService());
  }

  resetFilter() {
    this.filterInstance = MilitaryService.SeekInstance();
    
    
  }

  public onEditModalClosed(militaryService: MilitaryService) {
    this.onRefresh();
    this.currentInstance = new MilitaryService();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
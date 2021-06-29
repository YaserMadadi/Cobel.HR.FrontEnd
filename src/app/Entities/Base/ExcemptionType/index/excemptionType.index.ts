import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { ExcemptionType } from '../excemptionType';
import { ExcemptionTypeService } from '../excemptionType.service';
import { ExcemptionTypeMasterUI } from '../master/excemptionType.master';
import { ExcemptionTypeEditUI } from '../edit/excemptionType.edit';
import { ExcemptionTypeDeleteUI } from '../delete/excemptionType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { MilitaryServiceExcemptionEditUI } from '../../../HR/MilitaryServiceExcemption/edit/militaryServiceExcemption.edit';
import { MilitaryServiceExcemption } from '../../../HR/MilitaryServiceExcemption/militaryServiceExcemption';



@Component({
  selector: 'base-excemptionType-index',
  templateUrl: './excemptionType.index.html',
  styleUrls: ['./excemptionType.index.css']
})
export class ExcemptionTypeIndexUI extends IndexView<ExcemptionType> implements AfterViewInit, IIndexView<ExcemptionType> {

  constructor(private excemptionTypeService: ExcemptionTypeService) {
    super(excemptionTypeService);
    this.filterInstance = ExcemptionType.SeekInstance();
    this.currentInstance = new ExcemptionType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region MilitaryServiceExcemption

  public militaryServiceExcemption_Clicked(militaryServiceExcemptionEditUI: MilitaryServiceExcemptionEditUI) {
    militaryServiceExcemptionEditUI.ExcemptionType = this.currentInstance;
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

  public onAdd(excemptionTypeEditUI: ExcemptionTypeEditUI){
    excemptionTypeEditUI.ShowDialog(new ExcemptionType());
  }

  resetFilter() {
    this.filterInstance = ExcemptionType.SeekInstance();
    
    
  }

  public onEditModalClosed(excemptionType: ExcemptionType) {
    this.onRefresh();
    this.currentInstance = new ExcemptionType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
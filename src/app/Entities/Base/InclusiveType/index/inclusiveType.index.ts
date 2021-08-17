import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { InclusiveType } from '../inclusiveType';
import { InclusiveTypeService } from '../inclusiveType.service';
import { InclusiveTypeMasterUI } from '../master/inclusiveType.master';
import { InclusiveTypeEditUI } from '../edit/inclusiveType.edit';
import { InclusiveTypeDeleteUI } from '../delete/inclusiveType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { MilitaryServiceInclusiveEditUI } from '../../../HR/MilitaryServiceInclusive/edit/militaryServiceInclusive.edit';
import { MilitaryServiceInclusive } from '../../../HR/MilitaryServiceInclusive/militaryServiceInclusive';



@Component({
  selector: 'base-inclusiveType-index',
  templateUrl: './inclusiveType.index.html',
  styleUrls: ['./inclusiveType.index.css']
})
export class InclusiveTypeIndexUI extends IndexView<InclusiveType> implements AfterViewInit, IIndexView<InclusiveType> {

  constructor(private inclusiveTypeService: InclusiveTypeService) {
    super(inclusiveTypeService);
    this.filterInstance = InclusiveType.SeekInstance();
    this.currentInstance = new InclusiveType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region MilitaryServiceInclusive

  public militaryServiceInclusive_Clicked(militaryServiceInclusiveEditUI: MilitaryServiceInclusiveEditUI) {
    militaryServiceInclusiveEditUI.InclusiveType = this.currentInstance;
    militaryServiceInclusiveEditUI.ShowDialog(new MilitaryServiceInclusive());
  }
                    
  public militaryServiceInclusiveEditUI_Closed(militaryServiceInclusive: MilitaryServiceInclusive) {
    if (!militaryServiceInclusive)
      return;
    this.onRefresh();
  }
  
  //#endregion MilitaryServiceInclusive


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(inclusiveTypeEditUI: InclusiveTypeEditUI){
    inclusiveTypeEditUI.ShowDialog(new InclusiveType());
  }

  resetFilter() {
    this.filterInstance = InclusiveType.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(inclusiveType: InclusiveType) {
    this.onRefresh();
    this.currentInstance = new InclusiveType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
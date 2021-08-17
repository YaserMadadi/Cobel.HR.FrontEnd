

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { RelativeType } from '../relativeType';
import { RelativeTypeService } from '../relativeType.service';
import { RelativeTypeMasterUI } from '../master/relativeType.master';
import { RelativeTypeEditUI } from '../edit/relativeType.edit';
import { RelativeTypeDeleteUI } from '../delete/relativeType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'base.hr-relativeType-index',
  templateUrl: './relativeType.index.html',
  styleUrls: ['./relativeType.index.css']
})
export class RelativeTypeIndexUI extends IndexView<RelativeType> implements AfterViewInit, IIndexView<RelativeType> {

  constructor(private relativeTypeService: RelativeTypeService) {
    super(relativeTypeService);
    this.filterInstance = RelativeType.SeekInstance();
    this.currentInstance = new RelativeType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(relativeTypeEditUI: RelativeTypeEditUI){
    relativeTypeEditUI.ShowDialog(new RelativeType());
  }

  resetFilter() {
    this.filterInstance = RelativeType.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(relativeType: RelativeType) {
    this.onRefresh();
    this.currentInstance = new RelativeType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}

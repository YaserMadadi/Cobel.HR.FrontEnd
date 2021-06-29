import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { MaritalInfo } from '../maritalInfo';
import { MaritalInfoService } from '../maritalInfo.service';
import { MaritalInfoMasterUI } from '../master/maritalInfo.master';
import { MaritalInfoEditUI } from '../edit/maritalInfo.edit';
import { MaritalInfoDeleteUI } from '../delete/maritalInfo.delete';

import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-maritalInfo-index',
  templateUrl: './maritalInfo.index.html',
  styleUrls: ['./maritalInfo.index.css']
})
export class MaritalInfoIndexUI extends IndexView<MaritalInfo> implements AfterViewInit, IIndexView<MaritalInfo> {

  constructor(private maritalInfoService: MaritalInfoService) {
    super(maritalInfoService);
    this.filterInstance = MaritalInfo.SeekInstance();
    this.currentInstance = new MaritalInfo();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(maritalInfoEditUI: MaritalInfoEditUI){
    maritalInfoEditUI.ShowDialog(new MaritalInfo());
  }

  resetFilter() {
    this.filterInstance = MaritalInfo.SeekInstance();
    
    
  }

  public onEditModalClosed(maritalInfo: MaritalInfo) {
    this.onRefresh();
    this.currentInstance = new MaritalInfo();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
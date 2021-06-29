import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { StrategicObjectve } from '../strategicObjectve';
import { StrategicObjectveService } from '../strategicObjectve.service';
import { StrategicObjectveMasterUI } from '../master/strategicObjectve.master';
import { StrategicObjectveEditUI } from '../edit/strategicObjectve.edit';
import { StrategicObjectveDeleteUI } from '../delete/strategicObjectve.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-strategicObjectve-index',
  templateUrl: './strategicObjectve.index.html',
  styleUrls: ['./strategicObjectve.index.css']
})
export class StrategicObjectveIndexUI extends IndexView<StrategicObjectve> implements AfterViewInit, IIndexView<StrategicObjectve> {

  constructor(private strategicObjectveService: StrategicObjectveService) {
    super(strategicObjectveService);
    this.filterInstance = StrategicObjectve.SeekInstance();
    this.currentInstance = new StrategicObjectve();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(strategicObjectveEditUI: StrategicObjectveEditUI){
    strategicObjectveEditUI.ShowDialog(new StrategicObjectve());
  }

  resetFilter() {
    this.filterInstance = StrategicObjectve.SeekInstance();
    
    
  }

  public onEditModalClosed(strategicObjectve: StrategicObjectve) {
    this.onRefresh();
    this.currentInstance = new StrategicObjectve();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
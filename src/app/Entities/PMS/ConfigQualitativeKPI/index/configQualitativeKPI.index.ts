import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { ConfigQualitativeKPI } from '../configQualitativeKPI';
import { ConfigQualitativeKPIService } from '../configQualitativeKPI.service';
import { ConfigQualitativeKPIMasterUI } from '../master/configQualitativeKPI.master';
import { ConfigQualitativeKPIEditUI } from '../edit/configQualitativeKPI.edit';
import { ConfigQualitativeKPIDeleteUI } from '../delete/configQualitativeKPI.delete';

import { ConfigQualitativeObjective } from '../../ConfigQualitativeObjective/configQualitativeObjective';
import { ConfigQualitativeObjectiveEditUI } from '../../ConfigQualitativeObjective/edit/configQualitativeObjective.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-configQualitativeKPI-index',
  templateUrl: './configQualitativeKPI.index.html',
  styleUrls: ['./configQualitativeKPI.index.css']
})
export class ConfigQualitativeKPIIndexUI extends IndexView<ConfigQualitativeKPI> implements AfterViewInit, IIndexView<ConfigQualitativeKPI> {

  constructor(private configQualitativeKPIService: ConfigQualitativeKPIService) {
    super(configQualitativeKPIService);
    this.filterInstance = ConfigQualitativeKPI.SeekInstance();
    this.currentInstance = new ConfigQualitativeKPI();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(configQualitativeKPIEditUI: ConfigQualitativeKPIEditUI){
    configQualitativeKPIEditUI.ShowDialog(new ConfigQualitativeKPI());
  }

  resetFilter() {
    this.filterInstance = ConfigQualitativeKPI.SeekInstance();
    
    
  }

  public onEditModalClosed(configQualitativeKPI: ConfigQualitativeKPI) {
    this.onRefresh();
    this.currentInstance = new ConfigQualitativeKPI();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
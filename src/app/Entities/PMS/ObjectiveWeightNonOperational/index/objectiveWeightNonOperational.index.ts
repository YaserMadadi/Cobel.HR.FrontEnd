import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { ObjectiveWeightNonOperational } from '../objectiveWeightNonOperational';
import { ObjectiveWeightNonOperationalService } from '../objectiveWeightNonOperational.service';
import { ObjectiveWeightNonOperationalMasterUI } from '../master/objectiveWeightNonOperational.master';
import { ObjectiveWeightNonOperationalEditUI } from '../edit/objectiveWeightNonOperational.edit';
import { ObjectiveWeightNonOperationalDeleteUI } from '../delete/objectiveWeightNonOperational.delete';

import { Level } from '../../../HR/Level/level';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-objectiveWeightNonOperational-index',
  templateUrl: './objectiveWeightNonOperational.index.html',
  styleUrls: ['./objectiveWeightNonOperational.index.css']
})
export class ObjectiveWeightNonOperationalIndexUI extends IndexView<ObjectiveWeightNonOperational> implements AfterViewInit, IIndexView<ObjectiveWeightNonOperational> {

  constructor(private objectiveWeightNonOperationalService: ObjectiveWeightNonOperationalService) {
    super(objectiveWeightNonOperationalService);
    this.filterInstance = ObjectiveWeightNonOperational.SeekInstance();
    this.currentInstance = new ObjectiveWeightNonOperational();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(objectiveWeightNonOperationalEditUI: ObjectiveWeightNonOperationalEditUI){
    objectiveWeightNonOperationalEditUI.ShowDialog(new ObjectiveWeightNonOperational());
  }

  resetFilter() {
    this.filterInstance = ObjectiveWeightNonOperational.SeekInstance();
    
    
  }

  public onEditModalClosed(objectiveWeightNonOperational: ObjectiveWeightNonOperational) {
    this.onRefresh();
    this.currentInstance = new ObjectiveWeightNonOperational();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
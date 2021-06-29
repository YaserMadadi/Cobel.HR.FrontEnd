import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Training } from '../training';
import { TrainingService } from '../training.service';
import { TrainingMasterUI } from '../master/training.master';
import { TrainingEditUI } from '../edit/training.edit';
import { TrainingDeleteUI } from '../delete/training.delete';

import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { Course } from '../../Course/course';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'idea-training-index',
  templateUrl: './training.index.html',
  styleUrls: ['./training.index.css']
})
export class TrainingIndexUI extends IndexView<Training> implements AfterViewInit, IIndexView<Training> {

  constructor(private trainingService: TrainingService) {
    super(trainingService);
    this.filterInstance = Training.SeekInstance();
    this.currentInstance = new Training();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(trainingEditUI: TrainingEditUI){
    trainingEditUI.ShowDialog(new Training());
  }

  resetFilter() {
    this.filterInstance = Training.SeekInstance();
    
    
  }

  public onEditModalClosed(training: Training) {
    this.onRefresh();
    this.currentInstance = new Training();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
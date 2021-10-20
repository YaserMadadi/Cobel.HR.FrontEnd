import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { WorkExperience } from '../workExperience';
import { WorkExperienceService } from '../workExperience.service';
import { WorkExperienceMasterUI } from '../master/workExperience.master';
import { WorkExperienceEditUI } from '../edit/workExperience.edit';
import { WorkExperienceDeleteUI } from '../delete/workExperience.delete';

import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-workExperience-index',
  templateUrl: './workExperience.index.html',
  styleUrls: ['./workExperience.index.css']
})
export class WorkExperienceIndexUI extends IndexView<WorkExperience> implements AfterViewInit, IIndexView<WorkExperience> {

  constructor(private workExperienceService: WorkExperienceService) {
    super(workExperienceService);
    this.filterInstance = WorkExperience.SeekInstance();
    this.currentInstance = new WorkExperience();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(workExperienceEditUI: WorkExperienceEditUI){
    workExperienceEditUI.ShowDialog(new WorkExperience());
  }

  resetFilter() {
    this.filterInstance = WorkExperience.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(workExperience: WorkExperience) {
    this.onRefresh();
    this.currentInstance = new WorkExperience();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
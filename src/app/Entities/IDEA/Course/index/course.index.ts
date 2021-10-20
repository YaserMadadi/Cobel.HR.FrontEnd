import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Course } from '../course';
import { CourseService } from '../course.service';
import { CourseMasterUI } from '../master/course.master';
import { CourseEditUI } from '../edit/course.edit';
import { CourseDeleteUI } from '../delete/course.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { TrainingEditUI } from '../../Training/edit/training.edit';
import { Training } from '../../Training/training';



@Component({
  selector: 'idea-course-index',
  templateUrl: './course.index.html',
  styleUrls: ['./course.index.css']
})
export class CourseIndexUI extends IndexView<Course> implements AfterViewInit, IIndexView<Course> {

  constructor(private courseService: CourseService) {
    super(courseService);
    this.filterInstance = Course.SeekInstance();
    this.currentInstance = new Course();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region Training

  public training_Clicked(trainingEditUI: TrainingEditUI) {
    trainingEditUI.Course = this.currentInstance;
    trainingEditUI.ShowDialog(new Training());
  }
                    
  public trainingEditUI_Closed(training: Training) {
    if (!training)
      return;
    this.onRefresh();
  }
  
  //#endregion Training


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(courseEditUI: CourseEditUI){
    courseEditUI.ShowDialog(new Course());
  }

  resetFilter() {
    this.filterInstance = Course.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(course: Course) {
    this.onRefresh();
    this.currentInstance = new Course();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
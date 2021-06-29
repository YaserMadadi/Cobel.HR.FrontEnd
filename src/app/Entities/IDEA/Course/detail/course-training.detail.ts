import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Course } from '../course';
import { CourseService } from '../course.service';

import { Training } from '../../Training/training';
import { TrainingMasterUI } from '../../Training/master/training.master';
import { TrainingEditUI } from '../../Training/edit/training.edit';
import { TrainingDeleteUI } from '../../Training/delete/training.delete';



@Component({
  selector: 'course-training-detail',
  templateUrl: './course-training.detail.html',
  styleUrls: ['./course-training.detail.css'],
  providers: [CourseService]
}) 

@Injectable()
export class Course_Training_DetailUI extends DetailView<Course> {

  constructor(private courseService: CourseService) {
    super(courseService);
  }

  public TrainingList : Training[] = [];
  
  public currentTraining : Training = new Training();

  private course: Course = new Course();

  @Input()
  public set Course(value: Course) {
    this.course = value;
    this.onReload();
  }

  public get Course(): Course { return this.course }

  public onReload(){
    if (Course.NotConfirm(this.course))
      return;
    this.courseService
      .ServiceCollection
      .CollectionOfTraining(this.course)
      .then(trainingList => {
        this.TrainingList = trainingList;
        this.currentTraining = new Training();
      });
  }

  public onSelect(i: number) {
    this.currentTraining = this.TrainingList[i];
    if (Training.NotConfirm(this.currentTraining))
      this.currentTraining = new Training();
  }

  public onDblClicked(masterUI: TrainingMasterUI) {
    if (Training.NotConfirm(this.currentTraining))
      return;
    masterUI.ShowDialog(this.currentTraining);
  }

  public onAdd(editUI: TrainingEditUI) {
    editUI.Course = this.course;
    editUI.ShowDialog(new Training());
  }

  public onEdit(editUI: TrainingEditUI) {
    if (Training.NotConfirm(this.currentTraining))
      return;
    editUI.ShowDialog(this.currentTraining);
  }

  public onDelete(deleteUI: TrainingDeleteUI) {
    if (Training.NotConfirm(this.currentTraining))
      return;
    deleteUI.ShowDialog(this.currentTraining);
  }

  public onEditModal_Closed(training: Training) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Assessment } from '../assessment';
import { AssessmentService } from '../assessment.service';

import { RotationAssessment } from '../../RotationAssessment/rotationAssessment';
import { RotationAssessmentMasterUI } from '../../RotationAssessment/master/rotationAssessment.master';
import { RotationAssessmentEditUI } from '../../RotationAssessment/edit/rotationAssessment.edit';
import { RotationAssessmentDeleteUI } from '../../RotationAssessment/delete/rotationAssessment.delete';



@Component({
  selector: 'assessment-rotationAssessment-detail',
  templateUrl: './assessment-rotationAssessment.detail.html',
  styleUrls: ['./assessment-rotationAssessment.detail.css'],
  providers: [AssessmentService]
}) 

@Injectable()
export class Assessment_RotationAssessment_DetailUI extends DetailView<Assessment> {

  constructor(private assessmentService: AssessmentService) {
    super(assessmentService);
  }

  public RotationAssessmentList : RotationAssessment[] = [];
  
  public currentRotationAssessment : RotationAssessment = new RotationAssessment();

  private assessment: Assessment = new Assessment();

  @Input()
  public set Assessment(value: Assessment) {
    this.assessment = value;
    this.onReload();
  }

  public get Assessment(): Assessment { return this.assessment }

  public onReload(){
    if (Assessment.NotConfirm(this.assessment))
      return;
    this.assessmentService
      .ServiceCollection
      .CollectionOfRotationAssessment(this.assessment)
      .then(rotationAssessmentList => {
        this.RotationAssessmentList = rotationAssessmentList;
        this.currentRotationAssessment = new RotationAssessment();
      });
  }

  public onSelect(i: number) {
    this.currentRotationAssessment = this.RotationAssessmentList[i];
    if (RotationAssessment.NotConfirm(this.currentRotationAssessment))
      this.currentRotationAssessment = new RotationAssessment();
  }

  public onDblClicked(masterUI: RotationAssessmentMasterUI) {
    if (RotationAssessment.NotConfirm(this.currentRotationAssessment))
      return;
    masterUI.ShowDialog(this.currentRotationAssessment);
  }

  public onAdd(editUI: RotationAssessmentEditUI) {
    editUI.Assessment = this.assessment;
    editUI.ShowDialog(new RotationAssessment());
  }

  public onEdit(editUI: RotationAssessmentEditUI) {
    if (RotationAssessment.NotConfirm(this.currentRotationAssessment))
      return;
    editUI.ShowDialog(this.currentRotationAssessment);
  }

  public onDelete(deleteUI: RotationAssessmentDeleteUI) {
    if (RotationAssessment.NotConfirm(this.currentRotationAssessment))
      return;
    deleteUI.ShowDialog(this.currentRotationAssessment);
  }

  public onEditModal_Closed(rotationAssessment: RotationAssessment) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Gender } from '../gender';
import { GenderService } from '../gender.service';

import { Assessor } from '../../../LAD/Assessor/assessor';
import { AssessorMasterUI } from '../../../LAD/Assessor/master/assessor.master';
import { AssessorEditUI } from '../../../LAD/Assessor/edit/assessor.edit';
import { AssessorDeleteUI } from '../../../LAD/Assessor/delete/assessor.delete';



@Component({
  selector: 'gender-assessor-detail',
  templateUrl: './gender-assessor.detail.html',
  styleUrls: ['./gender-assessor.detail.css'],
  providers: [GenderService]
}) 

@Injectable()
export class Gender_Assessor_DetailUI extends DetailView<Gender> {

  constructor(private genderService: GenderService) {
    super(genderService);
  }

  public AssessorList : Assessor[] = [];
  
  public currentAssessor : Assessor = new Assessor();

  private gender: Gender = new Gender();

  @Input()
  public set Gender(value: Gender) {
    this.gender = value;
    this.onReload();
  }

  public get Gender(): Gender { return this.gender }

  public onReload(){
    if (Gender.NotConfirm(this.gender))
      return;
    this.genderService
      .ServiceCollection
      .CollectionOfAssessor(this.gender)
      .then(assessorList => {
        this.AssessorList = assessorList;
        this.currentAssessor = new Assessor();
      });
  }

  public onSelect(i: number) {
    this.currentAssessor = this.AssessorList[i];
    if (Assessor.NotConfirm(this.currentAssessor))
      this.currentAssessor = new Assessor();
  }

  public onDblClicked(masterUI: AssessorMasterUI) {
    if (Assessor.NotConfirm(this.currentAssessor))
      return;
    masterUI.ShowDialog(this.currentAssessor);
  }

  public onAdd(editUI: AssessorEditUI) {
    editUI.Gender = this.gender;
    editUI.ShowDialog(new Assessor());
  }

  public onEdit(editUI: AssessorEditUI) {
    if (Assessor.NotConfirm(this.currentAssessor))
      return;
    editUI.ShowDialog(this.currentAssessor);
  }

  public onDelete(deleteUI: AssessorDeleteUI) {
    if (Assessor.NotConfirm(this.currentAssessor))
      return;
    deleteUI.ShowDialog(this.currentAssessor);
  }

  public onEditModal_Closed(assessor: Assessor) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
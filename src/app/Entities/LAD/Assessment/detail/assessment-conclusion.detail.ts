import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Assessment } from '../assessment';
import { AssessmentService } from '../assessment.service';

import { Conclusion } from '../../Conclusion/conclusion';
import { ConclusionMasterUI } from '../../Conclusion/master/conclusion.master';
import { ConclusionEditUI } from '../../Conclusion/edit/conclusion.edit';
import { ConclusionDeleteUI } from '../../Conclusion/delete/conclusion.delete';



@Component({
  selector: 'assessment-conclusion-detail',
  templateUrl: './assessment-conclusion.detail.html',
  styleUrls: ['./assessment-conclusion.detail.css'],
  providers: [AssessmentService]
}) 

@Injectable()
export class Assessment_Conclusion_DetailUI extends DetailView<Assessment> {

  constructor(private assessmentService: AssessmentService) {
    super(assessmentService);
  }

  public ConclusionList : Conclusion[] = [];
  
  public currentConclusion : Conclusion = new Conclusion();

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
      .CollectionOfConclusion(this.assessment)
      .then(conclusionList => {
        this.ConclusionList = conclusionList;
        this.currentConclusion = new Conclusion();
      });
  }

  public onSelect(i: number) {
    this.currentConclusion = this.ConclusionList[i];
    if (Conclusion.NotConfirm(this.currentConclusion))
      this.currentConclusion = new Conclusion();
  }

  public onDblClicked(masterUI: ConclusionMasterUI) {
    if (Conclusion.NotConfirm(this.currentConclusion))
      return;
    masterUI.ShowDialog(this.currentConclusion);
  }

  public onAdd(editUI: ConclusionEditUI) {
    editUI.Assessment = this.assessment;
    editUI.ShowDialog(new Conclusion());
  }

  public onEdit(editUI: ConclusionEditUI) {
    if (Conclusion.NotConfirm(this.currentConclusion))
      return;
    editUI.ShowDialog(this.currentConclusion);
  }

  public onDelete(deleteUI: ConclusionDeleteUI) {
    if (Conclusion.NotConfirm(this.currentConclusion))
      return;
    deleteUI.ShowDialog(this.currentConclusion);
  }

  public onEditModal_Closed(conclusion: Conclusion) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { CompetencyItem } from '../competencyItem';
import { CompetencyItemService } from '../competencyItem.service';

import { AssessmentScore } from '../../../LAD/AssessmentScore/assessmentScore';
import { AssessmentScoreMasterUI } from '../../../LAD/AssessmentScore/master/assessmentScore.master';
import { AssessmentScoreEditUI } from '../../../LAD/AssessmentScore/edit/assessmentScore.edit';
import { AssessmentScoreDeleteUI } from '../../../LAD/AssessmentScore/delete/assessmentScore.delete';



@Component({
  selector: 'competencyItem-assessmentScore-detail',
  templateUrl: './competencyItem-assessmentScore.detail.html',
  styleUrls: ['./competencyItem-assessmentScore.detail.css']
})
export class CompetencyItem_AssessmentScore_DetailUI extends DetailView<CompetencyItem> {

  constructor(private competencyItemService: CompetencyItemService) {
    super(competencyItemService);
  }

  public AssessmentScoreList : AssessmentScore[] = [];
  
  public currentAssessmentScore : AssessmentScore = new AssessmentScore();

  private competencyItem: CompetencyItem = new CompetencyItem();

  @Input()
  public set CompetencyItem(value: CompetencyItem) {
    this.competencyItem = value;
    this.onReload();
  }

  public get CompetencyItem(): CompetencyItem { return this.competencyItem }

  public onReload(){
    if (CompetencyItem.NotConfirm(this.competencyItem))
      return;
    this.competencyItemService
      .ServiceCollection
      .CollectionOfAssessmentScore(this.competencyItem)
      .then(assessmentScoreList => {
        this.AssessmentScoreList = assessmentScoreList;
        this.currentAssessmentScore = new AssessmentScore();
      });
  }

  public onSelect(i: number) {
    this.currentAssessmentScore = this.AssessmentScoreList[i];
    if (AssessmentScore.NotConfirm(this.currentAssessmentScore))
      this.currentAssessmentScore = new AssessmentScore();
  }

  public onDblClicked(masterUI: AssessmentScoreMasterUI) {
    if (AssessmentScore.NotConfirm(this.currentAssessmentScore))
      return;
    masterUI.ShowDialog(this.currentAssessmentScore);
  }

  public onAdd(editUI: AssessmentScoreEditUI) {
    editUI.CompetencyItem = this.competencyItem;
    editUI.ShowDialog(new AssessmentScore());
  }

  public onEdit(editUI: AssessmentScoreEditUI) {
    if (AssessmentScore.NotConfirm(this.currentAssessmentScore))
      return;
    editUI.ShowDialog(this.currentAssessmentScore);
  }

  public onDelete(deleteUI: AssessmentScoreDeleteUI) {
    if (AssessmentScore.NotConfirm(this.currentAssessmentScore))
      return;
    deleteUI.ShowDialog(this.currentAssessmentScore);
  }

  public onEditModal_Closed(assessmentScore: AssessmentScore) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
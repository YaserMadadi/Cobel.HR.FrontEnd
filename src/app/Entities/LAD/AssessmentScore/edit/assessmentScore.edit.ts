import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { AssessmentScore } from '../assessmentScore';
import { AssessmentScoreService } from '../assessmentScore.service';
import { Assessment } from '../../Assessment/assessment';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';
import { CompetencyItem } from '../../../PMS/CompetencyItem/competencyItem';
import { CompetencyItemEditUI } from '../../../PMS/CompetencyItem/edit/competencyItem.edit';



@Component({
  selector: 'lad-assessmentScore-edit',
  templateUrl: './assessmentScore.edit.html',
  styleUrls: ['./assessmentScore.edit.css']
})
export class AssessmentScoreEditUI extends EditModal<AssessmentScore> implements IEditModal<AssessmentScore>  {
  
  constructor(private assessmentScoreService: AssessmentScoreService) {
    super(assessmentScoreService); 
    this.currentInstance = new AssessmentScore();
  }

  //#region Foreign Entities
	
	//#region -- Assessment --

  assessmentComponent : ForeignComponent<Assessment> = new ForeignComponent<Assessment>(this.assessmentScoreService.AssessmentService);

  @Input()
  public set Assessment(value: Assessment) {
    this.currentInstance.assessment = this.assessmentComponent.instance = value;
  }  


  //#endregion -- Assessment --
	//#region -- CompetencyItem --

  competencyItemComponent : ForeignComponent<CompetencyItem> = new ForeignComponent<CompetencyItem>(this.assessmentScoreService.CompetencyItemService);

  @Input()
  public set CompetencyItem(value: CompetencyItem) {
    this.currentInstance.competencyItem = this.competencyItemComponent.instance = value;
  }  


  //#endregion -- CompetencyItem --
	//#endregion

  @ViewChild('assessmentScoreEditUI')
  private assessmentScoreEditUI: NgForm;

  Init(assessmentScore: AssessmentScore = new AssessmentScore()) {
    if (assessmentScore.isNew)
      this.assessmentScoreEditUI.reset();
    this.InitAssessmentScore(assessmentScore);
    this.loadLists();
  }

  private loadLists() {
    
    this.competencyItemComponent.LoadList();
  }
  
  InitAssessmentScore(assessmentScore: AssessmentScore){
    this.currentInstance = this.service.CreateInstance();
    if (!assessmentScore.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.assessmentComponent.instance = assessmentScore.assessment;
			this.competencyItemComponent.instance = assessmentScore.competencyItem;
    } else {
      assessmentScore.assessment = this.assessmentComponent.instance;
			assessmentScore.competencyItem = this.competencyItemComponent.instance;
    }
    this.currentInstance = assessmentScore;
  }

  ResetForm() {
    this.Assessment = new Assessment();
		this.CompetencyItem = new CompetencyItem();
  }
}
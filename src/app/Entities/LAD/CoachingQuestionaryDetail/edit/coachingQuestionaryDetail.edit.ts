import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { CoachingQuestionaryDetail } from '../coachingQuestionaryDetail';
import { CoachingQuestionaryDetailService } from '../coachingQuestionaryDetail.service';
import { CoachingQuestionary } from '../../CoachingQuestionary/coachingQuestionary';
import { CoachingQuestionaryEditUI } from '../../CoachingQuestionary/edit/coachingQuestionary.edit';



@Component({
  selector: 'lad-coachingQuestionaryDetail-edit',
  templateUrl: './coachingQuestionaryDetail.edit.html',
  styleUrls: ['./coachingQuestionaryDetail.edit.css']
})
export class CoachingQuestionaryDetailEditUI extends EditModal<CoachingQuestionaryDetail> implements IEditModal<CoachingQuestionaryDetail>  {
  
  constructor(private coachingQuestionaryDetailService: CoachingQuestionaryDetailService) {
    super(coachingQuestionaryDetailService); 
    this.currentInstance = new CoachingQuestionaryDetail();
  }

  //#region Foreign Entities
	
	//#region -- CoachingQuestionary --

  coachingQuestionaryComponent : ForeignComponent<CoachingQuestionary> = new ForeignComponent<CoachingQuestionary>(this.coachingQuestionaryDetailService.CoachingQuestionaryService);

  @Input()
  public set CoachingQuestionary(value: CoachingQuestionary) {
    this.currentInstance.coachingQuestionary = this.coachingQuestionaryComponent.instance = value;
  }  


  //#endregion -- CoachingQuestionary --
	//#endregion

  @ViewChild('coachingQuestionaryDetailEditUI')
  private coachingQuestionaryDetailEditUI: NgForm;

  Init(coachingQuestionaryDetail: CoachingQuestionaryDetail = new CoachingQuestionaryDetail()) {
    if (coachingQuestionaryDetail.isNew)
      this.coachingQuestionaryDetailEditUI.reset();
    this.InitCoachingQuestionaryDetail(coachingQuestionaryDetail);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitCoachingQuestionaryDetail(coachingQuestionaryDetail: CoachingQuestionaryDetail) {
    if (!coachingQuestionaryDetail.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.coachingQuestionaryComponent.instance = coachingQuestionaryDetail.coachingQuestionary;
    } else {
      coachingQuestionaryDetail.coachingQuestionary = this.coachingQuestionaryComponent.instance;
    }
    this.currentInstance = coachingQuestionaryDetail;
  }

  ResetForm() {
    this.CoachingQuestionary = new CoachingQuestionary();
  }
}
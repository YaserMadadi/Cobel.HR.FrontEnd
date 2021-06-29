import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { AssessmentCoaching } from '../assessmentCoaching';
import { AssessmentCoachingService } from '../assessmentCoaching.service';
import { Assessment } from '../../Assessment/assessment';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';
import { Coaching } from '../../Coaching/coaching';
import { CoachingEditUI } from '../../Coaching/edit/coaching.edit';



@Component({
  selector: 'lad-assessmentCoaching-edit',
  templateUrl: './assessmentCoaching.edit.html',
  styleUrls: ['./assessmentCoaching.edit.css']
})
export class AssessmentCoachingEditUI extends EditModal<AssessmentCoaching> implements IEditModal<AssessmentCoaching>  {
  
  constructor(private assessmentCoachingService: AssessmentCoachingService) {
    super(assessmentCoachingService); 
    this.currentInstance = new AssessmentCoaching();
  }

  //#region Foreign Entities
	
	//#region -- Assessment --

  assessmentComponent : ForeignComponent<Assessment> = new ForeignComponent<Assessment>(this.assessmentCoachingService.AssessmentService);

  @Input()
  public set Assessment(value: Assessment) {
    this.currentInstance.assessment = this.assessmentComponent.instance = value;
  }  


  //#endregion -- Assessment --
	//#region -- Coaching --

  coachingComponent : ForeignComponent<Coaching> = new ForeignComponent<Coaching>(this.assessmentCoachingService.CoachingService);

  @Input()
  public set Coaching(value: Coaching) {
    this.currentInstance.coaching = this.coachingComponent.instance = value;
  }  


  //#endregion -- Coaching --
	//#endregion

  @ViewChild('assessmentCoachingEditUI')
  private assessmentCoachingEditUI: NgForm;

  Init(assessmentCoaching: AssessmentCoaching = new AssessmentCoaching()) {
    if (assessmentCoaching.isNew)
      this.assessmentCoachingEditUI.reset();
    this.InitAssessmentCoaching(assessmentCoaching);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitAssessmentCoaching(assessmentCoaching: AssessmentCoaching) {
    if (!assessmentCoaching.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.assessmentComponent.instance = assessmentCoaching.assessment;
			this.coachingComponent.instance = assessmentCoaching.coaching;
    } else {
      assessmentCoaching.assessment = this.assessmentComponent.instance;
			assessmentCoaching.coaching = this.coachingComponent.instance;
    }
    this.currentInstance = assessmentCoaching;
  }

  ResetForm() {
    this.Assessment = new Assessment();
		this.Coaching = new Coaching();
  }
}
import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { DevelopmentGoal } from '../developmentGoal';
import { DevelopmentGoalService } from '../developmentGoal.service';
import { Assessment } from '../../Assessment/assessment';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';



@Component({
  selector: 'lad-developmentGoal-edit',
  templateUrl: './developmentGoal.edit.html',
  styleUrls: ['./developmentGoal.edit.css']
})
export class DevelopmentGoalEditUI extends EditModal<DevelopmentGoal> implements IEditModal<DevelopmentGoal>  {
  
  constructor(private developmentGoalService: DevelopmentGoalService) {
    super(developmentGoalService); 
    this.currentInstance = new DevelopmentGoal();
  }

  //#region Foreign Entities
	
	//#region -- Assessment --

  assessmentComponent : ForeignComponent<Assessment> = new ForeignComponent<Assessment>(this.developmentGoalService.AssessmentService);

  @Input()
  public set Assessment(value: Assessment) {
    this.currentInstance.assessment = this.assessmentComponent.instance = value;
  }  


  //#endregion -- Assessment --
	//#endregion

  @ViewChild('developmentGoalEditUI')
  private developmentGoalEditUI: NgForm;

  Init(developmentGoal: DevelopmentGoal = new DevelopmentGoal()) {
    if (developmentGoal.isNew)
      this.developmentGoalEditUI.reset();
    this.InitDevelopmentGoal(developmentGoal);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitDevelopmentGoal(developmentGoal: DevelopmentGoal) {
    if (!developmentGoal.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.assessmentComponent.instance = developmentGoal.assessment;
    } else {
      developmentGoal.assessment = this.assessmentComponent.instance;
    }
    this.currentInstance = developmentGoal;
  }

  ResetForm() {
    this.Assessment = new Assessment();
  }
}
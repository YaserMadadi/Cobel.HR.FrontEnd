import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { AssessmentTraining } from '../assessmentTraining';
import { AssessmentTrainingService } from '../assessmentTraining.service';
import { Assessment } from '../../Assessment/assessment';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';
import { YearQuarter } from '../../../Base/YearQuarter/yearQuarter';
import { YearQuarterEditUI } from '../../../Base/YearQuarter/edit/yearQuarter.edit';



@Component({
  selector: 'lad-assessmentTraining-edit',
  templateUrl: './assessmentTraining.edit.html',
  styleUrls: ['./assessmentTraining.edit.css']
})
export class AssessmentTrainingEditUI extends EditModal<AssessmentTraining> implements IEditModal<AssessmentTraining>  {
  
  constructor(private assessmentTrainingService: AssessmentTrainingService) {
    super(assessmentTrainingService); 
    this.currentInstance = new AssessmentTraining();
  }

  //#region Foreign Entities
	
	//#region -- Assessment --

  assessmentComponent : ForeignComponent<Assessment> = new ForeignComponent<Assessment>(this.assessmentTrainingService.AssessmentService);

  @Input()
  public set Assessment(value: Assessment) {
    this.currentInstance.assessment = this.assessmentComponent.instance = value;
  }  


  //#endregion -- Assessment --
	//#region -- DeadLine --

  deadLineComponent : ForeignComponent<YearQuarter> = new ForeignComponent<YearQuarter>(this.assessmentTrainingService.YearQuarterService);

  @Input()
  public set DeadLine(value: YearQuarter) {
    this.currentInstance.deadLine = this.deadLineComponent.instance = value;
  }  


  //#endregion -- DeadLine --
	//#endregion

  @ViewChild('assessmentTrainingEditUI')
  private assessmentTrainingEditUI: NgForm;

  Init(assessmentTraining: AssessmentTraining = new AssessmentTraining()) {
    if (assessmentTraining.isNew)
      this.assessmentTrainingEditUI.reset();
    this.InitAssessmentTraining(assessmentTraining);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitAssessmentTraining(assessmentTraining: AssessmentTraining){
    this.currentInstance = this.service.CreateInstance();
    if (!assessmentTraining.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.assessmentComponent.instance = assessmentTraining.assessment;
			this.deadLineComponent.instance = assessmentTraining.deadLine;
    } else {
      assessmentTraining.assessment = this.assessmentComponent.instance;
			assessmentTraining.deadLine = this.deadLineComponent.instance;
    }
    this.currentInstance = assessmentTraining;
  }

  ResetForm() {
    this.Assessment = new Assessment();
		this.DeadLine = new YearQuarter();
  }
}
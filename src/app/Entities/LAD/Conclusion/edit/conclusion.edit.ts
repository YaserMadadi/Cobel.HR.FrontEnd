import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Conclusion } from '../conclusion';
import { ConclusionService } from '../conclusion.service';
import { Assessment } from '../../Assessment/assessment';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';
import { ConclusionType } from '../../ConclusionType/conclusionType';
import { ConclusionTypeEditUI } from '../../ConclusionType/edit/conclusionType.edit';



@Component({
  selector: 'lad-conclusion-edit',
  templateUrl: './conclusion.edit.html',
  styleUrls: ['./conclusion.edit.css']
})
export class ConclusionEditUI extends EditModal<Conclusion> implements IEditModal<Conclusion>  {
  
  constructor(private conclusionService: ConclusionService) {
    super(conclusionService); 
    this.currentInstance = new Conclusion();
  }

  //#region Foreign Entities
	
	//#region -- Assessment --

  assessmentComponent : ForeignComponent<Assessment> = new ForeignComponent<Assessment>(this.conclusionService.AssessmentService);

  @Input()
  public set Assessment(value: Assessment) {
    this.currentInstance.assessment = this.assessmentComponent.instance = value;
  }  


  //#endregion -- Assessment --
	//#region -- ConclusionType --

  conclusionTypeComponent : ForeignComponent<ConclusionType> = new ForeignComponent<ConclusionType>(this.conclusionService.ConclusionTypeService);

  @Input()
  public set ConclusionType(value: ConclusionType) {
    this.currentInstance.conclusionType = this.conclusionTypeComponent.instance = value;
  }  


  //#endregion -- ConclusionType --
	//#endregion

  @ViewChild('conclusionEditUI')
  private conclusionEditUI: NgForm;

  Init(conclusion: Conclusion = new Conclusion()) {
    if (conclusion.isNew)
      this.conclusionEditUI.reset();
    this.InitConclusion(conclusion);
    this.loadLists();
  }

  private loadLists() {
    
    this.conclusionTypeComponent.LoadList();
  }
  
  InitConclusion(conclusion: Conclusion){
    this.currentInstance = this.service.CreateInstance();
    if (!conclusion.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.assessmentComponent.instance = conclusion.assessment;
			this.conclusionTypeComponent.instance = conclusion.conclusionType;
    } else {
      conclusion.assessment = this.assessmentComponent.instance;
			conclusion.conclusionType = this.conclusionTypeComponent.instance;
    }
    this.currentInstance = conclusion;
  }

  ResetForm() {
    this.Assessment = new Assessment();
		this.ConclusionType = new ConclusionType();
  }
}
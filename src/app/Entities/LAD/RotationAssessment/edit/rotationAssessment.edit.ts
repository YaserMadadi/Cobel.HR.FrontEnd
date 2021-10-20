import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { RotationAssessment } from '../rotationAssessment';
import { RotationAssessmentService } from '../rotationAssessment.service';
import { Assessment } from '../../Assessment/assessment';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';
import { Position } from '../../../HR/Position/position';
import { PositionEditUI } from '../../../HR/Position/edit/position.edit';



@Component({
  selector: 'lad-rotationAssessment-edit',
  templateUrl: './rotationAssessment.edit.html',
  styleUrls: ['./rotationAssessment.edit.css']
})
export class RotationAssessmentEditUI extends EditModal<RotationAssessment> implements IEditModal<RotationAssessment>  {
  
  constructor(private rotationAssessmentService: RotationAssessmentService) {
    super(rotationAssessmentService); 
    this.currentInstance = new RotationAssessment();
  }

  //#region Foreign Entities
	
	//#region -- Assessment --

  assessmentComponent : ForeignComponent<Assessment> = new ForeignComponent<Assessment>(this.rotationAssessmentService.AssessmentService);

  @Input()
  public set Assessment(value: Assessment) {
    this.currentInstance.assessment = this.assessmentComponent.instance = value;
  }  


  //#endregion -- Assessment --
	//#region -- CurrentPosition --

  currentPositionComponent : ForeignComponent<Position> = new ForeignComponent<Position>(this.rotationAssessmentService.PositionService);

  @Input()
  public set CurrentPosition(value: Position) {
    this.currentInstance.currentPosition = this.currentPositionComponent.instance = value;
  }  


  //#endregion -- CurrentPosition --
	//#region -- ProposedPosition --

  proposedPositionComponent : ForeignComponent<Position> = new ForeignComponent<Position>(this.rotationAssessmentService.PositionService);

  @Input()
  public set ProposedPosition(value: Position) {
    this.currentInstance.proposedPosition = this.proposedPositionComponent.instance = value;
  }  


  //#endregion -- ProposedPosition --
	//#endregion

  @ViewChild('rotationAssessmentEditUI')
  private rotationAssessmentEditUI: NgForm;

  Init(rotationAssessment: RotationAssessment = new RotationAssessment()) {
    if (rotationAssessment.isNew)
      this.rotationAssessmentEditUI.reset();
    this.InitRotationAssessment(rotationAssessment);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitRotationAssessment(rotationAssessment: RotationAssessment){
    this.currentInstance = this.service.CreateInstance();
    if (!rotationAssessment.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.assessmentComponent.instance = rotationAssessment.assessment;
			this.currentPositionComponent.instance = rotationAssessment.currentPosition;
			this.proposedPositionComponent.instance = rotationAssessment.proposedPosition;
    } else {
      rotationAssessment.assessment = this.assessmentComponent.instance;
			rotationAssessment.currentPosition = this.currentPositionComponent.instance;
			rotationAssessment.proposedPosition = this.proposedPositionComponent.instance;
    }
    this.currentInstance = rotationAssessment;
  }

  ResetForm() {
    this.Assessment = new Assessment();
		this.CurrentPosition = new Position();
		this.ProposedPosition = new Position();
  }
}
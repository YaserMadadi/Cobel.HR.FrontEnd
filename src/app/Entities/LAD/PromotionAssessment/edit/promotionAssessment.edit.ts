import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { PromotionAssessment } from '../promotionAssessment';
import { PromotionAssessmentService } from '../promotionAssessment.service';
import { Assessment } from '../../Assessment/assessment';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';
import { Position } from '../../../HR/Position/position';
import { PositionEditUI } from '../../../HR/Position/edit/position.edit';
import { PromotionResult } from '../../PromotionResult/promotionResult';
import { PromotionResultEditUI } from '../../PromotionResult/edit/promotionResult.edit';



@Component({
  selector: 'lad-promotionAssessment-edit',
  templateUrl: './promotionAssessment.edit.html',
  styleUrls: ['./promotionAssessment.edit.css']
})
export class PromotionAssessmentEditUI extends EditModal<PromotionAssessment> implements IEditModal<PromotionAssessment>  {
  
  constructor(private promotionAssessmentService: PromotionAssessmentService) {
    super(promotionAssessmentService); 
    this.currentInstance = new PromotionAssessment();
  }

  //#region Foreign Entities
	
	//#region -- Assessment --

  assessmentComponent : ForeignComponent<Assessment> = new ForeignComponent<Assessment>(this.promotionAssessmentService.AssessmentService);

  @Input()
  public set Assessment(value: Assessment) {
    this.currentInstance.assessment = this.assessmentComponent.instance = value;
  }  


  //#endregion -- Assessment --
	//#region -- CurrentPosition --

  currentPositionComponent : ForeignComponent<Position> = new ForeignComponent<Position>(this.promotionAssessmentService.PositionService);

  @Input()
  public set CurrentPosition(value: Position) {
    this.currentInstance.currentPosition = this.currentPositionComponent.instance = value;
  }  


  //#endregion -- CurrentPosition --
	//#region -- ProposedPosition --

  proposedPositionComponent : ForeignComponent<Position> = new ForeignComponent<Position>(this.promotionAssessmentService.PositionService);

  @Input()
  public set ProposedPosition(value: Position) {
    this.currentInstance.proposedPosition = this.proposedPositionComponent.instance = value;
  }  


  //#endregion -- ProposedPosition --
	//#region -- PromotionResult --

  promotionResultComponent : ForeignComponent<PromotionResult> = new ForeignComponent<PromotionResult>(this.promotionAssessmentService.PromotionResultService);

  @Input()
  public set PromotionResult(value: PromotionResult) {
    this.currentInstance.promotionResult = this.promotionResultComponent.instance = value;
  }  


  //#endregion -- PromotionResult --
	//#endregion

  @ViewChild('promotionAssessmentEditUI')
  private promotionAssessmentEditUI: NgForm;

  Init(promotionAssessment: PromotionAssessment = new PromotionAssessment()) {
    if (promotionAssessment.isNew)
      this.promotionAssessmentEditUI.reset();
    this.InitPromotionAssessment(promotionAssessment);
    this.loadLists();
  }

  private loadLists() {
    
    this.promotionResultComponent.LoadList();
  }
  
  InitPromotionAssessment(promotionAssessment: PromotionAssessment) {
    if (!promotionAssessment.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.assessmentComponent.instance = promotionAssessment.assessment;
			this.currentPositionComponent.instance = promotionAssessment.currentPosition;
			this.proposedPositionComponent.instance = promotionAssessment.proposedPosition;
			this.promotionResultComponent.instance = promotionAssessment.promotionResult;
    } else {
      promotionAssessment.assessment = this.assessmentComponent.instance;
			promotionAssessment.currentPosition = this.currentPositionComponent.instance;
			promotionAssessment.proposedPosition = this.proposedPositionComponent.instance;
			promotionAssessment.promotionResult = this.promotionResultComponent.instance;
    }
    this.currentInstance = promotionAssessment;
  }

  ResetForm() {
    this.Assessment = new Assessment();
		this.CurrentPosition = new Position();
		this.ProposedPosition = new Position();
		this.PromotionResult = new PromotionResult();
  }
}
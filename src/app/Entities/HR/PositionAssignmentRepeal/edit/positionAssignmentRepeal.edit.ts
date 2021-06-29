import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { PositionAssignmentRepeal } from '../positionAssignmentRepeal';
import { PositionAssignmentRepealService } from '../positionAssignmentRepeal.service';
import { PositionAssignment } from '../../PositionAssignment/positionAssignment';
import { PositionAssignmentEditUI } from '../../PositionAssignment/edit/positionAssignment.edit';



@Component({
  selector: 'hr-positionAssignmentRepeal-edit',
  templateUrl: './positionAssignmentRepeal.edit.html',
  styleUrls: ['./positionAssignmentRepeal.edit.css']
})
export class PositionAssignmentRepealEditUI extends EditModal<PositionAssignmentRepeal> implements IEditModal<PositionAssignmentRepeal>  {
  
  constructor(private positionAssignmentRepealService: PositionAssignmentRepealService) {
    super(positionAssignmentRepealService); 
    this.currentInstance = new PositionAssignmentRepeal();
  }

  //#region Foreign Entities
	
	//#region -- PositionAssignment --

  positionAssignmentComponent : ForeignComponent<PositionAssignment> = new ForeignComponent<PositionAssignment>(this.positionAssignmentRepealService.PositionAssignmentService);

  @Input()
  public set PositionAssignment(value: PositionAssignment) {
    this.currentInstance.positionAssignment = this.positionAssignmentComponent.instance = value;
  }  


  //#endregion -- PositionAssignment --
	//#endregion

  @ViewChild('positionAssignmentRepealEditUI')
  private positionAssignmentRepealEditUI: NgForm;

  Init(positionAssignmentRepeal: PositionAssignmentRepeal = new PositionAssignmentRepeal()) {
    if (positionAssignmentRepeal.isNew)
      this.positionAssignmentRepealEditUI.reset();
    this.InitPositionAssignmentRepeal(positionAssignmentRepeal);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitPositionAssignmentRepeal(positionAssignmentRepeal: PositionAssignmentRepeal) {
    if (!positionAssignmentRepeal.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.positionAssignmentComponent.instance = positionAssignmentRepeal.positionAssignment;
    } else {
      positionAssignmentRepeal.positionAssignment = this.positionAssignmentComponent.instance;
    }
    this.currentInstance = positionAssignmentRepeal;
  }

  ResetForm() {
    this.PositionAssignment = new PositionAssignment();
  }
}
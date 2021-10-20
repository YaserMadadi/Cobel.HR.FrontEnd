

import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { PositionDivision } from '../positionDivision';
import { PositionDivisionService } from '../positionDivision.service';



@Component({
  selector: 'base-hr-positionDivision-edit',
  templateUrl: './positionDivision.edit.html',
  styleUrls: ['./positionDivision.edit.css']
})
export class PositionDivisionEditUI extends EditModal<PositionDivision> implements IEditModal<PositionDivision>  {
  
  constructor(private positionDivisionService: PositionDivisionService) {
    super(positionDivisionService); 
    this.currentInstance = new PositionDivision();
  }

  

  @ViewChild('positionDivisionEditUI')
  private positionDivisionEditUI: NgForm;

  Init(positionDivision: PositionDivision = new PositionDivision()) {
    if (positionDivision.isNew)
      this.positionDivisionEditUI.reset();
    this.InitPositionDivision(positionDivision);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitPositionDivision(positionDivision: PositionDivision){
    this.currentInstance = this.service.CreateInstance();
    if (!positionDivision.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = positionDivision;
  }

  ResetForm() {
    
  }
}

import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { UniversityTerminate } from '../universityTerminate';
import { UniversityTerminateService } from '../universityTerminate.service';
import { UniversityHistory } from '../../UniversityHistory/universityHistory';
import { UniversityHistoryEditUI } from '../../UniversityHistory/edit/universityHistory.edit';



@Component({
  selector: 'hr-universityTerminate-edit',
  templateUrl: './universityTerminate.edit.html',
  styleUrls: ['./universityTerminate.edit.css']
})
export class UniversityTerminateEditUI extends EditModal<UniversityTerminate> implements IEditModal<UniversityTerminate>  {
  
  constructor(private universityTerminateService: UniversityTerminateService) {
    super(universityTerminateService); 
    this.currentInstance = new UniversityTerminate();
  }

  //#region Foreign Entities
	
	//#region -- UniversityHistory --

  universityHistoryComponent : ForeignComponent<UniversityHistory> = new ForeignComponent<UniversityHistory>(this.universityTerminateService.UniversityHistoryService);

  @Input()
  public set UniversityHistory(value: UniversityHistory) {
    this.currentInstance.universityHistory = this.universityHistoryComponent.instance = value;
  }  


  //#endregion -- UniversityHistory --
	//#endregion

  @ViewChild('universityTerminateEditUI')
  private universityTerminateEditUI: NgForm;

  Init(universityTerminate: UniversityTerminate = new UniversityTerminate()) {
    if (universityTerminate.isNew)
      this.universityTerminateEditUI.reset();
    this.InitUniversityTerminate(universityTerminate);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitUniversityTerminate(universityTerminate: UniversityTerminate) {
    if (!universityTerminate.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.universityHistoryComponent.instance = universityTerminate.universityHistory;
    } else {
      universityTerminate.universityHistory = this.universityHistoryComponent.instance;
    }
    this.currentInstance = universityTerminate;
  }

  ResetForm() {
    this.UniversityHistory = new UniversityHistory();
  }
}
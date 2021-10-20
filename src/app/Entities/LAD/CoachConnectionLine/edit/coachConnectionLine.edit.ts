import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { CoachConnectionLine } from '../coachConnectionLine';
import { CoachConnectionLineService } from '../coachConnectionLine.service';
import { Coach } from '../../Coach/coach';
import { CoachEditUI } from '../../Coach/edit/coach.edit';
import { ConnectionType } from '../../../Base/ConnectionType/connectionType';
import { ConnectionTypeEditUI } from '../../../Base/ConnectionType/edit/connectionType.edit';



@Component({
  selector: 'lad-coachConnectionLine-edit',
  templateUrl: './coachConnectionLine.edit.html',
  styleUrls: ['./coachConnectionLine.edit.css']
})
export class CoachConnectionLineEditUI extends EditModal<CoachConnectionLine> implements IEditModal<CoachConnectionLine>  {
  
  constructor(private coachConnectionLineService: CoachConnectionLineService) {
    super(coachConnectionLineService); 
    this.currentInstance = new CoachConnectionLine();
  }

  //#region Foreign Entities
	
	//#region -- Coach --

  coachComponent : ForeignComponent<Coach> = new ForeignComponent<Coach>(this.coachConnectionLineService.CoachService);

  @Input()
  public set Coach(value: Coach) {
    this.currentInstance.coach = this.coachComponent.instance = value;
  }  


  //#endregion -- Coach --
	//#region -- ConnectionType --

  connectionTypeComponent : ForeignComponent<ConnectionType> = new ForeignComponent<ConnectionType>(this.coachConnectionLineService.ConnectionTypeService);

  @Input()
  public set ConnectionType(value: ConnectionType) {
    this.currentInstance.connectionType = this.connectionTypeComponent.instance = value;
  }  


  //#endregion -- ConnectionType --
	//#endregion

  @ViewChild('coachConnectionLineEditUI')
  private coachConnectionLineEditUI: NgForm;

  Init(coachConnectionLine: CoachConnectionLine = new CoachConnectionLine()) {
    if (coachConnectionLine.isNew)
      this.coachConnectionLineEditUI.reset();
    this.InitCoachConnectionLine(coachConnectionLine);
    this.loadLists();
  }

  private loadLists() {
    
    this.connectionTypeComponent.LoadList();
  }
  
  InitCoachConnectionLine(coachConnectionLine: CoachConnectionLine){
    this.currentInstance = this.service.CreateInstance();
    if (!coachConnectionLine.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.coachComponent.instance = coachConnectionLine.coach;
			this.connectionTypeComponent.instance = coachConnectionLine.connectionType;
    } else {
      coachConnectionLine.coach = this.coachComponent.instance;
			coachConnectionLine.connectionType = this.connectionTypeComponent.instance;
    }
    this.currentInstance = coachConnectionLine;
  }

  ResetForm() {
    this.Coach = new Coach();
		this.ConnectionType = new ConnectionType();
  }
}
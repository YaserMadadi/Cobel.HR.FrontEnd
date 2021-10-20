import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { AssessorConnectionLine } from '../assessorConnectionLine';
import { AssessorConnectionLineService } from '../assessorConnectionLine.service';
import { Assessor } from '../../Assessor/assessor';
import { AssessorEditUI } from '../../Assessor/edit/assessor.edit';
import { ConnectionType } from '../../../Base/ConnectionType/connectionType';
import { ConnectionTypeEditUI } from '../../../Base/ConnectionType/edit/connectionType.edit';



@Component({
  selector: 'lad-assessorConnectionLine-edit',
  templateUrl: './assessorConnectionLine.edit.html',
  styleUrls: ['./assessorConnectionLine.edit.css']
})
export class AssessorConnectionLineEditUI extends EditModal<AssessorConnectionLine> implements IEditModal<AssessorConnectionLine>  {
  
  constructor(private assessorConnectionLineService: AssessorConnectionLineService) {
    super(assessorConnectionLineService); 
    this.currentInstance = new AssessorConnectionLine();
  }

  //#region Foreign Entities
	
	//#region -- Assessor --

  assessorComponent : ForeignComponent<Assessor> = new ForeignComponent<Assessor>(this.assessorConnectionLineService.AssessorService);

  @Input()
  public set Assessor(value: Assessor) {
    this.currentInstance.assessor = this.assessorComponent.instance = value;
  }  


  //#endregion -- Assessor --
	//#region -- ConnectionType --

  connectionTypeComponent : ForeignComponent<ConnectionType> = new ForeignComponent<ConnectionType>(this.assessorConnectionLineService.ConnectionTypeService);

  @Input()
  public set ConnectionType(value: ConnectionType) {
    this.currentInstance.connectionType = this.connectionTypeComponent.instance = value;
  }  


  //#endregion -- ConnectionType --
	//#endregion

  @ViewChild('assessorConnectionLineEditUI')
  private assessorConnectionLineEditUI: NgForm;

  Init(assessorConnectionLine: AssessorConnectionLine = new AssessorConnectionLine()) {
    if (assessorConnectionLine.isNew)
      this.assessorConnectionLineEditUI.reset();
    this.InitAssessorConnectionLine(assessorConnectionLine);
    this.loadLists();
  }

  private loadLists() {
    
    this.connectionTypeComponent.LoadList();
  }
  
  InitAssessorConnectionLine(assessorConnectionLine: AssessorConnectionLine){
    this.currentInstance = this.service.CreateInstance();
    if (!assessorConnectionLine.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.assessorComponent.instance = assessorConnectionLine.assessor;
			this.connectionTypeComponent.instance = assessorConnectionLine.connectionType;
    } else {
      assessorConnectionLine.assessor = this.assessorComponent.instance;
			assessorConnectionLine.connectionType = this.connectionTypeComponent.instance;
    }
    this.currentInstance = assessorConnectionLine;
  }

  ResetForm() {
    this.Assessor = new Assessor();
		this.ConnectionType = new ConnectionType();
  }
}
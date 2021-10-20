import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { QualitativeKPI } from '../qualitativeKPI';
import { QualitativeKPIService } from '../qualitativeKPI.service';
import { QualitativeObjective } from '../../QualitativeObjective/qualitativeObjective';
import { QualitativeObjectiveEditUI } from '../../QualitativeObjective/edit/qualitativeObjective.edit';



@Component({
  selector: 'pms-qualitativeKPI-edit',
  templateUrl: './qualitativeKPI.edit.html',
  styleUrls: ['./qualitativeKPI.edit.css']
})
export class QualitativeKPIEditUI extends EditModal<QualitativeKPI> implements IEditModal<QualitativeKPI>  {
  
  constructor(private qualitativeKPIService: QualitativeKPIService) {
    super(qualitativeKPIService); 
    this.currentInstance = new QualitativeKPI();
  }

  //#region Foreign Entities
	
	//#region -- QualitativeObjective --

  qualitativeObjectiveComponent : ForeignComponent<QualitativeObjective> = new ForeignComponent<QualitativeObjective>(this.qualitativeKPIService.QualitativeObjectiveService);

  @Input()
  public set QualitativeObjective(value: QualitativeObjective) {
    this.currentInstance.qualitativeObjective = this.qualitativeObjectiveComponent.instance = value;
  }  


  //#endregion -- QualitativeObjective --
	//#endregion

  @ViewChild('qualitativeKPIEditUI')
  private qualitativeKPIEditUI: NgForm;

  Init(qualitativeKPI: QualitativeKPI = new QualitativeKPI()) {
    if (qualitativeKPI.isNew)
      this.qualitativeKPIEditUI.reset();
    this.InitQualitativeKPI(qualitativeKPI);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitQualitativeKPI(qualitativeKPI: QualitativeKPI){
    this.currentInstance = this.service.CreateInstance();
    if (!qualitativeKPI.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.qualitativeObjectiveComponent.instance = qualitativeKPI.qualitativeObjective;
    } else {
      qualitativeKPI.qualitativeObjective = this.qualitativeObjectiveComponent.instance;
    }
    this.currentInstance = qualitativeKPI;
  }

  ResetForm() {
    this.QualitativeObjective = new QualitativeObjective();
  }
}
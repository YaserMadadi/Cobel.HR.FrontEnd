import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { FunctionalKPI } from '../functionalKPI';
import { FunctionalKPIService } from '../functionalKPI.service';
import { FunctionalObjective } from '../../FunctionalObjective/functionalObjective';
import { FunctionalObjectiveEditUI } from '../../FunctionalObjective/edit/functionalObjective.edit';
import { MeasurementUnit } from '../../../Base.PMS/MeasurementUnit/measurementUnit';
import { MeasurementUnitEditUI } from '../../../Base.PMS/MeasurementUnit/edit/measurementUnit.edit';



@Component({
  selector: 'pms-functionalKPI-edit',
  templateUrl: './functionalKPI.edit.html',
  styleUrls: ['./functionalKPI.edit.css']
})
export class FunctionalKPIEditUI extends EditModal<FunctionalKPI> implements IEditModal<FunctionalKPI>  {
  
  constructor(private functionalKPIService: FunctionalKPIService) {
    super(functionalKPIService); 
    this.currentInstance = new FunctionalKPI();
  }

  //#region Foreign Entities
	
	//#region -- FunctionalObjective --

  functionalObjectiveComponent : ForeignComponent<FunctionalObjective> = new ForeignComponent<FunctionalObjective>(this.functionalKPIService.FunctionalObjectiveService);

  @Input()
  public set FunctionalObjective(value: FunctionalObjective) {
    this.currentInstance.functionalObjective = this.functionalObjectiveComponent.instance = value;
  }  


  //#endregion -- FunctionalObjective --
	//#region -- MeasurementUnit --

  measurementUnitComponent : ForeignComponent<MeasurementUnit> = new ForeignComponent<MeasurementUnit>(this.functionalKPIService.MeasurementUnitService,false);

  @Input()
  public set MeasurementUnit(value: MeasurementUnit) {
    this.currentInstance.measurementUnit = this.measurementUnitComponent.instance = value;
  }  


  //#endregion -- MeasurementUnit --
	//#endregion

  @ViewChild('functionalKPIEditUI')
  private functionalKPIEditUI: NgForm;

  Init(functionalKPI: FunctionalKPI = new FunctionalKPI()) {
    if (functionalKPI.isNew)
      this.functionalKPIEditUI.reset();
    this.InitFunctionalKPI(functionalKPI);
    this.loadLists();
  }

  private loadLists() {
    this.measurementUnitComponent.LoadList();
  }
  
  InitFunctionalKPI(functionalKPI: FunctionalKPI) {
    if (!functionalKPI.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.functionalObjectiveComponent.instance = functionalKPI.functionalObjective;
			this.measurementUnitComponent.instance = functionalKPI.measurementUnit;
    } else {
      functionalKPI.functionalObjective = this.functionalObjectiveComponent.instance;
			functionalKPI.measurementUnit = this.measurementUnitComponent.instance;
    }
    this.currentInstance = functionalKPI;
  }

  ResetForm() {
    this.FunctionalObjective = new FunctionalObjective();
		this.MeasurementUnit = new MeasurementUnit();
  }
}
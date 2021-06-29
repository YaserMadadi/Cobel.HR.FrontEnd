import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { ConfigQualitativeKPI } from '../configQualitativeKPI';
import { ConfigQualitativeKPIService } from '../configQualitativeKPI.service';
import { ConfigQualitativeObjective } from '../../ConfigQualitativeObjective/configQualitativeObjective';
import { ConfigQualitativeObjectiveEditUI } from '../../ConfigQualitativeObjective/edit/configQualitativeObjective.edit';



@Component({
  selector: 'pms-configQualitativeKPI-edit',
  templateUrl: './configQualitativeKPI.edit.html',
  styleUrls: ['./configQualitativeKPI.edit.css']
})
export class ConfigQualitativeKPIEditUI extends EditModal<ConfigQualitativeKPI> implements IEditModal<ConfigQualitativeKPI>  {
  
  constructor(private configQualitativeKPIService: ConfigQualitativeKPIService) {
    super(configQualitativeKPIService); 
    this.currentInstance = new ConfigQualitativeKPI();
  }

  //#region Foreign Entities
	
	//#region -- QualitativeObjectiveConfig --

  qualitativeObjectiveConfigComponent : ForeignComponent<ConfigQualitativeObjective> = new ForeignComponent<ConfigQualitativeObjective>(this.configQualitativeKPIService.ConfigQualitativeObjectiveService);

  @Input()
  public set QualitativeObjectiveConfig(value: ConfigQualitativeObjective) {
    this.currentInstance.configQualitativeObjective = this.qualitativeObjectiveConfigComponent.instance = value;
  }  


  //#endregion -- QualitativeObjectiveConfig --
	//#endregion

  @ViewChild('configQualitativeKPIEditUI')
  private configQualitativeKPIEditUI: NgForm;

  Init(configQualitativeKPI: ConfigQualitativeKPI = new ConfigQualitativeKPI()) {
    if (configQualitativeKPI.isNew)
      this.configQualitativeKPIEditUI.reset();
    this.InitConfigQualitativeKPI(configQualitativeKPI);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitConfigQualitativeKPI(configQualitativeKPI: ConfigQualitativeKPI) {
    if (!configQualitativeKPI.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.qualitativeObjectiveConfigComponent.instance = configQualitativeKPI.configQualitativeObjective;
    } else {
      configQualitativeKPI.configQualitativeObjective = this.qualitativeObjectiveConfigComponent.instance;
    }
    this.currentInstance = configQualitativeKPI;
  }

  ResetForm() {
    this.QualitativeObjectiveConfig = new ConfigQualitativeObjective();
  }
}
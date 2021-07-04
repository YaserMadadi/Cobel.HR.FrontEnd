import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { BehavioralKPI } from '../behavioralKPI';
import { BehavioralKPIService } from '../behavioralKPI.service';
import { BehavioralObjective } from '../../BehavioralObjective/behavioralObjective';
import { BehavioralObjectiveEditUI } from '../../BehavioralObjective/edit/behavioralObjective.edit';
import { CompetencyItemKPI } from '../../CompetencyItemKPI/competencyItemKPI';
import { CompetencyItemKPIEditUI } from '../../CompetencyItemKPI/edit/competencyItemKPI.edit';



@Component({
  selector: 'pms-behavioralKPI-edit',
  templateUrl: './behavioralKPI.edit.html',
  styleUrls: ['./behavioralKPI.edit.css']
})
export class BehavioralKPIEditUI extends EditModal<BehavioralKPI> implements IEditModal<BehavioralKPI>  {
  
  constructor(private behavioralKPIService: BehavioralKPIService) {
    super(behavioralKPIService); 
    this.currentInstance = new BehavioralKPI();
  }

  //#region Foreign Entities
	
	//#region -- BehavioralObjective --

  behavioralObjectiveComponent : ForeignComponent<BehavioralObjective> = new ForeignComponent<BehavioralObjective>(this.behavioralKPIService.BehavioralObjectiveService);

  @Input()
  public set BehavioralObjective(value: BehavioralObjective) {
    this.currentInstance.behavioralObjective = this.behavioralObjectiveComponent.instance = value;
  }  


  //#endregion -- BehavioralObjective --
	//#region -- CompetencyItemKPI --

  competencyItemKPIComponent : ForeignComponent<CompetencyItemKPI> = new ForeignComponent<CompetencyItemKPI>(this.behavioralKPIService.CompetencyItemKPIService,false);

  @Input()
  public set CompetencyItemKPI(value: CompetencyItemKPI) {
    this.currentInstance.competencyItemKPI = this.competencyItemKPIComponent.instance = value;
  }  


  //#endregion -- CompetencyItemKPI --
	//#endregion

  @ViewChild('behavioralKPIEditUI')
  private behavioralKPIEditUI: NgForm;

  Init(behavioralKPI: BehavioralKPI = new BehavioralKPI()) {
    if (behavioralKPI.isNew)
      this.behavioralKPIEditUI.reset();
    this.InitBehavioralKPI(behavioralKPI);
    this.loadLists();
  }

  private loadLists() {
    this.competencyItemKPIComponent.LoadList();
    
  }
  
  InitBehavioralKPI(behavioralKPI: BehavioralKPI) {
    if (!behavioralKPI.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.behavioralObjectiveComponent.instance = behavioralKPI.behavioralObjective;
			this.competencyItemKPIComponent.instance = behavioralKPI.competencyItemKPI;
    } else {
      behavioralKPI.behavioralObjective = this.behavioralObjectiveComponent.instance;
			behavioralKPI.competencyItemKPI = this.competencyItemKPIComponent.instance;
    }
    this.currentInstance = behavioralKPI;
  }

  ResetForm() {
    this.BehavioralObjective = new BehavioralObjective();
		this.CompetencyItemKPI = new CompetencyItemKPI();
  }

  SetDefault(){
    
  }
}
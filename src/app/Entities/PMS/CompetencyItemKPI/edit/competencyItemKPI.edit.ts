import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { CompetencyItemKPI } from '../competencyItemKPI';
import { CompetencyItemKPIService } from '../competencyItemKPI.service';
import { CompetencyItem } from '../../CompetencyItem/competencyItem';
import { CompetencyItemEditUI } from '../../CompetencyItem/edit/competencyItem.edit';



@Component({
  selector: 'pms-competencyItemKPI-edit',
  templateUrl: './competencyItemKPI.edit.html',
  styleUrls: ['./competencyItemKPI.edit.css']
})
export class CompetencyItemKPIEditUI extends EditModal<CompetencyItemKPI> implements IEditModal<CompetencyItemKPI>  {
  
  constructor(private competencyItemKPIService: CompetencyItemKPIService) {
    super(competencyItemKPIService); 
    this.currentInstance = new CompetencyItemKPI();
  }

  //#region Foreign Entities
	
	//#region -- CompetencyItem --

  competencyItemComponent : ForeignComponent<CompetencyItem> = new ForeignComponent<CompetencyItem>(this.competencyItemKPIService.CompetencyItemService);

  @Input()
  public set CompetencyItem(value: CompetencyItem) {
    this.currentInstance.competencyItem = this.competencyItemComponent.instance = value;
  }  


  //#endregion -- CompetencyItem --
	//#endregion

  @ViewChild('competencyItemKPIEditUI')
  private competencyItemKPIEditUI: NgForm;

  Init(competencyItemKPI: CompetencyItemKPI = new CompetencyItemKPI()) {
    if (competencyItemKPI.isNew)
      this.competencyItemKPIEditUI.reset();
    this.InitCompetencyItemKPI(competencyItemKPI);
    this.loadLists();
  }

  private loadLists() {
    
    this.competencyItemComponent.LoadList();
  }
  
  InitCompetencyItemKPI(competencyItemKPI: CompetencyItemKPI){
    this.currentInstance = this.service.CreateInstance();
    if (!competencyItemKPI.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.competencyItemComponent.instance = competencyItemKPI.competencyItem;
    } else {
      competencyItemKPI.competencyItem = this.competencyItemComponent.instance;
    }
    this.currentInstance = competencyItemKPI;
  }

  ResetForm() {
    this.CompetencyItem = new CompetencyItem();
  }
}
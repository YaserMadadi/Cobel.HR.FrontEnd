import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { DevelopmentPlanCompetency } from '../developmentPlanCompetency';
import { DevelopmentPlanCompetencyService } from '../developmentPlanCompetency.service';
import { IndividualDevelopmentPlan } from '../../IndividualDevelopmentPlan/individualDevelopmentPlan';
import { IndividualDevelopmentPlanEditUI } from '../../IndividualDevelopmentPlan/edit/individualDevelopmentPlan.edit';
import { CompetencyItem } from '../../CompetencyItem/competencyItem';
import { CompetencyItemEditUI } from '../../CompetencyItem/edit/competencyItem.edit';



@Component({
  selector: 'pms-developmentPlanCompetency-edit',
  templateUrl: './developmentPlanCompetency.edit.html',
  styleUrls: ['./developmentPlanCompetency.edit.css']
})
export class DevelopmentPlanCompetencyEditUI extends EditModal<DevelopmentPlanCompetency> implements IEditModal<DevelopmentPlanCompetency>  {
  
  constructor(private developmentPlanCompetencyService: DevelopmentPlanCompetencyService) {
    super(developmentPlanCompetencyService); 
    this.currentInstance = new DevelopmentPlanCompetency();
  }

  //#region Foreign Entities
	
	//#region -- IndividualDevelopmentPlan --

  individualDevelopmentPlanComponent : ForeignComponent<IndividualDevelopmentPlan> = new ForeignComponent<IndividualDevelopmentPlan>(this.developmentPlanCompetencyService.IndividualDevelopmentPlanService);

  @Input()
  public set IndividualDevelopmentPlan(value: IndividualDevelopmentPlan) {
    this.currentInstance.individualDevelopmentPlan = this.individualDevelopmentPlanComponent.instance = value;
  }  


  //#endregion -- IndividualDevelopmentPlan --
	//#region -- CompetencyItem --

  competencyItemComponent : ForeignComponent<CompetencyItem> = new ForeignComponent<CompetencyItem>(this.developmentPlanCompetencyService.CompetencyItemService);

  @Input()
  public set CompetencyItem(value: CompetencyItem) {
    this.currentInstance.competencyItem = this.competencyItemComponent.instance = value;
  }  


  //#endregion -- CompetencyItem --
	//#endregion

  @ViewChild('developmentPlanCompetencyEditUI')
  private developmentPlanCompetencyEditUI: NgForm;

  Init(developmentPlanCompetency: DevelopmentPlanCompetency = new DevelopmentPlanCompetency()) {
    if (developmentPlanCompetency.isNew)
      this.developmentPlanCompetencyEditUI.reset();
    this.InitDevelopmentPlanCompetency(developmentPlanCompetency);
    this.loadLists();
  }

  private loadLists() {
    
    this.competencyItemComponent.LoadList();
  }
  
  InitDevelopmentPlanCompetency(developmentPlanCompetency: DevelopmentPlanCompetency){
    this.currentInstance = this.service.CreateInstance();
    if (!developmentPlanCompetency.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.individualDevelopmentPlanComponent.instance = developmentPlanCompetency.individualDevelopmentPlan;
			this.competencyItemComponent.instance = developmentPlanCompetency.competencyItem;
    } else {
      developmentPlanCompetency.individualDevelopmentPlan = this.individualDevelopmentPlanComponent.instance;
			developmentPlanCompetency.competencyItem = this.competencyItemComponent.instance;
    }
    this.currentInstance = developmentPlanCompetency;
  }

  ResetForm() {
    this.IndividualDevelopmentPlan = new IndividualDevelopmentPlan();
		this.CompetencyItem = new CompetencyItem();
  }
}
import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { IndividualDevelopmentPlan } from '../individualDevelopmentPlan';
import { IndividualDevelopmentPlanService } from '../individualDevelopmentPlan.service';
import { Vision } from '../../Vision/vision';
import { VisionEditUI } from '../../Vision/edit/vision.edit';
import { DevelopmentPlanPriority } from '../../../Base.PMS/DevelopmentPlanPriority/developmentPlanPriority';
import { DevelopmentPlanPriorityEditUI } from '../../../Base.PMS/DevelopmentPlanPriority/edit/developmentPlanPriority.edit';
import { Subject } from '../../../Base.PMS/Subject/subject';
import { SubjectEditUI } from '../../../Base.PMS/Subject/edit/subject.edit';
import { CurrentSituation } from '../../../Base.PMS/CurrentSituation/currentSituation';
import { CurrentSituationEditUI } from '../../../Base.PMS/CurrentSituation/edit/currentSituation.edit';
import { DesirableSituation } from '../../../Base.PMS/DesirableSituation/desirableSituation';
import { DesirableSituationEditUI } from '../../../Base.PMS/DesirableSituation/edit/desirableSituation.edit';



@Component({
  selector: 'pms-individualDevelopmentPlan-edit',
  templateUrl: './individualDevelopmentPlan.edit.html',
  styleUrls: ['./individualDevelopmentPlan.edit.css']
})
export class IndividualDevelopmentPlanEditUI extends EditModal<IndividualDevelopmentPlan> implements IEditModal<IndividualDevelopmentPlan>  {
  
  constructor(private individualDevelopmentPlanService: IndividualDevelopmentPlanService) {
    super(individualDevelopmentPlanService); 
    this.currentInstance = new IndividualDevelopmentPlan();
  }

  //#region Foreign Entities
	
	//#region -- Vision --

  visionComponent : ForeignComponent<Vision> = new ForeignComponent<Vision>(this.individualDevelopmentPlanService.VisionService);

  @Input()
  public set Vision(value: Vision) {
    this.currentInstance.vision = this.visionComponent.instance = value;
  }  


  //#endregion -- Vision --
	//#region -- Priority --

  priorityComponent : ForeignComponent<DevelopmentPlanPriority> = new ForeignComponent<DevelopmentPlanPriority>(this.individualDevelopmentPlanService.DevelopmentPlanPriorityService);

  @Input()
  public set Priority(value: DevelopmentPlanPriority) {
    this.currentInstance.priority = this.priorityComponent.instance = value;
  }  


  //#endregion -- Priority --
	//#region -- Subject --

  subjectComponent : ForeignComponent<Subject> = new ForeignComponent<Subject>(this.individualDevelopmentPlanService.SubjectService);

  @Input()
  public set Subject(value: Subject) {
    this.currentInstance.subject = this.subjectComponent.instance = value;
  }  


  //#endregion -- Subject --
	//#region -- CurrentSituation --

  currentSituationComponent : ForeignComponent<CurrentSituation> = new ForeignComponent<CurrentSituation>(this.individualDevelopmentPlanService.CurrentSituationService);

  @Input()
  public set CurrentSituation(value: CurrentSituation) {
    this.currentInstance.currentSituation = this.currentSituationComponent.instance = value;
  }  


  //#endregion -- CurrentSituation --
	//#region -- DesirableSituation --

  desirableSituationComponent : ForeignComponent<DesirableSituation> = new ForeignComponent<DesirableSituation>(this.individualDevelopmentPlanService.DesirableSituationService);

  @Input()
  public set DesirableSituation(value: DesirableSituation) {
    this.currentInstance.desirableSituation = this.desirableSituationComponent.instance = value;
  }  


  //#endregion -- DesirableSituation --
	//#endregion

  @ViewChild('individualDevelopmentPlanEditUI')
  private individualDevelopmentPlanEditUI: NgForm;

  Init(individualDevelopmentPlan: IndividualDevelopmentPlan = new IndividualDevelopmentPlan()) {
    if (individualDevelopmentPlan.isNew)
      this.individualDevelopmentPlanEditUI.reset();
    this.InitIndividualDevelopmentPlan(individualDevelopmentPlan);
    this.loadLists();
  }

  private loadLists() {
    
    this.priorityComponent.LoadList();
		this.subjectComponent.LoadList();
		this.currentSituationComponent.LoadList();
		this.desirableSituationComponent.LoadList();
  }
  
  InitIndividualDevelopmentPlan(individualDevelopmentPlan: IndividualDevelopmentPlan) {
    if (!individualDevelopmentPlan.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.visionComponent.instance = individualDevelopmentPlan.vision;
			this.priorityComponent.instance = individualDevelopmentPlan.priority;
			this.subjectComponent.instance = individualDevelopmentPlan.subject;
			this.currentSituationComponent.instance = individualDevelopmentPlan.currentSituation;
			this.desirableSituationComponent.instance = individualDevelopmentPlan.desirableSituation;
    } else {
      individualDevelopmentPlan.vision = this.visionComponent.instance;
			individualDevelopmentPlan.priority = this.priorityComponent.instance;
			individualDevelopmentPlan.subject = this.subjectComponent.instance;
			individualDevelopmentPlan.currentSituation = this.currentSituationComponent.instance;
			individualDevelopmentPlan.desirableSituation = this.desirableSituationComponent.instance;
    }
    this.currentInstance = individualDevelopmentPlan;
  }

  ResetForm() {
    this.Vision = new Vision();
		this.Priority = new DevelopmentPlanPriority();
		this.Subject = new Subject();
		this.CurrentSituation = new CurrentSituation();
		this.DesirableSituation = new DesirableSituation();
  }
}
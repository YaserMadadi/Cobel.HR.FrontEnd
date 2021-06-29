import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Subject } from '../subject';
import { SubjectService } from '../subject.service';

import { IndividualDevelopmentPlan } from '../../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';
import { IndividualDevelopmentPlanMasterUI } from '../../../PMS/IndividualDevelopmentPlan/master/individualDevelopmentPlan.master';
import { IndividualDevelopmentPlanEditUI } from '../../../PMS/IndividualDevelopmentPlan/edit/individualDevelopmentPlan.edit';
import { IndividualDevelopmentPlanDeleteUI } from '../../../PMS/IndividualDevelopmentPlan/delete/individualDevelopmentPlan.delete';



@Component({
  selector: 'subject-individualDevelopmentPlan-detail',
  templateUrl: './subject-individualDevelopmentPlan.detail.html',
  styleUrls: ['./subject-individualDevelopmentPlan.detail.css'],
  providers: [SubjectService]
}) 

@Injectable()
export class Subject_IndividualDevelopmentPlan_DetailUI extends DetailView<Subject> {

  constructor(private subjectService: SubjectService) {
    super(subjectService);
  }

  public IndividualDevelopmentPlanList : IndividualDevelopmentPlan[] = [];
  
  public currentIndividualDevelopmentPlan : IndividualDevelopmentPlan = new IndividualDevelopmentPlan();

  private subject: Subject = new Subject();

  @Input()
  public set Subject(value: Subject) {
    this.subject = value;
    this.onReload();
  }

  public get Subject(): Subject { return this.subject }

  public onReload(){
    if (Subject.NotConfirm(this.subject))
      return;
    this.subjectService
      .ServiceCollection
      .CollectionOfIndividualDevelopmentPlan(this.subject)
      .then(individualDevelopmentPlanList => {
        this.IndividualDevelopmentPlanList = individualDevelopmentPlanList;
        this.currentIndividualDevelopmentPlan = new IndividualDevelopmentPlan();
      });
  }

  public onSelect(i: number) {
    this.currentIndividualDevelopmentPlan = this.IndividualDevelopmentPlanList[i];
    if (IndividualDevelopmentPlan.NotConfirm(this.currentIndividualDevelopmentPlan))
      this.currentIndividualDevelopmentPlan = new IndividualDevelopmentPlan();
  }

  public onDblClicked(masterUI: IndividualDevelopmentPlanMasterUI) {
    if (IndividualDevelopmentPlan.NotConfirm(this.currentIndividualDevelopmentPlan))
      return;
    masterUI.ShowDialog(this.currentIndividualDevelopmentPlan);
  }

  public onAdd(editUI: IndividualDevelopmentPlanEditUI) {
    editUI.Subject = this.subject;
    editUI.ShowDialog(new IndividualDevelopmentPlan());
  }

  public onEdit(editUI: IndividualDevelopmentPlanEditUI) {
    if (IndividualDevelopmentPlan.NotConfirm(this.currentIndividualDevelopmentPlan))
      return;
    editUI.ShowDialog(this.currentIndividualDevelopmentPlan);
  }

  public onDelete(deleteUI: IndividualDevelopmentPlanDeleteUI) {
    if (IndividualDevelopmentPlan.NotConfirm(this.currentIndividualDevelopmentPlan))
      return;
    deleteUI.ShowDialog(this.currentIndividualDevelopmentPlan);
  }

  public onEditModal_Closed(individualDevelopmentPlan: IndividualDevelopmentPlan) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
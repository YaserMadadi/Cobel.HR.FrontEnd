import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { CompetencyItem } from '../competencyItem';
import { CompetencyItemService } from '../competencyItem.service';

import { DevelopmentPlanCompetency } from '../../DevelopmentPlanCompetency/developmentPlanCompetency';
import { DevelopmentPlanCompetencyMasterUI } from '../../DevelopmentPlanCompetency/master/developmentPlanCompetency.master';
import { DevelopmentPlanCompetencyEditUI } from '../../DevelopmentPlanCompetency/edit/developmentPlanCompetency.edit';
import { DevelopmentPlanCompetencyDeleteUI } from '../../DevelopmentPlanCompetency/delete/developmentPlanCompetency.delete';



@Component({
  selector: 'competencyItem-developmentPlanCompetency-detail',
  templateUrl: './competencyItem-developmentPlanCompetency.detail.html',
  styleUrls: ['./competencyItem-developmentPlanCompetency.detail.css'],
  providers: [CompetencyItemService]
}) 

@Injectable()
export class CompetencyItem_DevelopmentPlanCompetency_DetailUI extends DetailView<CompetencyItem> {

  constructor(private competencyItemService: CompetencyItemService) {
    super(competencyItemService);
  }

  public DevelopmentPlanCompetencyList : DevelopmentPlanCompetency[] = [];
  
  public currentDevelopmentPlanCompetency : DevelopmentPlanCompetency = new DevelopmentPlanCompetency();

  private competencyItem: CompetencyItem = new CompetencyItem();

  @Input()
  public set CompetencyItem(value: CompetencyItem) {
    this.competencyItem = value;
    this.onReload();
  }

  public get CompetencyItem(): CompetencyItem { return this.competencyItem }

  public onReload(){
    if (CompetencyItem.NotConfirm(this.competencyItem))
      return;
    this.competencyItemService
      .ServiceCollection
      .CollectionOfDevelopmentPlanCompetency(this.competencyItem)
      .then(developmentPlanCompetencyList => {
        this.DevelopmentPlanCompetencyList = developmentPlanCompetencyList;
        this.currentDevelopmentPlanCompetency = new DevelopmentPlanCompetency();
      });
  }

  public onSelect(i: number) {
    this.currentDevelopmentPlanCompetency = this.DevelopmentPlanCompetencyList[i];
    if (DevelopmentPlanCompetency.NotConfirm(this.currentDevelopmentPlanCompetency))
      this.currentDevelopmentPlanCompetency = new DevelopmentPlanCompetency();
  }

  public onDblClicked(masterUI: DevelopmentPlanCompetencyMasterUI) {
    if (DevelopmentPlanCompetency.NotConfirm(this.currentDevelopmentPlanCompetency))
      return;
    masterUI.ShowDialog(this.currentDevelopmentPlanCompetency);
  }

  public onAdd(editUI: DevelopmentPlanCompetencyEditUI) {
    editUI.CompetencyItem = this.competencyItem;
    editUI.ShowDialog(new DevelopmentPlanCompetency());
  }

  public onEdit(editUI: DevelopmentPlanCompetencyEditUI) {
    if (DevelopmentPlanCompetency.NotConfirm(this.currentDevelopmentPlanCompetency))
      return;
    editUI.ShowDialog(this.currentDevelopmentPlanCompetency);
  }

  public onDelete(deleteUI: DevelopmentPlanCompetencyDeleteUI) {
    if (DevelopmentPlanCompetency.NotConfirm(this.currentDevelopmentPlanCompetency))
      return;
    deleteUI.ShowDialog(this.currentDevelopmentPlanCompetency);
  }

  public onEditModal_Closed(developmentPlanCompetency: DevelopmentPlanCompetency) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
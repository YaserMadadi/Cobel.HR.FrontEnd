import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { CompetencyItem } from '../competencyItem';
import { CompetencyItemService } from '../competencyItem.service';

import { CompetencyItemKPI } from '../../CompetencyItemKPI/competencyItemKPI';
import { CompetencyItemKPIMasterUI } from '../../CompetencyItemKPI/master/competencyItemKPI.master';
import { CompetencyItemKPIEditUI } from '../../CompetencyItemKPI/edit/competencyItemKPI.edit';
import { CompetencyItemKPIDeleteUI } from '../../CompetencyItemKPI/delete/competencyItemKPI.delete';



@Component({
  selector: 'competencyItem-competencyItemKPI-detail',
  templateUrl: './competencyItem-competencyItemKPI.detail.html',
  styleUrls: ['./competencyItem-competencyItemKPI.detail.css']
})
export class CompetencyItem_CompetencyItemKPI_DetailUI extends DetailView<CompetencyItem> {

  constructor(private competencyItemService: CompetencyItemService) {
    super(competencyItemService);
  }

  public CompetencyItemKPIList : CompetencyItemKPI[] = [];
  
  public currentCompetencyItemKPI : CompetencyItemKPI = new CompetencyItemKPI();

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
      .CollectionOfCompetencyItemKPI(this.competencyItem)
      .then(competencyItemKPIList => {
        this.CompetencyItemKPIList = competencyItemKPIList;
        this.currentCompetencyItemKPI = new CompetencyItemKPI();
      });
  }

  public onSelect(i: number) {
    this.currentCompetencyItemKPI = this.CompetencyItemKPIList[i];
    if (CompetencyItemKPI.NotConfirm(this.currentCompetencyItemKPI))
      this.currentCompetencyItemKPI = new CompetencyItemKPI();
  }

  public onDblClicked(masterUI: CompetencyItemKPIMasterUI) {
    if (CompetencyItemKPI.NotConfirm(this.currentCompetencyItemKPI))
      return;
    masterUI.ShowDialog(this.currentCompetencyItemKPI);
  }

  public onAdd(editUI: CompetencyItemKPIEditUI) {
    editUI.CompetencyItem = this.competencyItem;
    editUI.ShowDialog(new CompetencyItemKPI());
  }

  public onEdit(editUI: CompetencyItemKPIEditUI) {
    if (CompetencyItemKPI.NotConfirm(this.currentCompetencyItemKPI))
      return;
    editUI.ShowDialog(this.currentCompetencyItemKPI);
  }

  public onDelete(deleteUI: CompetencyItemKPIDeleteUI) {
    if (CompetencyItemKPI.NotConfirm(this.currentCompetencyItemKPI))
      return;
    deleteUI.ShowDialog(this.currentCompetencyItemKPI);
  }

  public onEditModal_Closed(competencyItemKPI: CompetencyItemKPI) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
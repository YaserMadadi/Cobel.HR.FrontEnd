import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { CompetencyItemKPI } from '../competencyItemKPI';
import { CompetencyItemKPIService } from '../competencyItemKPI.service';

import { BehavioralKPI } from '../../BehavioralKPI/behavioralKPI';
import { BehavioralKPIMasterUI } from '../../BehavioralKPI/master/behavioralKPI.master';
import { BehavioralKPIEditUI } from '../../BehavioralKPI/edit/behavioralKPI.edit';
import { BehavioralKPIDeleteUI } from '../../BehavioralKPI/delete/behavioralKPI.delete';



@Component({
  selector: 'competencyItemKPI-behavioralKPI-detail',
  templateUrl: './competencyItemKPI-behavioralKPI.detail.html',
  styleUrls: ['./competencyItemKPI-behavioralKPI.detail.css']
})
export class CompetencyItemKPI_BehavioralKPI_DetailUI extends DetailView<CompetencyItemKPI> {

  constructor(private competencyItemKPIService: CompetencyItemKPIService) {
    super(competencyItemKPIService);
  }

  public BehavioralKPIList : BehavioralKPI[] = [];
  
  public currentBehavioralKPI : BehavioralKPI = new BehavioralKPI();

  private competencyItemKPI: CompetencyItemKPI = new CompetencyItemKPI();

  @Input()
  public set CompetencyItemKPI(value: CompetencyItemKPI) {
    this.competencyItemKPI = value;
    this.onReload();
  }

  public get CompetencyItemKPI(): CompetencyItemKPI { return this.competencyItemKPI }

  public onReload(){
    if (CompetencyItemKPI.NotConfirm(this.competencyItemKPI))
      return;
    this.competencyItemKPIService
      .ServiceCollection
      .CollectionOfBehavioralKPI(this.competencyItemKPI)
      .then(behavioralKPIList => {
        this.BehavioralKPIList = behavioralKPIList;
        this.currentBehavioralKPI = new BehavioralKPI();
      });
  }

  public onSelect(i: number) {
    this.currentBehavioralKPI = this.BehavioralKPIList[i];
    if (BehavioralKPI.NotConfirm(this.currentBehavioralKPI))
      this.currentBehavioralKPI = new BehavioralKPI();
  }

  public onDblClicked(masterUI: BehavioralKPIMasterUI) {
    if (BehavioralKPI.NotConfirm(this.currentBehavioralKPI))
      return;
    masterUI.ShowDialog(this.currentBehavioralKPI);
  }

  public onAdd(editUI: BehavioralKPIEditUI) {
    editUI.CompetencyItemKPI = this.competencyItemKPI;
    editUI.ShowDialog(new BehavioralKPI());
  }

  public onEdit(editUI: BehavioralKPIEditUI) {
    if (BehavioralKPI.NotConfirm(this.currentBehavioralKPI))
      return;
    editUI.ShowDialog(this.currentBehavioralKPI);
  }

  public onDelete(deleteUI: BehavioralKPIDeleteUI) {
    if (BehavioralKPI.NotConfirm(this.currentBehavioralKPI))
      return;
    deleteUI.ShowDialog(this.currentBehavioralKPI);
  }

  public onEditModal_Closed(behavioralKPI: BehavioralKPI) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
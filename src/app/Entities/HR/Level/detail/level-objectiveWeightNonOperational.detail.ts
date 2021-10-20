import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Level } from '../level';
import { LevelService } from '../level.service';

import { ObjectiveWeightNonOperational } from '../../../PMS/ObjectiveWeightNonOperational/objectiveWeightNonOperational';
import { ObjectiveWeightNonOperationalMasterUI } from '../../../PMS/ObjectiveWeightNonOperational/master/objectiveWeightNonOperational.master';
import { ObjectiveWeightNonOperationalEditUI } from '../../../PMS/ObjectiveWeightNonOperational/edit/objectiveWeightNonOperational.edit';
import { ObjectiveWeightNonOperationalDeleteUI } from '../../../PMS/ObjectiveWeightNonOperational/delete/objectiveWeightNonOperational.delete';



@Component({
  selector: 'level-objectiveWeightNonOperational-detail',
  templateUrl: './level-objectiveWeightNonOperational.detail.html',
  styleUrls: ['./level-objectiveWeightNonOperational.detail.css']
})
export class Level_ObjectiveWeightNonOperational_DetailUI extends DetailView<Level> {

  constructor(private levelService: LevelService) {
    super(levelService);
  }

  public ObjectiveWeightNonOperationalList : ObjectiveWeightNonOperational[] = [];
  
  public currentObjectiveWeightNonOperational : ObjectiveWeightNonOperational = new ObjectiveWeightNonOperational();

  private level: Level = new Level();

  @Input()
  public set Level(value: Level) {
    this.level = value;
    this.onReload();
  }

  public get Level(): Level { return this.level }

  public onReload(){
    if (Level.NotConfirm(this.level))
      return;
    this.levelService
      .ServiceCollection
      .CollectionOfObjectiveWeightNonOperational(this.level)
      .then(objectiveWeightNonOperationalList => {
        this.ObjectiveWeightNonOperationalList = objectiveWeightNonOperationalList;
        this.currentObjectiveWeightNonOperational = new ObjectiveWeightNonOperational();
      });
  }

  public onSelect(i: number) {
    this.currentObjectiveWeightNonOperational = this.ObjectiveWeightNonOperationalList[i];
    if (ObjectiveWeightNonOperational.NotConfirm(this.currentObjectiveWeightNonOperational))
      this.currentObjectiveWeightNonOperational = new ObjectiveWeightNonOperational();
  }

  public onDblClicked(masterUI: ObjectiveWeightNonOperationalMasterUI) {
    if (ObjectiveWeightNonOperational.NotConfirm(this.currentObjectiveWeightNonOperational))
      return;
    masterUI.ShowDialog(this.currentObjectiveWeightNonOperational);
  }

  public onAdd(editUI: ObjectiveWeightNonOperationalEditUI) {
    editUI.Level = this.level;
    editUI.ShowDialog(new ObjectiveWeightNonOperational());
  }

  public onEdit(editUI: ObjectiveWeightNonOperationalEditUI) {
    if (ObjectiveWeightNonOperational.NotConfirm(this.currentObjectiveWeightNonOperational))
      return;
    editUI.ShowDialog(this.currentObjectiveWeightNonOperational);
  }

  public onDelete(deleteUI: ObjectiveWeightNonOperationalDeleteUI) {
    if (ObjectiveWeightNonOperational.NotConfirm(this.currentObjectiveWeightNonOperational))
      return;
    deleteUI.ShowDialog(this.currentObjectiveWeightNonOperational);
  }

  public onEditModal_Closed(objectiveWeightNonOperational: ObjectiveWeightNonOperational) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
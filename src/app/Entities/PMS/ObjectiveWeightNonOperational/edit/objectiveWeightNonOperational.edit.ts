import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { ObjectiveWeightNonOperational } from '../objectiveWeightNonOperational';
import { ObjectiveWeightNonOperationalService } from '../objectiveWeightNonOperational.service';
import { Level } from '../../../HR/Level/level';
import { LevelEditUI } from '../../../HR/Level/edit/level.edit';



@Component({
  selector: 'pms-objectiveWeightNonOperational-edit',
  templateUrl: './objectiveWeightNonOperational.edit.html',
  styleUrls: ['./objectiveWeightNonOperational.edit.css']
})
export class ObjectiveWeightNonOperationalEditUI extends EditModal<ObjectiveWeightNonOperational> implements IEditModal<ObjectiveWeightNonOperational>  {
  
  constructor(private objectiveWeightNonOperationalService: ObjectiveWeightNonOperationalService) {
    super(objectiveWeightNonOperationalService); 
    this.currentInstance = new ObjectiveWeightNonOperational();
  }

  //#region Foreign Entities
	
	//#region -- Level --

  levelComponent : ForeignComponent<Level> = new ForeignComponent<Level>(this.objectiveWeightNonOperationalService.LevelService);

  @Input()
  public set Level(value: Level) {
    this.currentInstance.level = this.levelComponent.instance = value;
  }  


  //#endregion -- Level --
	//#endregion

  @ViewChild('objectiveWeightNonOperationalEditUI')
  private objectiveWeightNonOperationalEditUI: NgForm;

  Init(objectiveWeightNonOperational: ObjectiveWeightNonOperational = new ObjectiveWeightNonOperational()) {
    if (objectiveWeightNonOperational.isNew)
      this.objectiveWeightNonOperationalEditUI.reset();
    this.InitObjectiveWeightNonOperational(objectiveWeightNonOperational);
    this.loadLists();
  }

  private loadLists() {
    
    this.levelComponent.LoadList();
  }
  
  InitObjectiveWeightNonOperational(objectiveWeightNonOperational: ObjectiveWeightNonOperational) {
    if (!objectiveWeightNonOperational.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.levelComponent.instance = objectiveWeightNonOperational.level;
    } else {
      objectiveWeightNonOperational.level = this.levelComponent.instance;
    }
    this.currentInstance = objectiveWeightNonOperational;
  }

  ResetForm() {
    this.Level = new Level();
  }
}
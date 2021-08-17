import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Position } from '../position';
import { PositionService } from '../position.service';
import { Level } from '../../Level/level';
import { LevelEditUI } from '../../Level/edit/level.edit';
import { Unit } from '../../Unit/unit';
import { UnitEditUI } from '../../Unit/edit/unit.edit';
import { PositionCategory } from '../../../Base.HR/PositionCategory/positionCategory';
import { PositionCategoryEditUI } from '../../../Base.HR/PositionCategory/edit/positionCategory.edit';



@Component({
  selector: 'hr-position-edit',
  templateUrl: './position.edit.html',
  styleUrls: ['./position.edit.css']
})
export class PositionEditUI extends EditModal<Position> implements IEditModal<Position>  {
  
  constructor(private positionService: PositionService) {
    super(positionService); 
    this.currentInstance = new Position();
  }

  //#region Foreign Entities
	
	//#region -- Parent --

  parentComponent : ForeignComponent<Position> = new ForeignComponent<Position>(this.positionService);

  @Input()
  public set Parent(value: Position) {
    this.currentInstance.parent = this.parentComponent.instance = value;
  }  


  //#endregion -- Parent --
	//#region -- Level --

  levelComponent : ForeignComponent<Level> = new ForeignComponent<Level>(this.positionService.LevelService);

  @Input()
  public set Level(value: Level) {
    this.currentInstance.level = this.levelComponent.instance = value;
  }  


  //#endregion -- Level --
	//#region -- Unit --

  unitComponent : ForeignComponent<Unit> = new ForeignComponent<Unit>(this.positionService.UnitService);

  @Input()
  public set Unit(value: Unit) {
    this.currentInstance.unit = this.unitComponent.instance = value;
  }  


  //#endregion -- Unit --
	//#region -- PositionCategory --

  positionCategoryComponent : ForeignComponent<PositionCategory> = new ForeignComponent<PositionCategory>(this.positionService.PositionCategoryService);

  @Input()
  public set PositionCategory(value: PositionCategory) {
    this.currentInstance.positionCategory = this.positionCategoryComponent.instance = value;
  }  


  //#endregion -- PositionCategory --
	//#endregion

  @ViewChild('positionEditUI')
  private positionEditUI: NgForm;

  Init(position: Position = new Position()) {
    if (position.isNew)
      this.positionEditUI.reset();
    this.InitPosition(position);
    this.loadLists();
  }

  private loadLists() {
    
    this.levelComponent.LoadList();
		this.positionCategoryComponent.LoadList();
  }
  
  InitPosition(position: Position) {
    if (!position.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.levelComponent.instance = position.level;
			this.unitComponent.instance = position.unit;
			this.positionCategoryComponent.instance = position.positionCategory;
    } else {
      position.level = this.levelComponent.instance;
			position.unit = this.unitComponent.instance;
			position.positionCategory = this.positionCategoryComponent.instance;
    }
    this.currentInstance = position;
  }

  ResetForm() {
    this.Parent = new Position();
		this.Level = new Level();
		this.Unit = new Unit();
		this.PositionCategory = new PositionCategory();
  }
}
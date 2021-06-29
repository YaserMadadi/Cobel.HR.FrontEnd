import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Position } from '../position';
import { PositionService } from '../position.service';

import { PositionAssignment } from '../../PositionAssignment/positionAssignment';
import { PositionAssignmentMasterUI } from '../../PositionAssignment/master/positionAssignment.master';
import { PositionAssignmentEditUI } from '../../PositionAssignment/edit/positionAssignment.edit';
import { PositionAssignmentDeleteUI } from '../../PositionAssignment/delete/positionAssignment.delete';



@Component({
  selector: 'position-positionAssignment-detail',
  templateUrl: './position-positionAssignment.detail.html',
  styleUrls: ['./position-positionAssignment.detail.css'],
  providers: [PositionService]
}) 

@Injectable()
export class Position_PositionAssignment_DetailUI extends DetailView<Position> {

  constructor(private positionService: PositionService) {
    super(positionService);
  }

  public PositionAssignmentList : PositionAssignment[] = [];
  
  public currentPositionAssignment : PositionAssignment = new PositionAssignment();

  private position: Position = new Position();

  @Input()
  public set Position(value: Position) {
    this.position = value;
    this.onReload();
  }

  public get Position(): Position { return this.position }

  public onReload(){
    if (Position.NotConfirm(this.position))
      return;
    this.positionService
      .ServiceCollection
      .CollectionOfPositionAssignment(this.position)
      .then(positionAssignmentList => {
        this.PositionAssignmentList = positionAssignmentList;
        this.currentPositionAssignment = new PositionAssignment();
      });
  }

  public onSelect(i: number) {
    this.currentPositionAssignment = this.PositionAssignmentList[i];
    if (PositionAssignment.NotConfirm(this.currentPositionAssignment))
      this.currentPositionAssignment = new PositionAssignment();
  }

  public onDblClicked(masterUI: PositionAssignmentMasterUI) {
    if (PositionAssignment.NotConfirm(this.currentPositionAssignment))
      return;
    masterUI.ShowDialog(this.currentPositionAssignment);
  }

  public onAdd(editUI: PositionAssignmentEditUI) {
    editUI.Position = this.position;
    editUI.ShowDialog(new PositionAssignment());
  }

  public onEdit(editUI: PositionAssignmentEditUI) {
    if (PositionAssignment.NotConfirm(this.currentPositionAssignment))
      return;
    editUI.ShowDialog(this.currentPositionAssignment);
  }

  public onDelete(deleteUI: PositionAssignmentDeleteUI) {
    if (PositionAssignment.NotConfirm(this.currentPositionAssignment))
      return;
    deleteUI.ShowDialog(this.currentPositionAssignment);
  }

  public onEditModal_Closed(positionAssignment: PositionAssignment) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
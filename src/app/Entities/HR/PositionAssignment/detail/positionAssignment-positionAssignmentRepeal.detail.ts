import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { PositionAssignment } from '../positionAssignment';
import { PositionAssignmentService } from '../positionAssignment.service';

import { PositionAssignmentRepeal } from '../../PositionAssignmentRepeal/positionAssignmentRepeal';
import { PositionAssignmentRepealMasterUI } from '../../PositionAssignmentRepeal/master/positionAssignmentRepeal.master';
import { PositionAssignmentRepealEditUI } from '../../PositionAssignmentRepeal/edit/positionAssignmentRepeal.edit';
import { PositionAssignmentRepealDeleteUI } from '../../PositionAssignmentRepeal/delete/positionAssignmentRepeal.delete';



@Component({
  selector: 'positionAssignment-positionAssignmentRepeal-detail',
  templateUrl: './positionAssignment-positionAssignmentRepeal.detail.html',
  styleUrls: ['./positionAssignment-positionAssignmentRepeal.detail.css']
})
export class PositionAssignment_PositionAssignmentRepeal_DetailUI extends DetailView<PositionAssignment> {

  constructor(private positionAssignmentService: PositionAssignmentService) {
    super(positionAssignmentService);
  }

  public PositionAssignmentRepealList : PositionAssignmentRepeal[] = [];
  
  public currentPositionAssignmentRepeal : PositionAssignmentRepeal = new PositionAssignmentRepeal();

  private positionAssignment: PositionAssignment = new PositionAssignment();

  @Input()
  public set PositionAssignment(value: PositionAssignment) {
    this.positionAssignment = value;
    this.onReload();
  }

  public get PositionAssignment(): PositionAssignment { return this.positionAssignment }

  public onReload(){
    if (PositionAssignment.NotConfirm(this.positionAssignment))
      return;
    this.positionAssignmentService
      .ServiceCollection
      .CollectionOfPositionAssignmentRepeal(this.positionAssignment)
      .then(positionAssignmentRepealList => {
        this.PositionAssignmentRepealList = positionAssignmentRepealList;
        this.currentPositionAssignmentRepeal = new PositionAssignmentRepeal();
      });
  }

  public onSelect(i: number) {
    this.currentPositionAssignmentRepeal = this.PositionAssignmentRepealList[i];
    if (PositionAssignmentRepeal.NotConfirm(this.currentPositionAssignmentRepeal))
      this.currentPositionAssignmentRepeal = new PositionAssignmentRepeal();
  }

  public onDblClicked(masterUI: PositionAssignmentRepealMasterUI) {
    if (PositionAssignmentRepeal.NotConfirm(this.currentPositionAssignmentRepeal))
      return;
    masterUI.ShowDialog(this.currentPositionAssignmentRepeal);
  }

  public onAdd(editUI: PositionAssignmentRepealEditUI) {
    editUI.PositionAssignment = this.positionAssignment;
    editUI.ShowDialog(new PositionAssignmentRepeal());
  }

  public onEdit(editUI: PositionAssignmentRepealEditUI) {
    if (PositionAssignmentRepeal.NotConfirm(this.currentPositionAssignmentRepeal))
      return;
    editUI.ShowDialog(this.currentPositionAssignmentRepeal);
  }

  public onDelete(deleteUI: PositionAssignmentRepealDeleteUI) {
    if (PositionAssignmentRepeal.NotConfirm(this.currentPositionAssignmentRepeal))
      return;
    deleteUI.ShowDialog(this.currentPositionAssignmentRepeal);
  }

  public onEditModal_Closed(positionAssignmentRepeal: PositionAssignmentRepeal) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
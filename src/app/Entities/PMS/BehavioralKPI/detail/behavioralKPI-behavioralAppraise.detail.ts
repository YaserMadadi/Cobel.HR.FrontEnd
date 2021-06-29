import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { BehavioralKPI } from '../behavioralKPI';
import { BehavioralKPIService } from '../behavioralKPI.service';

import { BehavioralAppraise } from '../../BehavioralAppraise/behavioralAppraise';
import { BehavioralAppraiseMasterUI } from '../../BehavioralAppraise/master/behavioralAppraise.master';
import { BehavioralAppraiseEditUI } from '../../BehavioralAppraise/edit/behavioralAppraise.edit';
import { BehavioralAppraiseDeleteUI } from '../../BehavioralAppraise/delete/behavioralAppraise.delete';



@Component({
  selector: 'behavioralKPI-behavioralAppraise-detail',
  templateUrl: './behavioralKPI-behavioralAppraise.detail.html',
  styleUrls: ['./behavioralKPI-behavioralAppraise.detail.css'],
  providers: [BehavioralKPIService]
}) 

@Injectable()
export class BehavioralKPI_BehavioralAppraise_DetailUI extends DetailView<BehavioralKPI> {

  constructor(private behavioralKPIService: BehavioralKPIService) {
    super(behavioralKPIService);
  }

  public BehavioralAppraiseList : BehavioralAppraise[] = [];
  
  public currentBehavioralAppraise : BehavioralAppraise = new BehavioralAppraise();

  private behavioralKPI: BehavioralKPI = new BehavioralKPI();

  @Input()
  public set BehavioralKPI(value: BehavioralKPI) {
    this.behavioralKPI = value;
    this.onReload();
  }

  public get BehavioralKPI(): BehavioralKPI { return this.behavioralKPI }

  public onReload(){
    console.log('hi',this.behavioralKPI);
    if (BehavioralKPI.NotConfirm(this.behavioralKPI))
      return;
    this.behavioralKPIService
      .ServiceCollection
      .CollectionOfBehavioralAppraise(this.behavioralKPI)
      .then(behavioralAppraiseList => {
        this.BehavioralAppraiseList = behavioralAppraiseList;
        this.currentBehavioralAppraise = new BehavioralAppraise();
      });
  }

  public onSelect(i: number) {
    this.currentBehavioralAppraise = this.BehavioralAppraiseList[i];
    if (BehavioralAppraise.NotConfirm(this.currentBehavioralAppraise))
      this.currentBehavioralAppraise = new BehavioralAppraise();
  }

  public onDblClicked(masterUI: BehavioralAppraiseMasterUI) {
    if (BehavioralAppraise.NotConfirm(this.currentBehavioralAppraise))
      return;
    masterUI.ShowDialog(this.currentBehavioralAppraise);
  }

  public onAdd(editUI: BehavioralAppraiseEditUI) {
    editUI.BehavioralKPI = this.behavioralKPI;
    editUI.ShowDialog(new BehavioralAppraise());
  }

  public onEdit(editUI: BehavioralAppraiseEditUI) {
    if (BehavioralAppraise.NotConfirm(this.currentBehavioralAppraise))
      return;
    editUI.ShowDialog(this.currentBehavioralAppraise);
  }

  public onDelete(deleteUI: BehavioralAppraiseDeleteUI) {
    if (BehavioralAppraise.NotConfirm(this.currentBehavioralAppraise))
      return;
    deleteUI.ShowDialog(this.currentBehavioralAppraise);
  }

  public onEditModal_Closed(behavioralAppraise: BehavioralAppraise) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
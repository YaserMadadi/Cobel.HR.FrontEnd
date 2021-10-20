import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Quarter } from '../quarter';
import { QuarterService } from '../quarter.service';

import { YearQuarter } from '../../YearQuarter/yearQuarter';
import { YearQuarterMasterUI } from '../../YearQuarter/master/yearQuarter.master';
import { YearQuarterEditUI } from '../../YearQuarter/edit/yearQuarter.edit';
import { YearQuarterDeleteUI } from '../../YearQuarter/delete/yearQuarter.delete';



@Component({
  selector: 'quarter-yearQuarter-detail',
  templateUrl: './quarter-yearQuarter.detail.html',
  styleUrls: ['./quarter-yearQuarter.detail.css']
})
export class Quarter_YearQuarter_DetailUI extends DetailView<Quarter> {

  constructor(private quarterService: QuarterService) {
    super(quarterService);
  }

  public YearQuarterList : YearQuarter[] = [];
  
  public currentYearQuarter : YearQuarter = new YearQuarter();

  private quarter: Quarter = new Quarter();

  @Input()
  public set Quarter(value: Quarter) {
    this.quarter = value;
    this.onReload();
  }

  public get Quarter(): Quarter { return this.quarter }

  public onReload(){
    if (Quarter.NotConfirm(this.quarter))
      return;
    this.quarterService
      .ServiceCollection
      .CollectionOfYearQuarter(this.quarter)
      .then(yearQuarterList => {
        this.YearQuarterList = yearQuarterList;
        this.currentYearQuarter = new YearQuarter();
      });
  }

  public onSelect(i: number) {
    this.currentYearQuarter = this.YearQuarterList[i];
    if (YearQuarter.NotConfirm(this.currentYearQuarter))
      this.currentYearQuarter = new YearQuarter();
  }

  public onDblClicked(masterUI: YearQuarterMasterUI) {
    if (YearQuarter.NotConfirm(this.currentYearQuarter))
      return;
    masterUI.ShowDialog(this.currentYearQuarter);
  }

  public onAdd(editUI: YearQuarterEditUI) {
    editUI.Quarter = this.quarter;
    editUI.ShowDialog(new YearQuarter());
  }

  public onEdit(editUI: YearQuarterEditUI) {
    if (YearQuarter.NotConfirm(this.currentYearQuarter))
      return;
    editUI.ShowDialog(this.currentYearQuarter);
  }

  public onDelete(deleteUI: YearQuarterDeleteUI) {
    if (YearQuarter.NotConfirm(this.currentYearQuarter))
      return;
    deleteUI.ShowDialog(this.currentYearQuarter);
  }

  public onEditModal_Closed(yearQuarter: YearQuarter) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
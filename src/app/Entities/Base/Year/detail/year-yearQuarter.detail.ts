import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Year } from '../year';
import { YearService } from '../year.service';

import { YearQuarter } from '../../YearQuarter/yearQuarter';
import { YearQuarterMasterUI } from '../../YearQuarter/master/yearQuarter.master';
import { YearQuarterEditUI } from '../../YearQuarter/edit/yearQuarter.edit';
import { YearQuarterDeleteUI } from '../../YearQuarter/delete/yearQuarter.delete';



@Component({
  selector: 'year-yearQuarter-detail',
  templateUrl: './year-yearQuarter.detail.html',
  styleUrls: ['./year-yearQuarter.detail.css']
})
export class Year_YearQuarter_DetailUI extends DetailView<Year> {

  constructor(private yearService: YearService) {
    super(yearService);
  }

  public YearQuarterList : YearQuarter[] = [];
  
  public currentYearQuarter : YearQuarter = new YearQuarter();

  private year: Year = new Year();

  @Input()
  public set Year(value: Year) {
    this.year = value;
    this.onReload();
  }

  public get Year(): Year { return this.year }

  public onReload(){
    if (Year.NotConfirm(this.year))
      return;
    this.yearService
      .ServiceCollection
      .CollectionOfYearQuarter(this.year)
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
    editUI.Year = this.year;
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
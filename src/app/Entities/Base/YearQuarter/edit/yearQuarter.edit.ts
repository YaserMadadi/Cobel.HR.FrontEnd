import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { YearQuarter } from '../yearQuarter';
import { YearQuarterService } from '../yearQuarter.service';
import { Year } from '../../Year/year';
import { YearEditUI } from '../../Year/edit/year.edit';
import { Quarter } from '../../Quarter/quarter';
import { QuarterEditUI } from '../../Quarter/edit/quarter.edit';



@Component({
  selector: 'base-yearQuarter-edit',
  templateUrl: './yearQuarter.edit.html',
  styleUrls: ['./yearQuarter.edit.css']
})
export class YearQuarterEditUI extends EditModal<YearQuarter> implements IEditModal<YearQuarter>  {
  
  constructor(private yearQuarterService: YearQuarterService) {
    super(yearQuarterService); 
    this.currentInstance = new YearQuarter();
  }

  //#region Foreign Entities
	
	//#region -- Year --

  yearComponent : ForeignComponent<Year> = new ForeignComponent<Year>(this.yearQuarterService.YearService);

  @Input()
  public set Year(value: Year) {
    this.currentInstance.year = this.yearComponent.instance = value;
  }  


  //#endregion -- Year --
	//#region -- Quarter --

  quarterComponent : ForeignComponent<Quarter> = new ForeignComponent<Quarter>(this.yearQuarterService.QuarterService);

  @Input()
  public set Quarter(value: Quarter) {
    this.currentInstance.quarter = this.quarterComponent.instance = value;
  }  


  //#endregion -- Quarter --
	//#endregion

  @ViewChild('yearQuarterEditUI')
  private yearQuarterEditUI: NgForm;

  Init(yearQuarter: YearQuarter = new YearQuarter()) {
    if (yearQuarter.isNew)
      this.yearQuarterEditUI.reset();
    this.InitYearQuarter(yearQuarter);
    this.loadLists();
  }

  private loadLists() {
    
    this.quarterComponent.LoadList();
  }
  
  InitYearQuarter(yearQuarter: YearQuarter){
    this.currentInstance = this.service.CreateInstance();
    if (!yearQuarter.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.yearComponent.instance = yearQuarter.year;
			this.quarterComponent.instance = yearQuarter.quarter;
    } else {
      yearQuarter.year = this.yearComponent.instance;
			yearQuarter.quarter = this.quarterComponent.instance;
    }
    this.currentInstance = yearQuarter;
  }

  ResetForm() {
    this.Year = new Year();
		this.Quarter = new Quarter();
  }
}
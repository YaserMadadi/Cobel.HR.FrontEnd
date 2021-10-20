import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Year } from '../year';
import { YearService } from '../year.service';



@Component({
  selector: 'base-year-edit',
  templateUrl: './year.edit.html',
  styleUrls: ['./year.edit.css']
})
export class YearEditUI extends EditModal<Year> implements IEditModal<Year>  {
  
  constructor(private yearService: YearService) {
    super(yearService); 
    this.currentInstance = new Year();
  }

  

  @ViewChild('yearEditUI')
  private yearEditUI: NgForm;

  Init(year: Year = new Year()) {
    if (year.isNew)
      this.yearEditUI.reset();
    this.InitYear(year);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitYear(year: Year){
    this.currentInstance = this.service.CreateInstance();
    if (!year.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = year;
  }

  ResetForm() {
    
  }
}
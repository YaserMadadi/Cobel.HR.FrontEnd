import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Province } from '../province';
import { ProvinceService } from '../province.service';



@Component({
  selector: 'base-province-edit',
  templateUrl: './province.edit.html',
  styleUrls: ['./province.edit.css']
})
export class ProvinceEditUI extends EditModal<Province> implements IEditModal<Province>  {
  
  constructor(private provinceService: ProvinceService) {
    super(provinceService); 
    this.currentInstance = new Province();
  }

  

  @ViewChild('provinceEditUI')
  private provinceEditUI: NgForm;

  Init(province: Province = new Province()) {
    if (province.isNew)
      this.provinceEditUI.reset();
    this.InitProvince(province);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitProvince(province: Province) {
    if (!province.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = province;
  }

  ResetForm() {
    
  }
}
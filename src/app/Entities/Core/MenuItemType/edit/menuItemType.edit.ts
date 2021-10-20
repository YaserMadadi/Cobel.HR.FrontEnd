

import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { MenuItemType } from '../menuItemType';
import { MenuItemTypeService } from '../menuItemType.service';



@Component({
  selector: 'core-menuItemType-edit',
  templateUrl: './menuItemType.edit.html',
  styleUrls: ['./menuItemType.edit.css']
})
export class MenuItemTypeEditUI extends EditModal<MenuItemType> implements IEditModal<MenuItemType>  {
  
  constructor(private menuItemTypeService: MenuItemTypeService) {
    super(menuItemTypeService); 
    this.currentInstance = new MenuItemType();
  }

  

  @ViewChild('menuItemTypeEditUI')
  private menuItemTypeEditUI: NgForm;

  Init(menuItemType: MenuItemType = new MenuItemType()) {
    if (menuItemType.isNew)
      this.menuItemTypeEditUI.reset();
    this.InitMenuItemType(menuItemType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitMenuItemType(menuItemType: MenuItemType) {
    this.currentInstance = this.service.CreateInstance();
    if (!menuItemType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = menuItemType;
  }

  async onSave(menuItemType: MenuItemType, editUI: NgForm, isContinue: boolean = false) {
   
    //// Pre Save Action Comes here...
   
    super.onSave(menuItemType, editUI, isContinue);
  }

  ResetForm() {
    
  }
}

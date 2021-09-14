

import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { MenuItem } from '../menuItem';
import { MenuItemService } from '../menuItem.service';
import { Menu } from '../../Menu/menu';
import { MenuEditUI } from '../../Menu/edit/menu.edit';
import { MenuItemType } from '../../MenuItemType/menuItemType';
import { MenuItemTypeEditUI } from '../../MenuItemType/edit/menuItemType.edit';



@Component({
  selector: 'core-menuItem-edit',
  templateUrl: './menuItem.edit.html',
  styleUrls: ['./menuItem.edit.css']
})
export class MenuItemEditUI extends EditModal<MenuItem> implements IEditModal<MenuItem>  {
  
  constructor(private menuItemService: MenuItemService) {
    super(menuItemService); 
    this.currentInstance = new MenuItem();
  }

  //#region Foreign Entities
	
	//#region -- Menu --

  menuComponent : ForeignComponent<Menu> = new ForeignComponent<Menu>(this.menuItemService.MenuService);

  @Input()
  public set Menu(value: Menu) {
    this.currentInstance.menu = this.menuComponent.instance = value;
  }  


  //#endregion -- Menu --
	//#region -- MenuItemType --

  menuItemTypeComponent : ForeignComponent<MenuItemType> = new ForeignComponent<MenuItemType>(this.menuItemService.MenuItemTypeService);

  @Input()
  public set MenuItemType(value: MenuItemType) {
    this.currentInstance.menuItemType = this.menuItemTypeComponent.instance = value;
  }  


  //#endregion -- MenuItemType --
	//#endregion

  @ViewChild('menuItemEditUI')
  private menuItemEditUI: NgForm;

  Init(menuItem: MenuItem = new MenuItem()) {
    if (menuItem.isNew)
      this.menuItemEditUI.reset();
    this.InitMenuItem(menuItem);
    this.loadLists();
  }

  private loadLists() {
    
    this.menuItemTypeComponent.LoadList();
  }
  
  InitMenuItem(menuItem: MenuItem) {
    this.currentInstance = this.service.CreateInstance();
    if (!menuItem.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.menuComponent.instance = menuItem.menu;
			this.menuItemTypeComponent.instance = menuItem.menuItemType;
    } else {
      menuItem.menu = this.menuComponent.instance;
			menuItem.menuItemType = this.menuItemTypeComponent.instance;
    }
    this.currentInstance = menuItem;
  }

  async onSave(menuItem: MenuItem, editUI: NgForm, isContinue: boolean = false) {
   
    //// Pre Save Action Comes here...
   
    super.onSave(menuItem, editUI, isContinue);
  }

  ResetForm() {
    this.Menu = new Menu();
		this.MenuItemType = new MenuItemType();
  }
}



import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { SubSystem } from '../../SubSystem/subSystem';
import { SubSystemEditUI } from '../../SubSystem/edit/subSystem.edit';



@Component({
  selector: 'core-menu-edit',
  templateUrl: './menu.edit.html',
  styleUrls: ['./menu.edit.css']
})
export class MenuEditUI extends EditModal<Menu> implements IEditModal<Menu>  {
  
  constructor(private menuService: MenuService) {
    super(menuService); 
    this.currentInstance = new Menu();
  }

  //#region Foreign Entities
	
	//#region -- SubSystem --

  subSystemComponent : ForeignComponent<SubSystem> = new ForeignComponent<SubSystem>(this.menuService.SubSystemService);

  @Input()
  public set SubSystem(value: SubSystem) {
    this.currentInstance.subSystem = this.subSystemComponent.instance = value;
  }  


  //#endregion -- SubSystem --
	//#endregion

  @ViewChild('menuEditUI')
  private menuEditUI: NgForm;

  Init(menu: Menu = new Menu()) {
    if (menu.isNew)
      this.menuEditUI.reset();
    this.InitMenu(menu);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitMenu(menu: Menu) {
    this.currentInstance = this.service.CreateInstance();
    if (!menu.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.subSystemComponent.instance = menu.subSystem;
    } else {
      menu.subSystem = this.subSystemComponent.instance;
    }
    this.currentInstance = menu;
  }

  async onSave(menu: Menu, editUI: NgForm, isContinue: boolean = false) {
   
    //// Pre Save Action Comes here...
   
    super.onSave(menu, editUI, isContinue);
  }

  ResetForm() {
    this.SubSystem = new SubSystem();
  }
}

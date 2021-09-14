

import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Badge } from '../badge';
import { BadgeService } from '../badge.service';
import { MenuItem } from '../../MenuItem/menuItem';
import { MenuItemEditUI } from '../../MenuItem/edit/menuItem.edit';
import { BadgeType } from '../../BadgeType/badgeType';
import { BadgeTypeEditUI } from '../../BadgeType/edit/badgeType.edit';



@Component({
  selector: 'core-badge-edit',
  templateUrl: './badge.edit.html',
  styleUrls: ['./badge.edit.css']
})
export class BadgeEditUI extends EditModal<Badge> implements IEditModal<Badge>  {
  
  constructor(private badgeService: BadgeService) {
    super(badgeService); 
    this.currentInstance = new Badge();
  }

  //#region Foreign Entities
	
	//#region -- MenuItem --

  menuItemComponent : ForeignComponent<MenuItem> = new ForeignComponent<MenuItem>(this.badgeService.MenuItemService);

  @Input()
  public set MenuItem(value: MenuItem) {
    this.currentInstance.menuItem = this.menuItemComponent.instance = value;
  }  


  //#endregion -- MenuItem --
	//#region -- BadgeType --

  badgeTypeComponent : ForeignComponent<BadgeType> = new ForeignComponent<BadgeType>(this.badgeService.BadgeTypeService);

  @Input()
  public set BadgeType(value: BadgeType) {
    this.currentInstance.badgeType = this.badgeTypeComponent.instance = value;
  }  


  //#endregion -- BadgeType --
	//#endregion

  @ViewChild('badgeEditUI')
  private badgeEditUI: NgForm;

  Init(badge: Badge = new Badge()) {
    if (badge.isNew)
      this.badgeEditUI.reset();
    this.InitBadge(badge);
    this.loadLists();
  }

  private loadLists() {
    
    this.badgeTypeComponent.LoadList();
  }
  
  InitBadge(badge: Badge) {
    this.currentInstance = this.service.CreateInstance();
    if (!badge.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.menuItemComponent.instance = badge.menuItem;
			this.badgeTypeComponent.instance = badge.badgeType;
    } else {
      badge.menuItem = this.menuItemComponent.instance;
			badge.badgeType = this.badgeTypeComponent.instance;
    }
    this.currentInstance = badge;
  }

  async onSave(badge: Badge, editUI: NgForm, isContinue: boolean = false) {
   
    //// Pre Save Action Comes here...
   
    super.onSave(badge, editUI, isContinue);
  }

  ResetForm() {
    this.MenuItem = new MenuItem();
		this.BadgeType = new BadgeType();
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { MenuItemTypeService } from './menuItemType.service';
import { MenuItemTypeServiceCollection } from './menuItemType.service.collection';
import { MenuItemTypeMasterUI } from './master/menuItemType.master';
import { MenuItemTypeEditUI } from './edit/menuItemType.edit';
import { MenuItemTypeDeleteUI } from './delete/menuItemType.delete';
import { MenuItemTypeSeekUI } from './seek/menuItemType.seek';


@NgModule({
    declarations: [
        MenuItemTypeEditUI,
		MenuItemTypeDeleteUI,
		MenuItemTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        MenuItemTypeEditUI,
		MenuItemTypeDeleteUI,
		MenuItemTypeSeekUI
    ],
    providers: [
       //MenuItemTypeService,
       // MenuItemTypeServiceCollection,
    ]
})

export class MenuItemType_ModuleFunc { }

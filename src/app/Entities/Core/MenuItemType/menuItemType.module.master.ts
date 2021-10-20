import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MenuItemTypeService } from './menuItemType.service';
import { MenuItemTypeServiceCollection } from './menuItemType.service.collection';
import { MenuItemTypeMasterUI } from './master/menuItemType.master';
import { MenuItemType_ModuleDetail } from './menuItemType.module.detail';

@NgModule({
    declarations: [
        MenuItemTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        MenuItemType_ModuleDetail
    ],
    exports: [
        MenuItemTypeMasterUI
    ],
    providers: [
        //MenuItemTypeService,
       // MenuItemTypeServiceCollection   
    ]
})

export class MenuItemType_ModuleMaster { }
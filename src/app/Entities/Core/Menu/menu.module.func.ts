import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { MenuService } from './menu.service';
import { MenuServiceCollection } from './menu.service.collection';
import { MenuMasterUI } from './master/menu.master';
import { MenuEditUI } from './edit/menu.edit';
import { MenuDeleteUI } from './delete/menu.delete';
import { MenuSeekUI } from './seek/menu.seek';

import { SubSystem_ModuleFunc } from '../SubSystem/subSystem.module.func';

@NgModule({
    declarations: [
        MenuEditUI,
		MenuDeleteUI,
		MenuSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        SubSystem_ModuleFunc
    ],
    exports: [
        MenuEditUI,
		MenuDeleteUI,
		MenuSeekUI
    ],
    providers: [
       //MenuService,
       // MenuServiceCollection,
    ]
})

export class Menu_ModuleFunc { }

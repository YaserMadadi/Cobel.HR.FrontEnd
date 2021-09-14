import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MenuService } from './menu.service';
import { MenuServiceCollection } from './menu.service.collection';
import { MenuMasterUI } from './master/menu.master';
import { Menu_ModuleDetail } from './menu.module.detail';

@NgModule({
    declarations: [
        MenuMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Menu_ModuleDetail
    ],
    exports: [
        MenuMasterUI
    ],
    providers: [
        //MenuService,
       // MenuServiceCollection   
    ]
})

export class Menu_ModuleMaster { }
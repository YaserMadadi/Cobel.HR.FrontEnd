import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PropertyOptionService } from './propertyOption.service';
import { PropertyOptionServiceCollection } from './propertyOption.service.collection';
import { PropertyOptionMasterUI } from './master/propertyOption.master';
import { PropertyOption_ModuleDetail } from './propertyOption.module.detail';

@NgModule({
    declarations: [
        PropertyOptionMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        PropertyOption_ModuleDetail
    ],
    exports: [
        PropertyOptionMasterUI
    ],
    providers: [
        //PropertyOptionService,
       // PropertyOptionServiceCollection   
    ]
})

export class PropertyOption_ModuleMaster { }
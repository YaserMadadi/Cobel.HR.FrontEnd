import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { PropertyOptionService } from './propertyOption.service';
import { PropertyOptionServiceCollection } from './propertyOption.service.collection';
import { PropertyOptionMasterUI } from './master/propertyOption.master';
import { PropertyOptionEditUI } from './edit/propertyOption.edit';
import { PropertyOptionDeleteUI } from './delete/propertyOption.delete';
import { PropertyOptionSeekUI } from './seek/propertyOption.seek';

import { Property_ModuleFunc } from '../Property/property.module.func';

@NgModule({
    declarations: [
        PropertyOptionEditUI,
		PropertyOptionDeleteUI,
		PropertyOptionSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Property_ModuleFunc
    ],
    exports: [
        PropertyOptionEditUI,
		PropertyOptionDeleteUI,
		PropertyOptionSeekUI
    ],
    providers: [
       //PropertyOptionService,
       // PropertyOptionServiceCollection,
    ]
})

export class PropertyOption_ModuleFunc { }
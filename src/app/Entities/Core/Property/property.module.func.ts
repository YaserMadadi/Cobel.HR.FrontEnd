import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { PropertyService } from './property.service';
import { PropertyServiceCollection } from './property.service.collection';
import { PropertyMasterUI } from './master/property.master';
import { PropertyEditUI } from './edit/property.edit';
import { PropertyDeleteUI } from './delete/property.delete';
import { PropertySeekUI } from './seek/property.seek';

import { Entity_ModuleFunc } from '../Entity/entity.module.func';

@NgModule({
    declarations: [
        PropertyEditUI,
		PropertyDeleteUI,
		PropertySeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Entity_ModuleFunc
    ],
    exports: [
        PropertyEditUI,
		PropertyDeleteUI,
		PropertySeekUI
    ]
})

export class Property_ModuleFunc { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PropertyService } from './property.service';
import { PropertyServiceCollection } from './property.service.collection';
import { PropertyMasterUI } from './master/property.master';
import { Property_ModuleDetail } from './property.module.detail';

@NgModule({
    declarations: [
        PropertyMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Property_ModuleDetail
    ],
    exports: [
        PropertyMasterUI
    ]
})

export class Property_ModuleMaster { }
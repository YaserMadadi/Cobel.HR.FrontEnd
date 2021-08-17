import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { RelativeTypeService } from './relativeType.service';
import { RelativeTypeServiceCollection } from './relativeType.service.collection';
import { RelativeTypeMasterUI } from './master/relativeType.master';
import { RelativeType_ModuleDetail } from './relativeType.module.detail';

@NgModule({
    declarations: [
        RelativeTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        RelativeType_ModuleDetail
    ],
    exports: [
        RelativeTypeMasterUI
    ],
    providers: [
        //RelativeTypeService,
       // RelativeTypeServiceCollection   
    ]
})

export class RelativeType_ModuleMaster { }
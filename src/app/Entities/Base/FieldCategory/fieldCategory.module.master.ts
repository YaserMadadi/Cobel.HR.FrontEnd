import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FieldCategoryService } from './fieldCategory.service';
import { FieldCategoryServiceCollection } from './fieldCategory.service.collection';
import { FieldCategoryMasterUI } from './master/fieldCategory.master';
import { FieldCategory_ModuleDetail } from './fieldCategory.module.detail';

@NgModule({
    declarations: [
        FieldCategoryMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        FieldCategory_ModuleDetail
    ],
    exports: [
        FieldCategoryMasterUI
    ]
})

export class FieldCategory_ModuleMaster { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { UniversityFieldCategoryService } from './universityFieldCategory.service';
import { UniversityFieldCategoryServiceCollection } from './universityFieldCategory.service.collection';
import { UniversityFieldCategoryMasterUI } from './master/universityFieldCategory.master';
import { UniversityFieldCategory_ModuleDetail } from './universityFieldCategory.module.detail';

@NgModule({
    declarations: [
        UniversityFieldCategoryMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        UniversityFieldCategory_ModuleDetail
    ],
    exports: [
        UniversityFieldCategoryMasterUI
    ]
})

export class UniversityFieldCategory_ModuleMaster { }
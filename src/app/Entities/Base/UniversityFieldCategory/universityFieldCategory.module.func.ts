import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { UniversityFieldCategoryService } from './universityFieldCategory.service';
import { UniversityFieldCategoryServiceCollection } from './universityFieldCategory.service.collection';
import { UniversityFieldCategoryMasterUI } from './master/universityFieldCategory.master';
import { UniversityFieldCategoryEditUI } from './edit/universityFieldCategory.edit';
import { UniversityFieldCategoryDeleteUI } from './delete/universityFieldCategory.delete';
import { UniversityFieldCategorySeekUI } from './seek/universityFieldCategory.seek';


@NgModule({
    declarations: [
        UniversityFieldCategoryEditUI,
		UniversityFieldCategoryDeleteUI,
		UniversityFieldCategorySeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        UniversityFieldCategoryEditUI,
		UniversityFieldCategoryDeleteUI,
		UniversityFieldCategorySeekUI
    ]
})

export class UniversityFieldCategory_ModuleFunc { }
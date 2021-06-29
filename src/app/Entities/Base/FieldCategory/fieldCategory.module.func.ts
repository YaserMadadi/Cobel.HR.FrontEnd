import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { FieldCategoryService } from './fieldCategory.service';
import { FieldCategoryServiceCollection } from './fieldCategory.service.collection';
import { FieldCategoryMasterUI } from './master/fieldCategory.master';
import { FieldCategoryEditUI } from './edit/fieldCategory.edit';
import { FieldCategoryDeleteUI } from './delete/fieldCategory.delete';
import { FieldCategorySeekUI } from './seek/fieldCategory.seek';


@NgModule({
    declarations: [
        FieldCategoryEditUI,
		FieldCategoryDeleteUI,
		FieldCategorySeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        FieldCategoryEditUI,
		FieldCategoryDeleteUI,
		FieldCategorySeekUI
    ],
    providers: [
       //FieldCategoryService,
       // FieldCategoryServiceCollection,
    ]
})

export class FieldCategory_ModuleFunc { }
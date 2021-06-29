import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { UniversityService } from './university.service';
import { UniversityServiceCollection } from './university.service.collection';
import { UniversityMasterUI } from './master/university.master';
import { UniversityEditUI } from './edit/university.edit';
import { UniversityDeleteUI } from './delete/university.delete';
import { UniversitySeekUI } from './seek/university.seek';

import { City_ModuleFunc } from '../City/city.module.func';

@NgModule({
    declarations: [
        UniversityEditUI,
		UniversityDeleteUI,
		UniversitySeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        City_ModuleFunc
    ],
    exports: [
        UniversityEditUI,
		UniversityDeleteUI,
		UniversitySeekUI
    ],
    providers: [
       //UniversityService,
       // UniversityServiceCollection,
    ]
})

export class University_ModuleFunc { }
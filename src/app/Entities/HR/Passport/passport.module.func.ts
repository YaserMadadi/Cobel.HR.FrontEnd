import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { PassportService } from './passport.service';
import { PassportServiceCollection } from './passport.service.collection';
import { PassportMasterUI } from './master/passport.master';
import { PassportEditUI } from './edit/passport.edit';
import { PassportDeleteUI } from './delete/passport.delete';
import { PassportSeekUI } from './seek/passport.seek';

import { Person_ModuleFunc } from '../Person/person.module.func';

@NgModule({
    declarations: [
        PassportEditUI,
		PassportDeleteUI,
		PassportSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Person_ModuleFunc
    ],
    exports: [
        PassportEditUI,
		PassportDeleteUI,
		PassportSeekUI
    ],
    providers: [
       //PassportService,
       // PassportServiceCollection,
    ]
})

export class Passport_ModuleFunc { }
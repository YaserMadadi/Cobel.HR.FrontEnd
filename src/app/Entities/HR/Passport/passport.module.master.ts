import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PassportService } from './passport.service';
import { PassportServiceCollection } from './passport.service.collection';
import { PassportMasterUI } from './master/passport.master';
import { Passport_ModuleDetail } from './passport.module.detail';

@NgModule({
    declarations: [
        PassportMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Passport_ModuleDetail
    ],
    exports: [
        PassportMasterUI
    ]
})

export class Passport_ModuleMaster { }
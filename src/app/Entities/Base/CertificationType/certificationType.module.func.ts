import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CertificationTypeService } from './certificationType.service';
import { CertificationTypeServiceCollection } from './certificationType.service.collection';
import { CertificationTypeMasterUI } from './master/certificationType.master';
import { CertificationTypeEditUI } from './edit/certificationType.edit';
import { CertificationTypeDeleteUI } from './delete/certificationType.delete';
import { CertificationTypeSeekUI } from './seek/certificationType.seek';


@NgModule({
    declarations: [
        CertificationTypeEditUI,
		CertificationTypeDeleteUI,
		CertificationTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        CertificationTypeEditUI,
		CertificationTypeDeleteUI,
		CertificationTypeSeekUI
    ]
})

export class CertificationType_ModuleFunc { }
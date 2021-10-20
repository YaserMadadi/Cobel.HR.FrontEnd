import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { PersonCertificateService } from './personCertificate.service';
import { PersonCertificateServiceCollection } from './personCertificate.service.collection';
import { PersonCertificateMasterUI } from './master/personCertificate.master';
import { PersonCertificateEditUI } from './edit/personCertificate.edit';
import { PersonCertificateDeleteUI } from './delete/personCertificate.delete';
import { PersonCertificateSeekUI } from './seek/personCertificate.seek';

import { Person_ModuleFunc } from '../Person/person.module.func';
import { FieldCategory_ModuleFunc } from '../../Base/FieldCategory/fieldCategory.module.func';

@NgModule({
    declarations: [
        PersonCertificateEditUI,
		PersonCertificateDeleteUI,
		PersonCertificateSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Person_ModuleFunc,
		FieldCategory_ModuleFunc
    ],
    exports: [
        PersonCertificateEditUI,
		PersonCertificateDeleteUI,
		PersonCertificateSeekUI
    ]
})

export class PersonCertificate_ModuleFunc { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PersonCertificateService } from './personCertificate.service';
import { PersonCertificateServiceCollection } from './personCertificate.service.collection';
import { PersonCertificateMasterUI } from './master/personCertificate.master';
import { PersonCertificate_ModuleDetail } from './personCertificate.module.detail';

@NgModule({
    declarations: [
        PersonCertificateMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        PersonCertificate_ModuleDetail
    ],
    exports: [
        PersonCertificateMasterUI
    ],
    providers: [
        //PersonCertificateService,
       // PersonCertificateServiceCollection   
    ]
})

export class PersonCertificate_ModuleMaster { }
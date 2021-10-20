import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CertificationTypeService } from './certificationType.service';
import { CertificationTypeServiceCollection } from './certificationType.service.collection';
import { CertificationTypeMasterUI } from './master/certificationType.master';
import { CertificationType_ModuleDetail } from './certificationType.module.detail';

@NgModule({
    declarations: [
        CertificationTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        CertificationType_ModuleDetail
    ],
    exports: [
        CertificationTypeMasterUI
    ]
})

export class CertificationType_ModuleMaster { }
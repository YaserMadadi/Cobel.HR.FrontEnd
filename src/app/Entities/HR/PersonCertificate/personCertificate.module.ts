import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { PersonCertificateService } from './personCertificate.service';
import { PersonCertificateServiceCollection } from './personCertificate.service.collection';

import { PersonCertificateIndexUI } from './index/personCertificate.index';
import { PersonCertificate_ModuleFunc } from './personCertificate.module.func';
import { PersonCertificate_ModuleMaster } from './personCertificate.module.master';



@NgModule({
  declarations: [
    PersonCertificateIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    PersonCertificate_ModuleMaster,
  ],
  exports: [
    PersonCertificateIndexUI,
		PersonCertificate_ModuleMaster,
  ],
  providers: [
    // PersonCertificateService,
    // PersonCertificateServiceCollection
  ]
})
export class PersonCertificateModule {}
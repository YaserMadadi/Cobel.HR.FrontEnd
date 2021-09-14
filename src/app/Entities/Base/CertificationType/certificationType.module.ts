import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CertificationTypeService } from './certificationType.service';
import { CertificationTypeServiceCollection } from './certificationType.service.collection';

import { CertificationTypeIndexUI } from './index/certificationType.index';
import { CertificationType_ModuleFunc } from './certificationType.module.func';
import { CertificationType_ModuleMaster } from './certificationType.module.master';


import { UniversityHistory_ModuleFunc } from '../../HR/UniversityHistory/universityHistory.module.func';
import { UniversityHistory_ModuleMaster } from '../../HR/UniversityHistory/universityHistory.module.master';

@NgModule({
  declarations: [
    CertificationTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    CertificationType_ModuleMaster,
		UniversityHistory_ModuleMaster,
  ],
  exports: [
    CertificationTypeIndexUI,
		CertificationType_ModuleMaster,
  ]
})
export class CertificationTypeModule {}
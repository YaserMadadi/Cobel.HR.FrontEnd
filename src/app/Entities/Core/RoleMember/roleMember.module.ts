import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { RoleMemberService } from './roleMember.service';
import { RoleMemberServiceCollection } from './roleMember.service.collection';

import { RoleMemberIndexUI } from './index/roleMember.index';
import { RoleMember_ModuleFunc } from './roleMember.module.func';
import { RoleMember_ModuleMaster } from './roleMember.module.master';



@NgModule({
  declarations: [
    RoleMemberIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    RoleMember_ModuleMaster,
  ],
  exports: [
    RoleMemberIndexUI,
		RoleMember_ModuleMaster,
  ],
  providers: [
    // RoleMemberService,
    // RoleMemberServiceCollection
  ]
})
export class RoleMemberModule {}
import { NgModule } from '@angular/core';

import { XCommonModule } from '../../xcore/xcommon.module';

import { Base_ModuleFunc } from './Base/base.module.func'; 

import { Base_HR_ModuleFunc } from './Base.HR/base.hr.module.func'; 

import { Base_PMS_ModuleFunc } from './Base.PMS/base.pms.module.func'; 

import { Core_ModuleFunc } from './Core/core.module.func'; 

import { HR_ModuleFunc } from './HR/hr.module.func'; 

import { IDEA_ModuleFunc } from './IDEA/idea.module.func'; 

import { LAD_ModuleFunc } from './LAD/lad.module.func'; 

import { PMS_ModuleFunc } from './PMS/pms.module.func'; 

import { XCode_ModuleFunc } from './XCode/xcode.module.func'; 



@NgModule({
  declarations: [
  ],
  imports: [
    XCommonModule,
    
    // Base
    Base_ModuleFunc,

    // Base.HR
    Base_HR_ModuleFunc,

    // Base.PMS
    Base_PMS_ModuleFunc,

    // Core
    Core_ModuleFunc,

    // HR
    HR_ModuleFunc,

    // IDEA
    IDEA_ModuleFunc,

    // LAD
    LAD_ModuleFunc,

    // PMS
    PMS_ModuleFunc,

    // XCode
    XCode_ModuleFunc,

  ],
  exports: [
    
    // Base
    Base_ModuleFunc,

    // Base.HR
    Base_HR_ModuleFunc,

    // Base.PMS
    Base_PMS_ModuleFunc,

    // Core
    Core_ModuleFunc,

    // HR
    HR_ModuleFunc,

    // IDEA
    IDEA_ModuleFunc,

    // LAD
    LAD_ModuleFunc,

    // PMS
    PMS_ModuleFunc,

    // XCode
    XCode_ModuleFunc,

  ]
})
export class ShareFunctionalModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { VisionService } from './vision.service';
import { VisionServiceCollection } from './vision.service.collection';
import { VisionMasterUI } from './master/vision.master';
import { Vision_ModuleDetail } from './vision.module.detail';

@NgModule({
    declarations: [
        VisionMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Vision_ModuleDetail
    ],
    exports: [
        VisionMasterUI
    ],
    providers: [
        //VisionService,
       // VisionServiceCollection   
    ]
})

export class Vision_ModuleMaster { }
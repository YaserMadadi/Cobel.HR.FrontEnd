import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { LevelService } from './level.service';
import { LevelServiceCollection } from './level.service.collection';
import { LevelMasterUI } from './master/level.master';
import { Level_ModuleDetail } from './level.module.detail';

@NgModule({
    declarations: [
        LevelMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Level_ModuleDetail
    ],
    exports: [
        LevelMasterUI
    ],
    providers: [
        //LevelService,
       // LevelServiceCollection   
    ]
})

export class Level_ModuleMaster { }
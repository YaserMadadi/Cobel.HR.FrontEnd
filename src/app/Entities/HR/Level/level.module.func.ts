import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { LevelService } from './level.service';
import { LevelServiceCollection } from './level.service.collection';
import { LevelMasterUI } from './master/level.master';
import { LevelEditUI } from './edit/level.edit';
import { LevelDeleteUI } from './delete/level.delete';
import { LevelSeekUI } from './seek/level.seek';


@NgModule({
    declarations: [
        LevelEditUI,
		LevelDeleteUI,
		LevelSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        LevelEditUI,
		LevelDeleteUI,
		LevelSeekUI
    ],
    providers: [
       //LevelService,
       // LevelServiceCollection,
    ]
})

export class Level_ModuleFunc { }
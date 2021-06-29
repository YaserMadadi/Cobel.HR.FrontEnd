import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CoachConnectionLineService } from './coachConnectionLine.service';
import { CoachConnectionLineServiceCollection } from './coachConnectionLine.service.collection';
import { CoachConnectionLineMasterUI } from './master/coachConnectionLine.master';
import { CoachConnectionLineEditUI } from './edit/coachConnectionLine.edit';
import { CoachConnectionLineDeleteUI } from './delete/coachConnectionLine.delete';
import { CoachConnectionLineSeekUI } from './seek/coachConnectionLine.seek';

import { Coach_ModuleFunc } from '../Coach/coach.module.func';
import { ConnectionType_ModuleFunc } from '../../Base/ConnectionType/connectionType.module.func';

@NgModule({
    declarations: [
        CoachConnectionLineEditUI,
		CoachConnectionLineDeleteUI,
		CoachConnectionLineSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Coach_ModuleFunc,
		ConnectionType_ModuleFunc
    ],
    exports: [
        CoachConnectionLineEditUI,
		CoachConnectionLineDeleteUI,
		CoachConnectionLineSeekUI
    ],
    providers: [
       //CoachConnectionLineService,
       // CoachConnectionLineServiceCollection,
    ]
})

export class CoachConnectionLine_ModuleFunc { }
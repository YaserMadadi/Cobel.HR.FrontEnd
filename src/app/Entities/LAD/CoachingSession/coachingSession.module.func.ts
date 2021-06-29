import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CoachingSessionService } from './coachingSession.service';
import { CoachingSessionServiceCollection } from './coachingSession.service.collection';
import { CoachingSessionMasterUI } from './master/coachingSession.master';
import { CoachingSessionEditUI } from './edit/coachingSession.edit';
import { CoachingSessionDeleteUI } from './delete/coachingSession.delete';
import { CoachingSessionSeekUI } from './seek/coachingSession.seek';

import { Coaching_ModuleFunc } from '../Coaching/coaching.module.func';

@NgModule({
    declarations: [
        CoachingSessionEditUI,
		CoachingSessionDeleteUI,
		CoachingSessionSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Coaching_ModuleFunc
    ],
    exports: [
        CoachingSessionEditUI,
		CoachingSessionDeleteUI,
		CoachingSessionSeekUI
    ],
    providers: [
       //CoachingSessionService,
       // CoachingSessionServiceCollection,
    ]
})

export class CoachingSession_ModuleFunc { }
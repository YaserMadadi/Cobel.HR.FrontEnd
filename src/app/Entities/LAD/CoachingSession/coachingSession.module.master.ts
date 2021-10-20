import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CoachingSessionService } from './coachingSession.service';
import { CoachingSessionServiceCollection } from './coachingSession.service.collection';
import { CoachingSessionMasterUI } from './master/coachingSession.master';
import { CoachingSession_ModuleDetail } from './coachingSession.module.detail';

@NgModule({
    declarations: [
        CoachingSessionMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        CoachingSession_ModuleDetail
    ],
    exports: [
        CoachingSessionMasterUI
    ]
})

export class CoachingSession_ModuleMaster { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FeedbackSessionService } from './feedbackSession.service';
import { FeedbackSessionServiceCollection } from './feedbackSession.service.collection';
import { FeedbackSessionMasterUI } from './master/feedbackSession.master';
import { FeedbackSession_ModuleDetail } from './feedbackSession.module.detail';

@NgModule({
    declarations: [
        FeedbackSessionMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        FeedbackSession_ModuleDetail
    ],
    exports: [
        FeedbackSessionMasterUI
    ]
})

export class FeedbackSession_ModuleMaster { }
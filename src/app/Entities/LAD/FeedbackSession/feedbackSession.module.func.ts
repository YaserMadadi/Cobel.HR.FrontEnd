import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { FeedbackSessionService } from './feedbackSession.service';
import { FeedbackSessionServiceCollection } from './feedbackSession.service.collection';
import { FeedbackSessionMasterUI } from './master/feedbackSession.master';
import { FeedbackSessionEditUI } from './edit/feedbackSession.edit';
import { FeedbackSessionDeleteUI } from './delete/feedbackSession.delete';
import { FeedbackSessionSeekUI } from './seek/feedbackSession.seek';

import { Assessment_ModuleFunc } from '../Assessment/assessment.module.func';

@NgModule({
    declarations: [
        FeedbackSessionEditUI,
		FeedbackSessionDeleteUI,
		FeedbackSessionSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Assessment_ModuleFunc
    ],
    exports: [
        FeedbackSessionEditUI,
		FeedbackSessionDeleteUI,
		FeedbackSessionSeekUI
    ]
})

export class FeedbackSession_ModuleFunc { }
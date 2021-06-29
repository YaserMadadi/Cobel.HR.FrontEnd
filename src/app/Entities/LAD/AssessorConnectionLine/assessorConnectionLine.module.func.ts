import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { AssessorConnectionLineService } from './assessorConnectionLine.service';
import { AssessorConnectionLineServiceCollection } from './assessorConnectionLine.service.collection';
import { AssessorConnectionLineMasterUI } from './master/assessorConnectionLine.master';
import { AssessorConnectionLineEditUI } from './edit/assessorConnectionLine.edit';
import { AssessorConnectionLineDeleteUI } from './delete/assessorConnectionLine.delete';
import { AssessorConnectionLineSeekUI } from './seek/assessorConnectionLine.seek';

import { Assessor_ModuleFunc } from '../Assessor/assessor.module.func';
import { ConnectionType_ModuleFunc } from '../../Base/ConnectionType/connectionType.module.func';

@NgModule({
    declarations: [
        AssessorConnectionLineEditUI,
		AssessorConnectionLineDeleteUI,
		AssessorConnectionLineSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Assessor_ModuleFunc,
		ConnectionType_ModuleFunc
    ],
    exports: [
        AssessorConnectionLineEditUI,
		AssessorConnectionLineDeleteUI,
		AssessorConnectionLineSeekUI
    ],
    providers: [
       //AssessorConnectionLineService,
       // AssessorConnectionLineServiceCollection,
    ]
})

export class AssessorConnectionLine_ModuleFunc { }
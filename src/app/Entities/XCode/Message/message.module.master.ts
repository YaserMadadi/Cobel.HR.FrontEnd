import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MessageService } from './message.service';
import { MessageServiceCollection } from './message.service.collection';
import { MessageMasterUI } from './master/message.master';
import { Message_ModuleDetail } from './message.module.detail';

@NgModule({
    declarations: [
        MessageMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Message_ModuleDetail
    ],
    exports: [
        MessageMasterUI
    ]
})

export class Message_ModuleMaster { }
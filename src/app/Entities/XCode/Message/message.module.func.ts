import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { MessageService } from './message.service';
import { MessageServiceCollection } from './message.service.collection';
import { MessageMasterUI } from './master/message.master';
import { MessageEditUI } from './edit/message.edit';
import { MessageDeleteUI } from './delete/message.delete';
import { MessageSeekUI } from './seek/message.seek';


@NgModule({
    declarations: [
        MessageEditUI,
		MessageDeleteUI,
		MessageSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        MessageEditUI,
		MessageDeleteUI,
		MessageSeekUI
    ],
    providers: [
       //MessageService,
       // MessageServiceCollection,
    ]
})

export class Message_ModuleFunc { }
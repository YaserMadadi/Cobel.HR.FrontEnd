import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { EventTypeService } from './eventType.service';
import { EventTypeServiceCollection } from './eventType.service.collection';
import { EventTypeMasterUI } from './master/eventType.master';
import { EventTypeEditUI } from './edit/eventType.edit';
import { EventTypeDeleteUI } from './delete/eventType.delete';
import { EventTypeSeekUI } from './seek/eventType.seek';


@NgModule({
    declarations: [
        EventTypeEditUI,
		EventTypeDeleteUI,
		EventTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        EventTypeEditUI,
		EventTypeDeleteUI,
		EventTypeSeekUI
    ],
    providers: [
       //EventTypeService,
       // EventTypeServiceCollection,
    ]
})

export class EventType_ModuleFunc { }
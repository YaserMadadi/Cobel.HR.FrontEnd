import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { EventTypeService } from './eventType.service';
import { EventTypeServiceCollection } from './eventType.service.collection';
import { EventTypeMasterUI } from './master/eventType.master';
import { EventType_ModuleDetail } from './eventType.module.detail';

@NgModule({
    declarations: [
        EventTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        EventType_ModuleDetail
    ],
    exports: [
        EventTypeMasterUI
    ]
})

export class EventType_ModuleMaster { }
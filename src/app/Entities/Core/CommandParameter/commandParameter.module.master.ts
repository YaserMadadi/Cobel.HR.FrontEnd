import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CommandParameterService } from './commandParameter.service';
import { CommandParameterServiceCollection } from './commandParameter.service.collection';
import { CommandParameterMasterUI } from './master/commandParameter.master';
import { CommandParameter_ModuleDetail } from './commandParameter.module.detail';

@NgModule({
    declarations: [
        CommandParameterMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        CommandParameter_ModuleDetail
    ],
    exports: [
        CommandParameterMasterUI
    ],
    providers: [
        //CommandParameterService,
       // CommandParameterServiceCollection   
    ]
})

export class CommandParameter_ModuleMaster { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { SynonymService } from './synonym.service';
import { SynonymServiceCollection } from './synonym.service.collection';
import { SynonymMasterUI } from './master/synonym.master';
import { Synonym_ModuleDetail } from './synonym.module.detail';

@NgModule({
    declarations: [
        SynonymMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Synonym_ModuleDetail
    ],
    exports: [
        SynonymMasterUI
    ],
    providers: [
        //SynonymService,
       // SynonymServiceCollection   
    ]
})

export class Synonym_ModuleMaster { }
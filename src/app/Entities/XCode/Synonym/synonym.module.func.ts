import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { SynonymService } from './synonym.service';
import { SynonymServiceCollection } from './synonym.service.collection';
import { SynonymMasterUI } from './master/synonym.master';
import { SynonymEditUI } from './edit/synonym.edit';
import { SynonymDeleteUI } from './delete/synonym.delete';
import { SynonymSeekUI } from './seek/synonym.seek';


@NgModule({
    declarations: [
        SynonymEditUI,
		SynonymDeleteUI,
		SynonymSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        SynonymEditUI,
		SynonymDeleteUI,
		SynonymSeekUI
    ]
})

export class Synonym_ModuleFunc { }
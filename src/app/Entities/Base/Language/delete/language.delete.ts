import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Language } from '../language';
import { LanguageService } from '../language.service';


@Component({
  selector: 'base-language-delete',
  templateUrl: './language.delete.html',
  styleUrls: ['./language.delete.css'],
  providers: [LanguageService]
})
export class LanguageDeleteUI extends DeleteModal<Language> {

    constructor(private languageService: LanguageService){
        super(languageService);
    }

}
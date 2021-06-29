import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Language } from '../language';


@Component({
  selector: 'base-language-seek',
  templateUrl: './language.seek.html',
  styleUrls: ['./language.seek.css']
})
export class LanguageSeekUI extends SeekModal<Language> {

  language: Language = new Language();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.language);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { LanguageAbility } from '../languageAbility';


@Component({
  selector: 'hr-languageAbility-seek',
  templateUrl: './languageAbility.seek.html',
  styleUrls: ['./languageAbility.seek.css']
})
export class LanguageAbilitySeekUI extends SeekModal<LanguageAbility> {

  languageAbility: LanguageAbility = new LanguageAbility();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.languageAbility);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
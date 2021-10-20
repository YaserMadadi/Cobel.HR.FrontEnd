import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { AbilityLevel } from '../abilityLevel';


@Component({
  selector: 'hr-abilityLevel-seek',
  templateUrl: './abilityLevel.seek.html',
  styleUrls: ['./abilityLevel.seek.css']
})
export class AbilityLevelSeekUI extends SeekModal<AbilityLevel> {

  abilityLevel: AbilityLevel = new AbilityLevel();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.abilityLevel);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}
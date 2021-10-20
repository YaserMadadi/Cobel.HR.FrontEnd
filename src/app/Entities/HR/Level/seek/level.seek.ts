import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Level } from '../level';


@Component({
  selector: 'hr-level-seek',
  templateUrl: './level.seek.html',
  styleUrls: ['./level.seek.css']
})
export class LevelSeekUI extends SeekModal<Level> {

  level: Level = new Level();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.level);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Synonym } from '../synonym';


@Component({
  selector: 'xcode-synonym-seek',
  templateUrl: './synonym.seek.html',
  styleUrls: ['./synonym.seek.css']
})
export class SynonymSeekUI extends SeekModal<Synonym> {

  synonym: Synonym = new Synonym();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.synonym);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}
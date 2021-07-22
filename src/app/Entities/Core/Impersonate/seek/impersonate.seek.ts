import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Impersonate } from '../impersonate';


@Component({
  selector: 'core-impersonate-seek',
  templateUrl: './impersonate.seek.html',
  styleUrls: ['./impersonate.seek.css']
})
export class ImpersonateSeekUI extends SeekModal<Impersonate> {

  impersonate: Impersonate = new Impersonate();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.impersonate);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}
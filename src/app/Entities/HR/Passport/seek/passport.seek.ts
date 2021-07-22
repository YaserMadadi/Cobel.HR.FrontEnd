import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Passport } from '../passport';


@Component({
  selector: 'hr-passport-seek',
  templateUrl: './passport.seek.html',
  styleUrls: ['./passport.seek.css']
})
export class PassportSeekUI extends SeekModal<Passport> {

  passport: Passport = new Passport();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.passport);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}
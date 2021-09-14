
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { CommandParameter } from '../commandParameter';


@Component({
  selector: 'core-commandParameter-seek',
  templateUrl: './commandParameter.seek.html',
  styleUrls: ['./commandParameter.seek.css']
})
export class CommandParameterSeekUI extends SeekModal<CommandParameter> {

  commandParameter: CommandParameter = new CommandParameter();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.commandParameter);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}

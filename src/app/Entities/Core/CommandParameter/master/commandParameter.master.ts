import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { CommandParameter } from '../commandParameter';
import { CommandParameterService } from '../commandParameter.service';
import { CommandParameterDeleteUI } from '../delete/commandParameter.delete';
import { CommandParameterEditUI } from '../edit/commandParameter.edit';



@Component({
  selector: 'core-commandParameter-master',
  templateUrl: './commandParameter.master.html',
  styleUrls: ['./commandParameter.master.css'],
  providers: [
    CommandParameterService,
    
  ]
})
export class CommandParameterMasterUI extends MasterModal<CommandParameter> {

  constructor(private commandParameterService: CommandParameterService) {
    super(commandParameterService);
  }
}



import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { CommandParameter } from '../commandParameter';
import { CommandParameterService } from '../commandParameter.service';


@Component({
  selector: 'core-commandParameter-delete',
  templateUrl: './commandParameter.delete.html',
  styleUrls: ['./commandParameter.delete.css'],
  providers: [CommandParameterService]
})
export class CommandParameterDeleteUI extends DeleteModal<CommandParameter> {

    constructor(private commandParameterService: CommandParameterService){
        super(commandParameterService);
    }

}

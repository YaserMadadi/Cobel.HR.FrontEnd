import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { ConnectionType } from '../connectionType';
import { ConnectionTypeService } from '../connectionType.service';


@Component({
  selector: 'base-connectionType-delete',
  templateUrl: './connectionType.delete.html',
  styleUrls: ['./connectionType.delete.css'],
  providers: [ConnectionTypeService]
})
export class ConnectionTypeDeleteUI extends DeleteModal<ConnectionType> {

    constructor(private connectionTypeService: ConnectionTypeService){
        super(connectionTypeService);
    }

}
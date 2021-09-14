

import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { SubSystem } from '../subSystem';
import { SubSystemService } from '../subSystem.service';


@Component({
  selector: 'core-subSystem-delete',
  templateUrl: './subSystem.delete.html',
  styleUrls: ['./subSystem.delete.css'],
  providers: [SubSystemService]
})
export class SubSystemDeleteUI extends DeleteModal<SubSystem> {

    constructor(private subSystemService: SubSystemService){
        super(subSystemService);
    }

}

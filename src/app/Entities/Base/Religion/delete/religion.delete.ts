import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Religion } from '../religion';
import { ReligionService } from '../religion.service';


@Component({
  selector: 'base-religion-delete',
  templateUrl: './religion.delete.html',
  styleUrls: ['./religion.delete.css'],
  providers: [ReligionService]
})
export class ReligionDeleteUI extends DeleteModal<Religion> {

    constructor(private religionService: ReligionService){
        super(religionService);
    }

}
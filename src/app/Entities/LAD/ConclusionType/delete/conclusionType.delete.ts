import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { ConclusionType } from '../conclusionType';
import { ConclusionTypeService } from '../conclusionType.service';


@Component({
  selector: 'lad-conclusionType-delete',
  templateUrl: './conclusionType.delete.html',
  styleUrls: ['./conclusionType.delete.css'],
  providers: [ConclusionTypeService]
})
export class ConclusionTypeDeleteUI extends DeleteModal<ConclusionType> {

    constructor(private conclusionTypeService: ConclusionTypeService){
        super(conclusionTypeService);
    }

}
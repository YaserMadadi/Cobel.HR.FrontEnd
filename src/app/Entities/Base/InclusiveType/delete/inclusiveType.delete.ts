import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { InclusiveType } from '../inclusiveType';
import { InclusiveTypeService } from '../inclusiveType.service';


@Component({
  selector: 'base-inclusiveType-delete',
  templateUrl: './inclusiveType.delete.html',
  styleUrls: ['./inclusiveType.delete.css'],
  
})
export class InclusiveTypeDeleteUI extends DeleteModal<InclusiveType> {

    constructor(private inclusiveTypeService: InclusiveTypeService){
        super(inclusiveTypeService);
    }

}
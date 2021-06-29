import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { RelativeType } from '../relativeType';
import { RelativeTypeService } from '../relativeType.service';


@Component({
  selector: 'base-hr-relativeType-delete',
  templateUrl: './relativeType.delete.html',
  styleUrls: ['./relativeType.delete.css'],
  providers: [RelativeTypeService]
})
export class RelativeTypeDeleteUI extends DeleteModal<RelativeType> {

    constructor(private relativeTypeService: RelativeTypeService){
        super(relativeTypeService);
    }

}
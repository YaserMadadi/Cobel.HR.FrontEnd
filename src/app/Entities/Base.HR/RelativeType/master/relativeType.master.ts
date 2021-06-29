import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { RelativeType } from '../relativeType';
import { RelativeTypeService } from '../relativeType.service';
import { RelativeTypeDeleteUI } from '../delete/relativeType.delete';
import { RelativeTypeEditUI } from '../edit/relativeType.edit';
import { RelativeService } from '../../../HR/Relative/relative.service';



@Component({
  selector: 'base-hr-relativeType-master',
  templateUrl: './relativeType.master.html',
  styleUrls: ['./relativeType.master.css'],
  providers: [
    RelativeTypeService,
    RelativeService,
  ]
})
export class RelativeTypeMasterUI extends MasterModal<RelativeType> {

  constructor(private relativeTypeService: RelativeTypeService) {
    super(relativeTypeService);
  }
}
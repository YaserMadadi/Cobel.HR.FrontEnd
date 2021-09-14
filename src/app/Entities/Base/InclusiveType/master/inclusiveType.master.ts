import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { InclusiveType } from '../inclusiveType';
import { InclusiveTypeService } from '../inclusiveType.service';
import { InclusiveTypeDeleteUI } from '../delete/inclusiveType.delete';
import { InclusiveTypeEditUI } from '../edit/inclusiveType.edit';
import { MilitaryServiceInclusiveService } from '../../../HR/MilitaryServiceInclusive/militaryServiceInclusive.service';



@Component({
  selector: 'base-inclusiveType-master',
  templateUrl: './inclusiveType.master.html',
  styleUrls: ['./inclusiveType.master.css'],
  
})
export class InclusiveTypeMasterUI extends MasterModal<InclusiveType> {

  constructor(private inclusiveTypeService: InclusiveTypeService) {
    super(inclusiveTypeService);
  }
}
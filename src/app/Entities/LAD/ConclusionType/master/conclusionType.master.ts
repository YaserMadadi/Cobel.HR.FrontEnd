import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { ConclusionType } from '../conclusionType';
import { ConclusionTypeService } from '../conclusionType.service';
import { ConclusionTypeDeleteUI } from '../delete/conclusionType.delete';
import { ConclusionTypeEditUI } from '../edit/conclusionType.edit';
import { ConclusionService } from '../../Conclusion/conclusion.service';



@Component({
  selector: 'lad-conclusionType-master',
  templateUrl: './conclusionType.master.html',
  styleUrls: ['./conclusionType.master.css'],
  
})
export class ConclusionTypeMasterUI extends MasterModal<ConclusionType> {

  constructor(private conclusionTypeService: ConclusionTypeService) {
    super(conclusionTypeService);
  }
}
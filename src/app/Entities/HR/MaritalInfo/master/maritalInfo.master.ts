import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { MaritalInfo } from '../maritalInfo';
import { MaritalInfoService } from '../maritalInfo.service';
import { MaritalInfoDeleteUI } from '../delete/maritalInfo.delete';
import { MaritalInfoEditUI } from '../edit/maritalInfo.edit';



@Component({
  selector: 'hr-maritalInfo-master',
  templateUrl: './maritalInfo.master.html',
  styleUrls: ['./maritalInfo.master.css'],
  providers: [
    MaritalInfoService,
    
  ]
})
export class MaritalInfoMasterUI extends MasterModal<MaritalInfo> {

  constructor(private maritalInfoService: MaritalInfoService) {
    super(maritalInfoService);
  }
}
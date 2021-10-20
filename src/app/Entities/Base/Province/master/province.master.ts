import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Province } from '../province';
import { ProvinceService } from '../province.service';
import { ProvinceDeleteUI } from '../delete/province.delete';
import { ProvinceEditUI } from '../edit/province.edit';
import { CityService } from '../../City/city.service';



@Component({
  selector: 'base-province-master',
  templateUrl: './province.master.html',
  styleUrls: ['./province.master.css'],
  
})
export class ProvinceMasterUI extends MasterModal<Province> {

  constructor(private provinceService: ProvinceService) {
    super(provinceService);
  }
}
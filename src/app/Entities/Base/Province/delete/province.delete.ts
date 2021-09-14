import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Province } from '../province';
import { ProvinceService } from '../province.service';


@Component({
  selector: 'base-province-delete',
  templateUrl: './province.delete.html',
  styleUrls: ['./province.delete.css'],
  
})
export class ProvinceDeleteUI extends DeleteModal<Province> {

    constructor(private provinceService: ProvinceService){
        super(provinceService);
    }

}
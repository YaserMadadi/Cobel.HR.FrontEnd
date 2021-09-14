import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { MaritalInfo } from '../maritalInfo';
import { MaritalInfoService } from '../maritalInfo.service';


@Component({
  selector: 'hr-maritalInfo-delete',
  templateUrl: './maritalInfo.delete.html',
  styleUrls: ['./maritalInfo.delete.css'],
  
})
export class MaritalInfoDeleteUI extends DeleteModal<MaritalInfo> {

    constructor(private maritalInfoService: MaritalInfoService){
        super(maritalInfoService);
    }

}
import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { MilitaryService } from '../militaryService';
import { MilitaryServiceService } from '../militaryService.service';


@Component({
  selector: 'hr-militaryService-delete',
  templateUrl: './militaryService.delete.html',
  styleUrls: ['./militaryService.delete.css'],
  
})
export class MilitaryServiceDeleteUI extends DeleteModal<MilitaryService> {

    constructor(private militaryServiceService: MilitaryServiceService){
        super(militaryServiceService);
    }

}
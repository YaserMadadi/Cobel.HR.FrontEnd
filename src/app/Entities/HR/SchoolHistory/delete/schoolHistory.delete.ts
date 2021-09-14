import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { SchoolHistory } from '../schoolHistory';
import { SchoolHistoryService } from '../schoolHistory.service';


@Component({
  selector: 'hr-schoolHistory-delete',
  templateUrl: './schoolHistory.delete.html',
  styleUrls: ['./schoolHistory.delete.css'],
  
})
export class SchoolHistoryDeleteUI extends DeleteModal<SchoolHistory> {

    constructor(private schoolHistoryService: SchoolHistoryService){
        super(schoolHistoryService);
    }

}
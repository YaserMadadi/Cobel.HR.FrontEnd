import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { UniversityHistory } from '../universityHistory';
import { UniversityHistoryService } from '../universityHistory.service';


@Component({
  selector: 'hr-universityHistory-delete',
  templateUrl: './universityHistory.delete.html',
  styleUrls: ['./universityHistory.delete.css'],
  providers: [UniversityHistoryService]
})
export class UniversityHistoryDeleteUI extends DeleteModal<UniversityHistory> {

    constructor(private universityHistoryService: UniversityHistoryService){
        super(universityHistoryService);
    }

}
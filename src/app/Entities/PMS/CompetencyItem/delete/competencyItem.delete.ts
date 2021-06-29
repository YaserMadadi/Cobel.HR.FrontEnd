import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { CompetencyItem } from '../competencyItem';
import { CompetencyItemService } from '../competencyItem.service';


@Component({
  selector: 'pms-competencyItem-delete',
  templateUrl: './competencyItem.delete.html',
  styleUrls: ['./competencyItem.delete.css'],
  providers: [CompetencyItemService]
})
export class CompetencyItemDeleteUI extends DeleteModal<CompetencyItem> {

    constructor(private competencyItemService: CompetencyItemService){
        super(competencyItemService);
    }

}
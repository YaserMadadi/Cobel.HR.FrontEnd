import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Conclusion } from '../conclusion';
import { ConclusionService } from '../conclusion.service';


@Component({
  selector: 'lad-conclusion-delete',
  templateUrl: './conclusion.delete.html',
  styleUrls: ['./conclusion.delete.css'],
  
})
export class ConclusionDeleteUI extends DeleteModal<Conclusion> {

    constructor(private conclusionService: ConclusionService){
        super(conclusionService);
    }

}
import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Synonym } from '../synonym';
import { SynonymService } from '../synonym.service';


@Component({
  selector: 'xcode-synonym-delete',
  templateUrl: './synonym.delete.html',
  styleUrls: ['./synonym.delete.css'],
  providers: [SynonymService]
})
export class SynonymDeleteUI extends DeleteModal<Synonym> {

    constructor(private synonymService: SynonymService){
        super(synonymService);
    }

}
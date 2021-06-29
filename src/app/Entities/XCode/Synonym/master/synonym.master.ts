import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Synonym } from '../synonym';
import { SynonymService } from '../synonym.service';
import { SynonymDeleteUI } from '../delete/synonym.delete';
import { SynonymEditUI } from '../edit/synonym.edit';



@Component({
  selector: 'xcode-synonym-master',
  templateUrl: './synonym.master.html',
  styleUrls: ['./synonym.master.css'],
  providers: [
    SynonymService,
    
  ]
})
export class SynonymMasterUI extends MasterModal<Synonym> {

  constructor(private synonymService: SynonymService) {
    super(synonymService);
  }
}
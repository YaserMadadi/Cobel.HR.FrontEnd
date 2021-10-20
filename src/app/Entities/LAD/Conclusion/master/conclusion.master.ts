import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Conclusion } from '../conclusion';
import { ConclusionService } from '../conclusion.service';
import { ConclusionDeleteUI } from '../delete/conclusion.delete';
import { ConclusionEditUI } from '../edit/conclusion.edit';



@Component({
  selector: 'lad-conclusion-master',
  templateUrl: './conclusion.master.html',
  styleUrls: ['./conclusion.master.css']
})
export class ConclusionMasterUI extends MasterModal<Conclusion> {

  constructor(private conclusionService: ConclusionService) {
    super(conclusionService);
  }
}
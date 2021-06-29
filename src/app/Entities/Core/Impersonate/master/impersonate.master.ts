import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Impersonate } from '../impersonate';
import { ImpersonateService } from '../impersonate.service';
import { ImpersonateDeleteUI } from '../delete/impersonate.delete';
import { ImpersonateEditUI } from '../edit/impersonate.edit';



@Component({
  selector: 'core-impersonate-master',
  templateUrl: './impersonate.master.html',
  styleUrls: ['./impersonate.master.css'],
  providers: [
    ImpersonateService,
    
  ]
})
export class ImpersonateMasterUI extends MasterModal<Impersonate> {

  constructor(private impersonateService: ImpersonateService) {
    super(impersonateService);
  }
}
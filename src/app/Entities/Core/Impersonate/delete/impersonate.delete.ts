import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Impersonate } from '../impersonate';
import { ImpersonateService } from '../impersonate.service';


@Component({
  selector: 'core-impersonate-delete',
  templateUrl: './impersonate.delete.html',
  styleUrls: ['./impersonate.delete.css'],
  providers: [ImpersonateService]
})
export class ImpersonateDeleteUI extends DeleteModal<Impersonate> {

    constructor(private impersonateService: ImpersonateService){
        super(impersonateService);
    }

}
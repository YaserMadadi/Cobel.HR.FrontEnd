import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { CertificationType } from '../certificationType';
import { CertificationTypeService } from '../certificationType.service';


@Component({
  selector: 'base-certificationType-delete',
  templateUrl: './certificationType.delete.html',
  styleUrls: ['./certificationType.delete.css'],
})
export class CertificationTypeDeleteUI extends DeleteModal<CertificationType> {

    constructor(private certificationTypeService: CertificationTypeService){
        super(certificationTypeService);
    }

}
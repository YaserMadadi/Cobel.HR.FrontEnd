import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { CertificationType } from '../certificationType';
import { CertificationTypeService } from '../certificationType.service';
import { CertificationTypeDeleteUI } from '../delete/certificationType.delete';
import { CertificationTypeEditUI } from '../edit/certificationType.edit';
import { UniversityHistoryService } from '../../../HR/UniversityHistory/universityHistory.service';



@Component({
  selector: 'base-certificationType-master',
  templateUrl: './certificationType.master.html',
  styleUrls: ['./certificationType.master.css'],
  providers: [
    CertificationTypeService,
    UniversityHistoryService,
  ]
})
export class CertificationTypeMasterUI extends MasterModal<CertificationType> {

  constructor(private certificationTypeService: CertificationTypeService) {
    super(certificationTypeService);
  }
}
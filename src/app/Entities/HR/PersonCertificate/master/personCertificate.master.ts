import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { PersonCertificate } from '../personCertificate';
import { PersonCertificateService } from '../personCertificate.service';
import { PersonCertificateDeleteUI } from '../delete/personCertificate.delete';
import { PersonCertificateEditUI } from '../edit/personCertificate.edit';



@Component({
  selector: 'hr-personCertificate-master',
  templateUrl: './personCertificate.master.html',
  styleUrls: ['./personCertificate.master.css']
})
export class PersonCertificateMasterUI extends MasterModal<PersonCertificate> {

  constructor(private personCertificateService: PersonCertificateService) {
    super(personCertificateService);
  }
}
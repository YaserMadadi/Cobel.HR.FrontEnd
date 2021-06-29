import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { PersonCertificate } from '../personCertificate';
import { PersonCertificateService } from '../personCertificate.service';


@Component({
  selector: 'hr-personCertificate-delete',
  templateUrl: './personCertificate.delete.html',
  styleUrls: ['./personCertificate.delete.css'],
  providers: [PersonCertificateService]
})
export class PersonCertificateDeleteUI extends DeleteModal<PersonCertificate> {

    constructor(private personCertificateService: PersonCertificateService){
        super(personCertificateService);
    }

}
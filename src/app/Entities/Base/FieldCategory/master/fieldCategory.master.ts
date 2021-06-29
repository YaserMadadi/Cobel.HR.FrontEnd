import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { FieldCategory } from '../fieldCategory';
import { FieldCategoryService } from '../fieldCategory.service';
import { FieldCategoryDeleteUI } from '../delete/fieldCategory.delete';
import { FieldCategoryEditUI } from '../edit/fieldCategory.edit';
import { PersonCertificateService } from '../../../HR/PersonCertificate/personCertificate.service';



@Component({
  selector: 'base-fieldCategory-master',
  templateUrl: './fieldCategory.master.html',
  styleUrls: ['./fieldCategory.master.css'],
  providers: [
    FieldCategoryService,
    PersonCertificateService,
  ]
})
export class FieldCategoryMasterUI extends MasterModal<FieldCategory> {

  constructor(private fieldCategoryService: FieldCategoryService) {
    super(fieldCategoryService);
  }
}
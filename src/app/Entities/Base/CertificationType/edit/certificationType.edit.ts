import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { CertificationType } from '../certificationType';
import { CertificationTypeService } from '../certificationType.service';



@Component({
  selector: 'base-certificationType-edit',
  templateUrl: './certificationType.edit.html',
  styleUrls: ['./certificationType.edit.css']
})
export class CertificationTypeEditUI extends EditModal<CertificationType> implements IEditModal<CertificationType>  {
  
  constructor(private certificationTypeService: CertificationTypeService) {
    super(certificationTypeService); 
    this.currentInstance = new CertificationType();
  }

  

  @ViewChild('certificationTypeEditUI')
  private certificationTypeEditUI: NgForm;

  Init(certificationType: CertificationType = new CertificationType()) {
    if (certificationType.isNew)
      this.certificationTypeEditUI.reset();
    this.InitCertificationType(certificationType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitCertificationType(certificationType: CertificationType) {
    this.currentInstance = new CertificationType();
    if (!certificationType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = certificationType;
  }

  ResetForm() {
    
  }
}
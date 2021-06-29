import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { PersonCertificate } from '../personCertificate';
import { PersonCertificateService } from '../personCertificate.service';
import { PersonCertificateMasterUI } from '../master/personCertificate.master';
import { PersonCertificateEditUI } from '../edit/personCertificate.edit';
import { PersonCertificateDeleteUI } from '../delete/personCertificate.delete';

import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { FieldCategory } from '../../../Base/FieldCategory/fieldCategory';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-personCertificate-index',
  templateUrl: './personCertificate.index.html',
  styleUrls: ['./personCertificate.index.css']
})
export class PersonCertificateIndexUI extends IndexView<PersonCertificate> implements AfterViewInit, IIndexView<PersonCertificate> {

  constructor(private personCertificateService: PersonCertificateService) {
    super(personCertificateService);
    this.filterInstance = PersonCertificate.SeekInstance();
    this.currentInstance = new PersonCertificate();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(personCertificateEditUI: PersonCertificateEditUI){
    personCertificateEditUI.ShowDialog(new PersonCertificate());
  }

  resetFilter() {
    this.filterInstance = PersonCertificate.SeekInstance();
    
    
  }

  public onEditModalClosed(personCertificate: PersonCertificate) {
    this.onRefresh();
    this.currentInstance = new PersonCertificate();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { FieldCategory } from '../fieldCategory';
import { FieldCategoryService } from '../fieldCategory.service';
import { FieldCategoryMasterUI } from '../master/fieldCategory.master';
import { FieldCategoryEditUI } from '../edit/fieldCategory.edit';
import { FieldCategoryDeleteUI } from '../delete/fieldCategory.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { PersonCertificateEditUI } from '../../../HR/PersonCertificate/edit/personCertificate.edit';
import { PersonCertificate } from '../../../HR/PersonCertificate/personCertificate';



@Component({
  selector: 'base-fieldCategory-index',
  templateUrl: './fieldCategory.index.html',
  styleUrls: ['./fieldCategory.index.css']
})
export class FieldCategoryIndexUI extends IndexView<FieldCategory> implements AfterViewInit, IIndexView<FieldCategory> {

  constructor(private fieldCategoryService: FieldCategoryService) {
    super(fieldCategoryService);
    this.filterInstance = FieldCategory.SeekInstance();
    this.currentInstance = new FieldCategory();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region PersonCertificate

  public personCertificate_Clicked(personCertificateEditUI: PersonCertificateEditUI) {
    personCertificateEditUI.FieldCategory = this.currentInstance;
    personCertificateEditUI.ShowDialog(new PersonCertificate());
  }
                    
  public personCertificateEditUI_Closed(personCertificate: PersonCertificate) {
    if (!personCertificate)
      return;
    this.onRefresh();
  }
  
  //#endregion PersonCertificate


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(fieldCategoryEditUI: FieldCategoryEditUI){
    fieldCategoryEditUI.ShowDialog(new FieldCategory());
  }

  resetFilter() {
    this.filterInstance = FieldCategory.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(fieldCategory: FieldCategory) {
    this.onRefresh();
    this.currentInstance = new FieldCategory();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
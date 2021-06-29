import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { CertificationType } from '../certificationType';
import { CertificationTypeService } from '../certificationType.service';
import { CertificationTypeMasterUI } from '../master/certificationType.master';
import { CertificationTypeEditUI } from '../edit/certificationType.edit';
import { CertificationTypeDeleteUI } from '../delete/certificationType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { UniversityHistoryEditUI } from '../../../HR/UniversityHistory/edit/universityHistory.edit';
import { UniversityHistory } from '../../../HR/UniversityHistory/universityHistory';



@Component({
  selector: 'base-certificationType-index',
  templateUrl: './certificationType.index.html',
  styleUrls: ['./certificationType.index.css']
})
export class CertificationTypeIndexUI extends IndexView<CertificationType> implements AfterViewInit, IIndexView<CertificationType> {

  constructor(private certificationTypeService: CertificationTypeService) {
    super(certificationTypeService);
    this.filterInstance = CertificationType.SeekInstance();
    this.currentInstance = new CertificationType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region UniversityHistory

  public universityHistory_Clicked(universityHistoryEditUI: UniversityHistoryEditUI) {
    universityHistoryEditUI.CertificationType = this.currentInstance;
    universityHistoryEditUI.ShowDialog(new UniversityHistory());
  }
                    
  public universityHistoryEditUI_Closed(universityHistory: UniversityHistory) {
    if (!universityHistory)
      return;
    this.onRefresh();
  }
  
  //#endregion UniversityHistory


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(certificationTypeEditUI: CertificationTypeEditUI){
    certificationTypeEditUI.ShowDialog(new CertificationType());
  }

  resetFilter() {
    this.filterInstance = CertificationType.SeekInstance();
    
    
  }

  public onEditModalClosed(certificationType: CertificationType) {
    this.onRefresh();
    this.currentInstance = new CertificationType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
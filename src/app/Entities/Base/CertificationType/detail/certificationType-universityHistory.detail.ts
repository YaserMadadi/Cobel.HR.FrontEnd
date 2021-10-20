import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { CertificationType } from '../certificationType';
import { CertificationTypeService } from '../certificationType.service';

import { UniversityHistory } from '../../../HR/UniversityHistory/universityHistory';
import { UniversityHistoryMasterUI } from '../../../HR/UniversityHistory/master/universityHistory.master';
import { UniversityHistoryEditUI } from '../../../HR/UniversityHistory/edit/universityHistory.edit';
import { UniversityHistoryDeleteUI } from '../../../HR/UniversityHistory/delete/universityHistory.delete';



@Component({
  selector: 'certificationType-universityHistory-detail',
  templateUrl: './certificationType-universityHistory.detail.html',
  styleUrls: ['./certificationType-universityHistory.detail.css']
})
export class CertificationType_UniversityHistory_DetailUI extends DetailView<CertificationType> {

  constructor(private certificationTypeService: CertificationTypeService) {
    super(certificationTypeService);
  }

  public UniversityHistoryList : UniversityHistory[] = [];
  
  public currentUniversityHistory : UniversityHistory = new UniversityHistory();

  private certificationType: CertificationType = new CertificationType();

  @Input()
  public set CertificationType(value: CertificationType) {
    this.certificationType = value;
    this.onReload();
  }

  public get CertificationType(): CertificationType { return this.certificationType }

  public onReload(){
    if (CertificationType.NotConfirm(this.certificationType))
      return;
    this.certificationTypeService
      .ServiceCollection
      .CollectionOfUniversityHistory(this.certificationType)
      .then(universityHistoryList => {
        this.UniversityHistoryList = universityHistoryList;
        this.currentUniversityHistory = new UniversityHistory();
      });
  }

  public onSelect(i: number) {
    this.currentUniversityHistory = this.UniversityHistoryList[i];
    if (UniversityHistory.NotConfirm(this.currentUniversityHistory))
      this.currentUniversityHistory = new UniversityHistory();
  }

  public onDblClicked(masterUI: UniversityHistoryMasterUI) {
    if (UniversityHistory.NotConfirm(this.currentUniversityHistory))
      return;
    masterUI.ShowDialog(this.currentUniversityHistory);
  }

  public onAdd(editUI: UniversityHistoryEditUI) {
    editUI.CertificationType = this.certificationType;
    editUI.ShowDialog(new UniversityHistory());
  }

  public onEdit(editUI: UniversityHistoryEditUI) {
    if (UniversityHistory.NotConfirm(this.currentUniversityHistory))
      return;
    editUI.ShowDialog(this.currentUniversityHistory);
  }

  public onDelete(deleteUI: UniversityHistoryDeleteUI) {
    if (UniversityHistory.NotConfirm(this.currentUniversityHistory))
      return;
    deleteUI.ShowDialog(this.currentUniversityHistory);
  }

  public onEditModal_Closed(universityHistory: UniversityHistory) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
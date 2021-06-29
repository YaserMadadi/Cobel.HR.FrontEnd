import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { MilitaryServiceStatus } from '../militaryServiceStatus';
import { MilitaryServiceStatusService } from '../militaryServiceStatus.service';

import { MilitaryService } from '../../../HR/MilitaryService/militaryService';
import { MilitaryServiceMasterUI } from '../../../HR/MilitaryService/master/militaryService.master';
import { MilitaryServiceEditUI } from '../../../HR/MilitaryService/edit/militaryService.edit';
import { MilitaryServiceDeleteUI } from '../../../HR/MilitaryService/delete/militaryService.delete';



@Component({
  selector: 'militaryServiceStatus-militaryService-detail',
  templateUrl: './militaryServiceStatus-militaryService.detail.html',
  styleUrls: ['./militaryServiceStatus-militaryService.detail.css'],
  providers: [MilitaryServiceStatusService]
}) 

@Injectable()
export class MilitaryServiceStatus_MilitaryService_DetailUI extends DetailView<MilitaryServiceStatus> {

  constructor(private militaryServiceStatusService: MilitaryServiceStatusService) {
    super(militaryServiceStatusService);
  }

  public MilitaryServiceList : MilitaryService[] = [];
  
  public currentMilitaryService : MilitaryService = new MilitaryService();

  private militaryServiceStatus: MilitaryServiceStatus = new MilitaryServiceStatus();

  @Input()
  public set MilitaryServiceStatus(value: MilitaryServiceStatus) {
    this.militaryServiceStatus = value;
    this.onReload();
  }

  public get MilitaryServiceStatus(): MilitaryServiceStatus { return this.militaryServiceStatus }

  public onReload(){
    if (MilitaryServiceStatus.NotConfirm(this.militaryServiceStatus))
      return;
    this.militaryServiceStatusService
      .ServiceCollection
      .CollectionOfMilitaryService(this.militaryServiceStatus)
      .then(militaryServiceList => {
        this.MilitaryServiceList = militaryServiceList;
        this.currentMilitaryService = new MilitaryService();
      });
  }

  public onSelect(i: number) {
    this.currentMilitaryService = this.MilitaryServiceList[i];
    if (MilitaryService.NotConfirm(this.currentMilitaryService))
      this.currentMilitaryService = new MilitaryService();
  }

  public onDblClicked(masterUI: MilitaryServiceMasterUI) {
    if (MilitaryService.NotConfirm(this.currentMilitaryService))
      return;
    masterUI.ShowDialog(this.currentMilitaryService);
  }

  public onAdd(editUI: MilitaryServiceEditUI) {
    editUI.MilitaryServiceStatus = this.militaryServiceStatus;
    editUI.ShowDialog(new MilitaryService());
  }

  public onEdit(editUI: MilitaryServiceEditUI) {
    if (MilitaryService.NotConfirm(this.currentMilitaryService))
      return;
    editUI.ShowDialog(this.currentMilitaryService);
  }

  public onDelete(deleteUI: MilitaryServiceDeleteUI) {
    if (MilitaryService.NotConfirm(this.currentMilitaryService))
      return;
    deleteUI.ShowDialog(this.currentMilitaryService);
  }

  public onEditModal_Closed(militaryService: MilitaryService) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
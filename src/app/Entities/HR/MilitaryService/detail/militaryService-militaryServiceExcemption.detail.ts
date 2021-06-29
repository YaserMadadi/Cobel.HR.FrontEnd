import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { MilitaryService } from '../militaryService';
import { MilitaryServiceService } from '../militaryService.service';

import { MilitaryServiceExcemption } from '../../MilitaryServiceExcemption/militaryServiceExcemption';
import { MilitaryServiceExcemptionMasterUI } from '../../MilitaryServiceExcemption/master/militaryServiceExcemption.master';
import { MilitaryServiceExcemptionEditUI } from '../../MilitaryServiceExcemption/edit/militaryServiceExcemption.edit';
import { MilitaryServiceExcemptionDeleteUI } from '../../MilitaryServiceExcemption/delete/militaryServiceExcemption.delete';



@Component({
  selector: 'militaryService-militaryServiceExcemption-detail',
  templateUrl: './militaryService-militaryServiceExcemption.detail.html',
  styleUrls: ['./militaryService-militaryServiceExcemption.detail.css'],
  providers: [MilitaryServiceService]
}) 

@Injectable()
export class MilitaryService_MilitaryServiceExcemption_DetailUI extends DetailView<MilitaryService> {

  constructor(private militaryServiceService: MilitaryServiceService) {
    super(militaryServiceService);
  }

  public MilitaryServiceExcemptionList : MilitaryServiceExcemption[] = [];
  
  public currentMilitaryServiceExcemption : MilitaryServiceExcemption = new MilitaryServiceExcemption();

  private militaryService: MilitaryService = new MilitaryService();

  @Input()
  public set MilitaryService(value: MilitaryService) {
    this.militaryService = value;
    this.onReload();
  }

  public get MilitaryService(): MilitaryService { return this.militaryService }

  public onReload(){
    if (MilitaryService.NotConfirm(this.militaryService))
      return;
    this.militaryServiceService
      .ServiceCollection
      .CollectionOfMilitaryServiceExcemption(this.militaryService)
      .then(militaryServiceExcemptionList => {
        this.MilitaryServiceExcemptionList = militaryServiceExcemptionList;
        this.currentMilitaryServiceExcemption = new MilitaryServiceExcemption();
      });
  }

  public onSelect(i: number) {
    this.currentMilitaryServiceExcemption = this.MilitaryServiceExcemptionList[i];
    if (MilitaryServiceExcemption.NotConfirm(this.currentMilitaryServiceExcemption))
      this.currentMilitaryServiceExcemption = new MilitaryServiceExcemption();
  }

  public onDblClicked(masterUI: MilitaryServiceExcemptionMasterUI) {
    if (MilitaryServiceExcemption.NotConfirm(this.currentMilitaryServiceExcemption))
      return;
    masterUI.ShowDialog(this.currentMilitaryServiceExcemption);
  }

  public onAdd(editUI: MilitaryServiceExcemptionEditUI) {
    editUI.MilitaryService = this.militaryService;
    editUI.ShowDialog(new MilitaryServiceExcemption());
  }

  public onEdit(editUI: MilitaryServiceExcemptionEditUI) {
    if (MilitaryServiceExcemption.NotConfirm(this.currentMilitaryServiceExcemption))
      return;
    editUI.ShowDialog(this.currentMilitaryServiceExcemption);
  }

  public onDelete(deleteUI: MilitaryServiceExcemptionDeleteUI) {
    if (MilitaryServiceExcemption.NotConfirm(this.currentMilitaryServiceExcemption))
      return;
    deleteUI.ShowDialog(this.currentMilitaryServiceExcemption);
  }

  public onEditModal_Closed(militaryServiceExcemption: MilitaryServiceExcemption) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
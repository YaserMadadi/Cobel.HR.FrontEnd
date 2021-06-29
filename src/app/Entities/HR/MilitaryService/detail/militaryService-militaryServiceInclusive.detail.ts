import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { MilitaryService } from '../militaryService';
import { MilitaryServiceService } from '../militaryService.service';

import { MilitaryServiceInclusive } from '../../MilitaryServiceInclusive/militaryServiceInclusive';
import { MilitaryServiceInclusiveMasterUI } from '../../MilitaryServiceInclusive/master/militaryServiceInclusive.master';
import { MilitaryServiceInclusiveEditUI } from '../../MilitaryServiceInclusive/edit/militaryServiceInclusive.edit';
import { MilitaryServiceInclusiveDeleteUI } from '../../MilitaryServiceInclusive/delete/militaryServiceInclusive.delete';



@Component({
  selector: 'militaryService-militaryServiceInclusive-detail',
  templateUrl: './militaryService-militaryServiceInclusive.detail.html',
  styleUrls: ['./militaryService-militaryServiceInclusive.detail.css'],
  providers: [MilitaryServiceService]
}) 

@Injectable()
export class MilitaryService_MilitaryServiceInclusive_DetailUI extends DetailView<MilitaryService> {

  constructor(private militaryServiceService: MilitaryServiceService) {
    super(militaryServiceService);
  }

  public MilitaryServiceInclusiveList : MilitaryServiceInclusive[] = [];
  
  public currentMilitaryServiceInclusive : MilitaryServiceInclusive = new MilitaryServiceInclusive();

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
      .CollectionOfMilitaryServiceInclusive(this.militaryService)
      .then(militaryServiceInclusiveList => {
        this.MilitaryServiceInclusiveList = militaryServiceInclusiveList;
        this.currentMilitaryServiceInclusive = new MilitaryServiceInclusive();
      });
  }

  public onSelect(i: number) {
    this.currentMilitaryServiceInclusive = this.MilitaryServiceInclusiveList[i];
    if (MilitaryServiceInclusive.NotConfirm(this.currentMilitaryServiceInclusive))
      this.currentMilitaryServiceInclusive = new MilitaryServiceInclusive();
  }

  public onDblClicked(masterUI: MilitaryServiceInclusiveMasterUI) {
    if (MilitaryServiceInclusive.NotConfirm(this.currentMilitaryServiceInclusive))
      return;
    masterUI.ShowDialog(this.currentMilitaryServiceInclusive);
  }

  public onAdd(editUI: MilitaryServiceInclusiveEditUI) {
    editUI.MilitaryService = this.militaryService;
    editUI.ShowDialog(new MilitaryServiceInclusive());
  }

  public onEdit(editUI: MilitaryServiceInclusiveEditUI) {
    if (MilitaryServiceInclusive.NotConfirm(this.currentMilitaryServiceInclusive))
      return;
    editUI.ShowDialog(this.currentMilitaryServiceInclusive);
  }

  public onDelete(deleteUI: MilitaryServiceInclusiveDeleteUI) {
    if (MilitaryServiceInclusive.NotConfirm(this.currentMilitaryServiceInclusive))
      return;
    deleteUI.ShowDialog(this.currentMilitaryServiceInclusive);
  }

  public onEditModal_Closed(militaryServiceInclusive: MilitaryServiceInclusive) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
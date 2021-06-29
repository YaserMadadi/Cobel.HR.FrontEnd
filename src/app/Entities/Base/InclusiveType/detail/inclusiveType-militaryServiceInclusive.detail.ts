import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { InclusiveType } from '../inclusiveType';
import { InclusiveTypeService } from '../inclusiveType.service';

import { MilitaryServiceInclusive } from '../../../HR/MilitaryServiceInclusive/militaryServiceInclusive';
import { MilitaryServiceInclusiveMasterUI } from '../../../HR/MilitaryServiceInclusive/master/militaryServiceInclusive.master';
import { MilitaryServiceInclusiveEditUI } from '../../../HR/MilitaryServiceInclusive/edit/militaryServiceInclusive.edit';
import { MilitaryServiceInclusiveDeleteUI } from '../../../HR/MilitaryServiceInclusive/delete/militaryServiceInclusive.delete';



@Component({
  selector: 'inclusiveType-militaryServiceInclusive-detail',
  templateUrl: './inclusiveType-militaryServiceInclusive.detail.html',
  styleUrls: ['./inclusiveType-militaryServiceInclusive.detail.css'],
  providers: [InclusiveTypeService]
}) 

@Injectable()
export class InclusiveType_MilitaryServiceInclusive_DetailUI extends DetailView<InclusiveType> {

  constructor(private inclusiveTypeService: InclusiveTypeService) {
    super(inclusiveTypeService);
  }

  public MilitaryServiceInclusiveList : MilitaryServiceInclusive[] = [];
  
  public currentMilitaryServiceInclusive : MilitaryServiceInclusive = new MilitaryServiceInclusive();

  private inclusiveType: InclusiveType = new InclusiveType();

  @Input()
  public set InclusiveType(value: InclusiveType) {
    this.inclusiveType = value;
    this.onReload();
  }

  public get InclusiveType(): InclusiveType { return this.inclusiveType }

  public onReload(){
    if (InclusiveType.NotConfirm(this.inclusiveType))
      return;
    this.inclusiveTypeService
      .ServiceCollection
      .CollectionOfMilitaryServiceInclusive(this.inclusiveType)
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
    editUI.InclusiveType = this.inclusiveType;
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
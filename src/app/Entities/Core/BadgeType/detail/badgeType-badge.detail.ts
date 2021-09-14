import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { BadgeType } from '../badgeType';
import { BadgeTypeService } from '../badgeType.service';

import { Badge } from '../../Badge/badge';
import { BadgeMasterUI } from '../../Badge/master/badge.master';
import { BadgeEditUI } from '../../Badge/edit/badge.edit';
import { BadgeDeleteUI } from '../../Badge/delete/badge.delete';



@Component({
  selector: 'badgeType-badge-detail',
  templateUrl: './badgeType-badge.detail.html',
  styleUrls: ['./badgeType-badge.detail.css'],
  providers: [BadgeTypeService]
}) 

@Injectable()
export class BadgeType_Badge_DetailUI extends DetailView<BadgeType> {

  constructor(private badgeTypeService: BadgeTypeService) {
    super(badgeTypeService);
  }

  public BadgeList : Badge[] = [];
  
  public currentBadge : Badge = new Badge();

  private badgeType: BadgeType = new BadgeType();

  @Input()
  public set BadgeType(value: BadgeType) {
    this.badgeType = value;
    this.onReload();
  }

  public get BadgeType(): BadgeType { return this.badgeType }

  public onReload(){
    if (BadgeType.NotConfirm(this.badgeType))
      return;
    this.badgeTypeService
      .ServiceCollection
      .CollectionOfBadge(this.badgeType)
      .then(badgeList => {
        this.BadgeList = badgeList;
        this.currentBadge = new Badge();
      });
  }

  public onSelect(i: number) {
    this.currentBadge = this.BadgeList[i];
    if (Badge.NotConfirm(this.currentBadge))
      this.currentBadge = new Badge();
  }

  public onDblClicked(masterUI: BadgeMasterUI) {
    if (Badge.NotConfirm(this.currentBadge))
      return;
    masterUI.ShowDialog(this.currentBadge);
  }

  public onAdd(editUI: BadgeEditUI) {
    editUI.BadgeType = this.badgeType;
    editUI.ShowDialog(new Badge());
  }

  public onEdit(editUI: BadgeEditUI) {
    if (Badge.NotConfirm(this.currentBadge))
      return;
    editUI.ShowDialog(this.currentBadge);
  }

  public onDelete(deleteUI: BadgeDeleteUI) {
    if (Badge.NotConfirm(this.currentBadge))
      return;
    deleteUI.ShowDialog(this.currentBadge);
  }

  public onEditModal_Closed(badge: Badge) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}

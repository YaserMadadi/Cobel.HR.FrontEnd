import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { ConclusionType } from '../conclusionType';
import { ConclusionTypeService } from '../conclusionType.service';

import { Conclusion } from '../../Conclusion/conclusion';
import { ConclusionMasterUI } from '../../Conclusion/master/conclusion.master';
import { ConclusionEditUI } from '../../Conclusion/edit/conclusion.edit';
import { ConclusionDeleteUI } from '../../Conclusion/delete/conclusion.delete';



@Component({
  selector: 'conclusionType-conclusion-detail',
  templateUrl: './conclusionType-conclusion.detail.html',
  styleUrls: ['./conclusionType-conclusion.detail.css']
})
export class ConclusionType_Conclusion_DetailUI extends DetailView<ConclusionType> {

  constructor(private conclusionTypeService: ConclusionTypeService) {
    super(conclusionTypeService);
  }

  public ConclusionList : Conclusion[] = [];
  
  public currentConclusion : Conclusion = new Conclusion();

  private conclusionType: ConclusionType = new ConclusionType();

  @Input()
  public set ConclusionType(value: ConclusionType) {
    this.conclusionType = value;
    this.onReload();
  }

  public get ConclusionType(): ConclusionType { return this.conclusionType }

  public onReload(){
    if (ConclusionType.NotConfirm(this.conclusionType))
      return;
    this.conclusionTypeService
      .ServiceCollection
      .CollectionOfConclusion(this.conclusionType)
      .then(conclusionList => {
        this.ConclusionList = conclusionList;
        this.currentConclusion = new Conclusion();
      });
  }

  public onSelect(i: number) {
    this.currentConclusion = this.ConclusionList[i];
    if (Conclusion.NotConfirm(this.currentConclusion))
      this.currentConclusion = new Conclusion();
  }

  public onDblClicked(masterUI: ConclusionMasterUI) {
    if (Conclusion.NotConfirm(this.currentConclusion))
      return;
    masterUI.ShowDialog(this.currentConclusion);
  }

  public onAdd(editUI: ConclusionEditUI) {
    editUI.ConclusionType = this.conclusionType;
    editUI.ShowDialog(new Conclusion());
  }

  public onEdit(editUI: ConclusionEditUI) {
    if (Conclusion.NotConfirm(this.currentConclusion))
      return;
    editUI.ShowDialog(this.currentConclusion);
  }

  public onDelete(deleteUI: ConclusionDeleteUI) {
    if (Conclusion.NotConfirm(this.currentConclusion))
      return;
    deleteUI.ShowDialog(this.currentConclusion);
  }

  public onEditModal_Closed(conclusion: Conclusion) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
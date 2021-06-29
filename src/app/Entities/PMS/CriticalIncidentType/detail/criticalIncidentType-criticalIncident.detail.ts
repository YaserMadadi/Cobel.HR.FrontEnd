import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { CriticalIncidentType } from '../criticalIncidentType';
import { CriticalIncidentTypeService } from '../criticalIncidentType.service';

import { CriticalIncident } from '../../CriticalIncident/criticalIncident';
import { CriticalIncidentMasterUI } from '../../CriticalIncident/master/criticalIncident.master';
import { CriticalIncidentEditUI } from '../../CriticalIncident/edit/criticalIncident.edit';
import { CriticalIncidentDeleteUI } from '../../CriticalIncident/delete/criticalIncident.delete';



@Component({
  selector: 'criticalIncidentType-criticalIncident-detail',
  templateUrl: './criticalIncidentType-criticalIncident.detail.html',
  styleUrls: ['./criticalIncidentType-criticalIncident.detail.css'],
  providers: [CriticalIncidentTypeService]
}) 

@Injectable()
export class CriticalIncidentType_CriticalIncident_DetailUI extends DetailView<CriticalIncidentType> {

  constructor(private criticalIncidentTypeService: CriticalIncidentTypeService) {
    super(criticalIncidentTypeService);
  }

  public CriticalIncidentList : CriticalIncident[] = [];
  
  public currentCriticalIncident : CriticalIncident = new CriticalIncident();

  private criticalIncidentType: CriticalIncidentType = new CriticalIncidentType();

  @Input()
  public set CriticalIncidentType(value: CriticalIncidentType) {
    this.criticalIncidentType = value;
    this.onReload();
  }

  public get CriticalIncidentType(): CriticalIncidentType { return this.criticalIncidentType }

  public onReload(){
    if (CriticalIncidentType.NotConfirm(this.criticalIncidentType))
      return;
    this.criticalIncidentTypeService
      .ServiceCollection
      .CollectionOfCriticalIncident(this.criticalIncidentType)
      .then(criticalIncidentList => {
        this.CriticalIncidentList = criticalIncidentList;
        this.currentCriticalIncident = new CriticalIncident();
      });
  }

  public onSelect(i: number) {
    this.currentCriticalIncident = this.CriticalIncidentList[i];
    if (CriticalIncident.NotConfirm(this.currentCriticalIncident))
      this.currentCriticalIncident = new CriticalIncident();
  }

  public onDblClicked(masterUI: CriticalIncidentMasterUI) {
    if (CriticalIncident.NotConfirm(this.currentCriticalIncident))
      return;
    masterUI.ShowDialog(this.currentCriticalIncident);
  }

  public onAdd(editUI: CriticalIncidentEditUI) {
    editUI.CriticalIncidentType = this.criticalIncidentType;
    editUI.ShowDialog(new CriticalIncident());
  }

  public onEdit(editUI: CriticalIncidentEditUI) {
    if (CriticalIncident.NotConfirm(this.currentCriticalIncident))
      return;
    editUI.ShowDialog(this.currentCriticalIncident);
  }

  public onDelete(deleteUI: CriticalIncidentDeleteUI) {
    if (CriticalIncident.NotConfirm(this.currentCriticalIncident))
      return;
    deleteUI.ShowDialog(this.currentCriticalIncident);
  }

  public onEditModal_Closed(criticalIncident: CriticalIncident) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
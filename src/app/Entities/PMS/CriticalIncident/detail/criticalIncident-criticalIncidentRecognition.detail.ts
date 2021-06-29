import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { CriticalIncident } from '../criticalIncident';
import { CriticalIncidentService } from '../criticalIncident.service';

import { CriticalIncidentRecognition } from '../../CriticalIncidentRecognition/criticalIncidentRecognition';
import { CriticalIncidentRecognitionMasterUI } from '../../CriticalIncidentRecognition/master/criticalIncidentRecognition.master';
import { CriticalIncidentRecognitionEditUI } from '../../CriticalIncidentRecognition/edit/criticalIncidentRecognition.edit';
import { CriticalIncidentRecognitionDeleteUI } from '../../CriticalIncidentRecognition/delete/criticalIncidentRecognition.delete';



@Component({
  selector: 'criticalIncident-criticalIncidentRecognition-detail',
  templateUrl: './criticalIncident-criticalIncidentRecognition.detail.html',
  styleUrls: ['./criticalIncident-criticalIncidentRecognition.detail.css'],
  providers: [CriticalIncidentService]
}) 

@Injectable()
export class CriticalIncident_CriticalIncidentRecognition_DetailUI extends DetailView<CriticalIncident> {

  constructor(private criticalIncidentService: CriticalIncidentService) {
    super(criticalIncidentService);
  }

  public CriticalIncidentRecognitionList : CriticalIncidentRecognition[] = [];
  
  public currentCriticalIncidentRecognition : CriticalIncidentRecognition = new CriticalIncidentRecognition();

  private criticalIncident: CriticalIncident = new CriticalIncident();

  @Input()
  public set CriticalIncident(value: CriticalIncident) {
    this.criticalIncident = value;
    this.onReload();
  }

  public get CriticalIncident(): CriticalIncident { return this.criticalIncident }

  public onReload(){
    if (CriticalIncident.NotConfirm(this.criticalIncident))
      return;
    this.criticalIncidentService
      .ServiceCollection
      .CollectionOfCriticalIncidentRecognition(this.criticalIncident)
      .then(criticalIncidentRecognitionList => {
        this.CriticalIncidentRecognitionList = criticalIncidentRecognitionList;
        this.currentCriticalIncidentRecognition = new CriticalIncidentRecognition();
      });
  }

  public onSelect(i: number) {
    this.currentCriticalIncidentRecognition = this.CriticalIncidentRecognitionList[i];
    if (CriticalIncidentRecognition.NotConfirm(this.currentCriticalIncidentRecognition))
      this.currentCriticalIncidentRecognition = new CriticalIncidentRecognition();
  }

  public onDblClicked(masterUI: CriticalIncidentRecognitionMasterUI) {
    if (CriticalIncidentRecognition.NotConfirm(this.currentCriticalIncidentRecognition))
      return;
    masterUI.ShowDialog(this.currentCriticalIncidentRecognition);
  }

  public onAdd(editUI: CriticalIncidentRecognitionEditUI) {
    editUI.CriticalIncident = this.criticalIncident;
    editUI.ShowDialog(new CriticalIncidentRecognition());
  }

  public onEdit(editUI: CriticalIncidentRecognitionEditUI) {
    if (CriticalIncidentRecognition.NotConfirm(this.currentCriticalIncidentRecognition))
      return;
    editUI.ShowDialog(this.currentCriticalIncidentRecognition);
  }

  public onDelete(deleteUI: CriticalIncidentRecognitionDeleteUI) {
    if (CriticalIncidentRecognition.NotConfirm(this.currentCriticalIncidentRecognition))
      return;
    deleteUI.ShowDialog(this.currentCriticalIncidentRecognition);
  }

  public onEditModal_Closed(criticalIncidentRecognition: CriticalIncidentRecognition) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { CompetencyItemKPI } from '../competencyItemKPI';
import { CompetencyItemKPIService } from '../competencyItemKPI.service';
import { CompetencyItemKPIMasterUI } from '../master/competencyItemKPI.master';
import { CompetencyItemKPIEditUI } from '../edit/competencyItemKPI.edit';
import { CompetencyItemKPIDeleteUI } from '../delete/competencyItemKPI.delete';

import { CompetencyItem } from '../../CompetencyItem/competencyItem';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { BehavioralKPIEditUI } from '../../BehavioralKPI/edit/behavioralKPI.edit';
import { BehavioralKPI } from '../../BehavioralKPI/behavioralKPI';



@Component({
  selector: 'pms-competencyItemKPI-index',
  templateUrl: './competencyItemKPI.index.html',
  styleUrls: ['./competencyItemKPI.index.css']
})
export class CompetencyItemKPIIndexUI extends IndexView<CompetencyItemKPI> implements AfterViewInit, IIndexView<CompetencyItemKPI> {

  constructor(private competencyItemKPIService: CompetencyItemKPIService) {
    super(competencyItemKPIService);
    this.filterInstance = CompetencyItemKPI.SeekInstance();
    this.currentInstance = new CompetencyItemKPI();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region BehavioralKPI

  public behavioralKPI_Clicked(behavioralKPIEditUI: BehavioralKPIEditUI) {
    behavioralKPIEditUI.CompetencyItemKPI = this.currentInstance;
    behavioralKPIEditUI.ShowDialog(new BehavioralKPI());
  }
                    
  public behavioralKPIEditUI_Closed(behavioralKPI: BehavioralKPI) {
    if (!behavioralKPI)
      return;
    this.onRefresh();
  }
  
  //#endregion BehavioralKPI


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(competencyItemKPIEditUI: CompetencyItemKPIEditUI){
    competencyItemKPIEditUI.ShowDialog(new CompetencyItemKPI());
  }

  resetFilter() {
    this.filterInstance = CompetencyItemKPI.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(competencyItemKPI: CompetencyItemKPI) {
    this.onRefresh();
    this.currentInstance = new CompetencyItemKPI();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
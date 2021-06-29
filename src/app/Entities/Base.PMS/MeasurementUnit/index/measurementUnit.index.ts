import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { MeasurementUnit } from '../measurementUnit';
import { MeasurementUnitService } from '../measurementUnit.service';
import { MeasurementUnitMasterUI } from '../master/measurementUnit.master';
import { MeasurementUnitEditUI } from '../edit/measurementUnit.edit';
import { MeasurementUnitDeleteUI } from '../delete/measurementUnit.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { FunctionalKPIEditUI } from '../../../PMS/FunctionalKPI/edit/functionalKPI.edit';
import { FunctionalKPI } from '../../../PMS/FunctionalKPI/functionalKPI';



@Component({
  selector: 'base.pms-measurementUnit-index',
  templateUrl: './measurementUnit.index.html',
  styleUrls: ['./measurementUnit.index.css']
})
export class MeasurementUnitIndexUI extends IndexView<MeasurementUnit> implements AfterViewInit, IIndexView<MeasurementUnit> {

  constructor(private measurementUnitService: MeasurementUnitService) {
    super(measurementUnitService);
    this.filterInstance = MeasurementUnit.SeekInstance();
    this.currentInstance = new MeasurementUnit();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region FunctionalKPI

  public functionalKPI_Clicked(functionalKPIEditUI: FunctionalKPIEditUI) {
    functionalKPIEditUI.MeasurementUnit = this.currentInstance;
    functionalKPIEditUI.ShowDialog(new FunctionalKPI());
  }
                    
  public functionalKPIEditUI_Closed(functionalKPI: FunctionalKPI) {
    if (!functionalKPI)
      return;
    this.onRefresh();
  }
  
  //#endregion FunctionalKPI


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(measurementUnitEditUI: MeasurementUnitEditUI){
    measurementUnitEditUI.ShowDialog(new MeasurementUnit());
  }

  resetFilter() {
    this.filterInstance = MeasurementUnit.SeekInstance();
    
    
  }

  public onEditModalClosed(measurementUnit: MeasurementUnit) {
    this.onRefresh();
    this.currentInstance = new MeasurementUnit();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
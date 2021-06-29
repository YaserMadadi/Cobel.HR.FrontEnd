import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { MeasurementUnit } from '../measurementUnit';
import { MeasurementUnitService } from '../measurementUnit.service';

import { FunctionalKPI } from '../../../PMS/FunctionalKPI/functionalKPI';
import { FunctionalKPIMasterUI } from '../../../PMS/FunctionalKPI/master/functionalKPI.master';
import { FunctionalKPIEditUI } from '../../../PMS/FunctionalKPI/edit/functionalKPI.edit';
import { FunctionalKPIDeleteUI } from '../../../PMS/FunctionalKPI/delete/functionalKPI.delete';



@Component({
  selector: 'measurementUnit-functionalKPI-detail',
  templateUrl: './measurementUnit-functionalKPI.detail.html',
  styleUrls: ['./measurementUnit-functionalKPI.detail.css'],
  providers: [MeasurementUnitService]
}) 

@Injectable()
export class MeasurementUnit_FunctionalKPI_DetailUI extends DetailView<MeasurementUnit> {

  constructor(private measurementUnitService: MeasurementUnitService) {
    super(measurementUnitService);
  }

  public FunctionalKPIList : FunctionalKPI[] = [];
  
  public currentFunctionalKPI : FunctionalKPI = new FunctionalKPI();

  private measurementUnit: MeasurementUnit = new MeasurementUnit();

  @Input()
  public set MeasurementUnit(value: MeasurementUnit) {
    this.measurementUnit = value;
    this.onReload();
  }

  public get MeasurementUnit(): MeasurementUnit { return this.measurementUnit }

  public onReload(){
    if (MeasurementUnit.NotConfirm(this.measurementUnit))
      return;
    this.measurementUnitService
      .ServiceCollection
      .CollectionOfFunctionalKPI(this.measurementUnit)
      .then(functionalKPIList => {
        this.FunctionalKPIList = functionalKPIList;
        this.currentFunctionalKPI = new FunctionalKPI();
      });
  }

  public onSelect(i: number) {
    this.currentFunctionalKPI = this.FunctionalKPIList[i];
    if (FunctionalKPI.NotConfirm(this.currentFunctionalKPI))
      this.currentFunctionalKPI = new FunctionalKPI();
  }

  public onDblClicked(masterUI: FunctionalKPIMasterUI) {
    if (FunctionalKPI.NotConfirm(this.currentFunctionalKPI))
      return;
    masterUI.ShowDialog(this.currentFunctionalKPI);
  }

  public onAdd(editUI: FunctionalKPIEditUI) {
    editUI.MeasurementUnit = this.measurementUnit;
    editUI.ShowDialog(new FunctionalKPI());
  }

  public onEdit(editUI: FunctionalKPIEditUI) {
    if (FunctionalKPI.NotConfirm(this.currentFunctionalKPI))
      return;
    editUI.ShowDialog(this.currentFunctionalKPI);
  }

  public onDelete(deleteUI: FunctionalKPIDeleteUI) {
    if (FunctionalKPI.NotConfirm(this.currentFunctionalKPI))
      return;
    deleteUI.ShowDialog(this.currentFunctionalKPI);
  }

  public onEditModal_Closed(functionalKPI: FunctionalKPI) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
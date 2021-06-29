import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { PropertyOption } from '../propertyOption';
import { PropertyOptionService } from '../propertyOption.service';
import { PropertyOptionMasterUI } from '../master/propertyOption.master';
import { PropertyOptionEditUI } from '../edit/propertyOption.edit';
import { PropertyOptionDeleteUI } from '../delete/propertyOption.delete';

import { Property } from '../../Property/property';
import { PropertyEditUI } from '../../Property/edit/property.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'core-propertyOption-index',
  templateUrl: './propertyOption.index.html',
  styleUrls: ['./propertyOption.index.css']
})
export class PropertyOptionIndexUI extends IndexView<PropertyOption> implements AfterViewInit, IIndexView<PropertyOption> {

  constructor(private propertyOptionService: PropertyOptionService) {
    super(propertyOptionService);
    this.filterInstance = PropertyOption.SeekInstance();
    this.currentInstance = new PropertyOption();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(propertyOptionEditUI: PropertyOptionEditUI){
    propertyOptionEditUI.ShowDialog(new PropertyOption());
  }

  resetFilter() {
    this.filterInstance = PropertyOption.SeekInstance();
    
    
  }

  public onEditModalClosed(propertyOption: PropertyOption) {
    this.onRefresh();
    this.currentInstance = new PropertyOption();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
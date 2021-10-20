import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Property } from '../property';
import { PropertyService } from '../property.service';
import { PropertyMasterUI } from '../master/property.master';
import { PropertyEditUI } from '../edit/property.edit';
import { PropertyDeleteUI } from '../delete/property.delete';

import { Entity } from '../../Entity/entity';
import { EntityEditUI } from '../../Entity/edit/entity.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { PropertyOptionEditUI } from '../../PropertyOption/edit/propertyOption.edit';
import { PropertyOption } from '../../PropertyOption/propertyOption';



@Component({
  selector: 'core-property-index',
  templateUrl: './property.index.html',
  styleUrls: ['./property.index.css']
})
export class PropertyIndexUI extends IndexView<Property> implements AfterViewInit, IIndexView<Property> {

  constructor(private propertyService: PropertyService) {
    super(propertyService);
    this.filterInstance = Property.SeekInstance();
    this.currentInstance = new Property();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region PropertyOption

  public propertyOption_Clicked(propertyOptionEditUI: PropertyOptionEditUI) {
    propertyOptionEditUI.Property = this.currentInstance;
    propertyOptionEditUI.ShowDialog(new PropertyOption());
  }
                    
  public propertyOptionEditUI_Closed(propertyOption: PropertyOption) {
    if (!propertyOption)
      return;
    this.onRefresh();
  }
  
  //#endregion PropertyOption


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(propertyEditUI: PropertyEditUI){
    propertyEditUI.ShowDialog(new Property());
  }

  resetFilter() {
    this.filterInstance = Property.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(property: Property) {
    this.onRefresh();
    this.currentInstance = new Property();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
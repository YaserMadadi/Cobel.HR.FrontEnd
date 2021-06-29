import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Property } from '../property';
import { PropertyService } from '../property.service';

import { PropertyOption } from '../../PropertyOption/propertyOption';
import { PropertyOptionMasterUI } from '../../PropertyOption/master/propertyOption.master';
import { PropertyOptionEditUI } from '../../PropertyOption/edit/propertyOption.edit';
import { PropertyOptionDeleteUI } from '../../PropertyOption/delete/propertyOption.delete';



@Component({
  selector: 'property-propertyOption-detail',
  templateUrl: './property-propertyOption.detail.html',
  styleUrls: ['./property-propertyOption.detail.css'],
  providers: [PropertyService]
}) 

@Injectable()
export class Property_PropertyOption_DetailUI extends DetailView<Property> {

  constructor(private propertyService: PropertyService) {
    super(propertyService);
  }

  public PropertyOptionList : PropertyOption[] = [];
  
  public currentPropertyOption : PropertyOption = new PropertyOption();

  private property: Property = new Property();

  @Input()
  public set Property(value: Property) {
    this.property = value;
    this.onReload();
  }

  public get Property(): Property { return this.property }

  public onReload(){
    if (Property.NotConfirm(this.property))
      return;
    this.propertyService
      .ServiceCollection
      .CollectionOfPropertyOption(this.property)
      .then(propertyOptionList => {
        this.PropertyOptionList = propertyOptionList;
        this.currentPropertyOption = new PropertyOption();
      });
  }

  public onSelect(i: number) {
    this.currentPropertyOption = this.PropertyOptionList[i];
    if (PropertyOption.NotConfirm(this.currentPropertyOption))
      this.currentPropertyOption = new PropertyOption();
  }

  public onDblClicked(masterUI: PropertyOptionMasterUI) {
    if (PropertyOption.NotConfirm(this.currentPropertyOption))
      return;
    masterUI.ShowDialog(this.currentPropertyOption);
  }

  public onAdd(editUI: PropertyOptionEditUI) {
    editUI.Property = this.property;
    editUI.ShowDialog(new PropertyOption());
  }

  public onEdit(editUI: PropertyOptionEditUI) {
    if (PropertyOption.NotConfirm(this.currentPropertyOption))
      return;
    editUI.ShowDialog(this.currentPropertyOption);
  }

  public onDelete(deleteUI: PropertyOptionDeleteUI) {
    if (PropertyOption.NotConfirm(this.currentPropertyOption))
      return;
    deleteUI.ShowDialog(this.currentPropertyOption);
  }

  public onEditModal_Closed(propertyOption: PropertyOption) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
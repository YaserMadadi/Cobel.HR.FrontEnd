import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Property } from '../property';
import { PropertyService } from '../property.service';
import { PropertyDeleteUI } from '../delete/property.delete';
import { PropertyEditUI } from '../edit/property.edit';
import { PropertyOptionService } from '../../PropertyOption/propertyOption.service';



@Component({
  selector: 'core-property-master',
  templateUrl: './property.master.html',
  styleUrls: ['./property.master.css'],
  providers: [
    PropertyService,
    PropertyOptionService,
  ]
})
export class PropertyMasterUI extends MasterModal<Property> {

  constructor(private propertyService: PropertyService) {
    super(propertyService);
  }
}
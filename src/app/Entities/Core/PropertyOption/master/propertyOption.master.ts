import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { PropertyOption } from '../propertyOption';
import { PropertyOptionService } from '../propertyOption.service';
import { PropertyOptionDeleteUI } from '../delete/propertyOption.delete';
import { PropertyOptionEditUI } from '../edit/propertyOption.edit';



@Component({
  selector: 'core-propertyOption-master',
  templateUrl: './propertyOption.master.html',
  styleUrls: ['./propertyOption.master.css'],
  providers: [
    PropertyOptionService,
    
  ]
})
export class PropertyOptionMasterUI extends MasterModal<PropertyOption> {

  constructor(private propertyOptionService: PropertyOptionService) {
    super(propertyOptionService);
  }
}
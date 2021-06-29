import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { PropertyOption } from '../propertyOption';
import { PropertyOptionService } from '../propertyOption.service';


@Component({
  selector: 'core-propertyOption-delete',
  templateUrl: './propertyOption.delete.html',
  styleUrls: ['./propertyOption.delete.css'],
  providers: [PropertyOptionService]
})
export class PropertyOptionDeleteUI extends DeleteModal<PropertyOption> {

    constructor(private propertyOptionService: PropertyOptionService){
        super(propertyOptionService);
    }

}
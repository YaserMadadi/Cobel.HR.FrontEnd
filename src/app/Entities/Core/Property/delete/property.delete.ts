import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Property } from '../property';
import { PropertyService } from '../property.service';


@Component({
  selector: 'core-property-delete',
  templateUrl: './property.delete.html',
  styleUrls: ['./property.delete.css'],
  
})
export class PropertyDeleteUI extends DeleteModal<Property> {

    constructor(private propertyService: PropertyService){
        super(propertyService);
    }

}
import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Property } from './property';

import { PropertyOption } from '../PropertyOption/propertyOption';


@Injectable({ providedIn: 'root' })
export class PropertyServiceCollection extends ServiceCollection<Property> {

  constructor(public API_Operation: API_Operation<Property>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfPropertyOption(property: Property, propertyOption: PropertyOption = PropertyOption.SeekInstance()): Promise<PropertyOption[]> {
    return super.CollectionOf<PropertyOption>(property, propertyOption);
  }

	//endregion
}
import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { FieldCategory } from '../fieldCategory';
import { FieldCategoryService } from '../fieldCategory.service';


@Component({
  selector: 'base-fieldCategory-delete',
  templateUrl: './fieldCategory.delete.html',
  styleUrls: ['./fieldCategory.delete.css'],
})
export class FieldCategoryDeleteUI extends DeleteModal<FieldCategory> {

    constructor(private fieldCategoryService: FieldCategoryService){
        super(fieldCategoryService);
    }

}
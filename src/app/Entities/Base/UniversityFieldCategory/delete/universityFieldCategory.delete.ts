import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { UniversityFieldCategory } from '../universityFieldCategory';
import { UniversityFieldCategoryService } from '../universityFieldCategory.service';


@Component({
  selector: 'base-universityFieldCategory-delete',
  templateUrl: './universityFieldCategory.delete.html',
  styleUrls: ['./universityFieldCategory.delete.css'],
  
})
export class UniversityFieldCategoryDeleteUI extends DeleteModal<UniversityFieldCategory> {

    constructor(private universityFieldCategoryService: UniversityFieldCategoryService){
        super(universityFieldCategoryService);
    }

}
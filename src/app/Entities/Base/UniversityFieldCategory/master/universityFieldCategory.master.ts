import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { UniversityFieldCategory } from '../universityFieldCategory';
import { UniversityFieldCategoryService } from '../universityFieldCategory.service';
import { UniversityFieldCategoryDeleteUI } from '../delete/universityFieldCategory.delete';
import { UniversityFieldCategoryEditUI } from '../edit/universityFieldCategory.edit';
import { FieldOfStudyService } from '../../FieldOfStudy/fieldOfStudy.service';



@Component({
  selector: 'base-universityFieldCategory-master',
  templateUrl: './universityFieldCategory.master.html',
  styleUrls: ['./universityFieldCategory.master.css'],
  
})
export class UniversityFieldCategoryMasterUI extends MasterModal<UniversityFieldCategory> {

  constructor(private universityFieldCategoryService: UniversityFieldCategoryService) {
    super(universityFieldCategoryService);
  }
}
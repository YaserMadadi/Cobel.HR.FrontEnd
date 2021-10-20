import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { UniversityFieldCategory } from '../universityFieldCategory';
import { UniversityFieldCategoryService } from '../universityFieldCategory.service';
import { UniversityFieldCategoryMasterUI } from '../master/universityFieldCategory.master';
import { UniversityFieldCategoryEditUI } from '../edit/universityFieldCategory.edit';
import { UniversityFieldCategoryDeleteUI } from '../delete/universityFieldCategory.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { FieldOfStudyEditUI } from '../../FieldOfStudy/edit/fieldOfStudy.edit';
import { FieldOfStudy } from '../../FieldOfStudy/fieldOfStudy';



@Component({
  selector: 'base-universityFieldCategory-index',
  templateUrl: './universityFieldCategory.index.html',
  styleUrls: ['./universityFieldCategory.index.css']
})
export class UniversityFieldCategoryIndexUI extends IndexView<UniversityFieldCategory> implements AfterViewInit, IIndexView<UniversityFieldCategory> {

  constructor(private universityFieldCategoryService: UniversityFieldCategoryService) {
    super(universityFieldCategoryService);
    this.filterInstance = UniversityFieldCategory.SeekInstance();
    this.currentInstance = new UniversityFieldCategory();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region FieldOfStudy

  public fieldOfStudy_Clicked(fieldOfStudyEditUI: FieldOfStudyEditUI) {
    fieldOfStudyEditUI.UniversityFieldCategory = this.currentInstance;
    fieldOfStudyEditUI.ShowDialog(new FieldOfStudy());
  }
                    
  public fieldOfStudyEditUI_Closed(fieldOfStudy: FieldOfStudy) {
    if (!fieldOfStudy)
      return;
    this.onRefresh();
  }
  
  //#endregion FieldOfStudy


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(universityFieldCategoryEditUI: UniversityFieldCategoryEditUI){
    universityFieldCategoryEditUI.ShowDialog(new UniversityFieldCategory());
  }

  resetFilter() {
    this.filterInstance = UniversityFieldCategory.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(universityFieldCategory: UniversityFieldCategory) {
    this.onRefresh();
    this.currentInstance = new UniversityFieldCategory();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
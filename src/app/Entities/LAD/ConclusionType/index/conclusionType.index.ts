import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { ConclusionType } from '../conclusionType';
import { ConclusionTypeService } from '../conclusionType.service';
import { ConclusionTypeMasterUI } from '../master/conclusionType.master';
import { ConclusionTypeEditUI } from '../edit/conclusionType.edit';
import { ConclusionTypeDeleteUI } from '../delete/conclusionType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { ConclusionEditUI } from '../../Conclusion/edit/conclusion.edit';
import { Conclusion } from '../../Conclusion/conclusion';



@Component({
  selector: 'lad-conclusionType-index',
  templateUrl: './conclusionType.index.html',
  styleUrls: ['./conclusionType.index.css']
})
export class ConclusionTypeIndexUI extends IndexView<ConclusionType> implements AfterViewInit, IIndexView<ConclusionType> {

  constructor(private conclusionTypeService: ConclusionTypeService) {
    super(conclusionTypeService);
    this.filterInstance = ConclusionType.SeekInstance();
    this.currentInstance = new ConclusionType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region Conclusion

  public conclusion_Clicked(conclusionEditUI: ConclusionEditUI) {
    conclusionEditUI.ConclusionType = this.currentInstance;
    conclusionEditUI.ShowDialog(new Conclusion());
  }
                    
  public conclusionEditUI_Closed(conclusion: Conclusion) {
    if (!conclusion)
      return;
    this.onRefresh();
  }
  
  //#endregion Conclusion


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(conclusionTypeEditUI: ConclusionTypeEditUI){
    conclusionTypeEditUI.ShowDialog(new ConclusionType());
  }

  resetFilter() {
    this.filterInstance = ConclusionType.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(conclusionType: ConclusionType) {
    this.onRefresh();
    this.currentInstance = new ConclusionType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
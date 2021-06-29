import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Synonym } from '../synonym';
import { SynonymService } from '../synonym.service';
import { SynonymMasterUI } from '../master/synonym.master';
import { SynonymEditUI } from '../edit/synonym.edit';
import { SynonymDeleteUI } from '../delete/synonym.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'xcode-synonym-index',
  templateUrl: './synonym.index.html',
  styleUrls: ['./synonym.index.css']
})
export class SynonymIndexUI extends IndexView<Synonym> implements AfterViewInit, IIndexView<Synonym> {

  constructor(private synonymService: SynonymService) {
    super(synonymService);
    this.filterInstance = Synonym.SeekInstance();
    this.currentInstance = new Synonym();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(synonymEditUI: SynonymEditUI){
    synonymEditUI.ShowDialog(new Synonym());
  }

  resetFilter() {
    this.filterInstance = Synonym.SeekInstance();
    
    
  }

  public onEditModalClosed(synonym: Synonym) {
    this.onRefresh();
    this.currentInstance = new Synonym();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
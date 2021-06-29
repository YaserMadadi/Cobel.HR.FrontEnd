import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Religion } from '../religion';
import { ReligionService } from '../religion.service';
import { ReligionMasterUI } from '../master/religion.master';
import { ReligionEditUI } from '../edit/religion.edit';
import { ReligionDeleteUI } from '../delete/religion.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { PersonEditUI } from '../../../HR/Person/edit/person.edit';
import { Person } from '../../../HR/Person/person';



@Component({
  selector: 'base-religion-index',
  templateUrl: './religion.index.html',
  styleUrls: ['./religion.index.css']
})
export class ReligionIndexUI extends IndexView<Religion> implements AfterViewInit, IIndexView<Religion> {

  constructor(private religionService: ReligionService) {
    super(religionService);
    this.filterInstance = Religion.SeekInstance();
    this.currentInstance = new Religion();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region Person

  public person_Clicked(personEditUI: PersonEditUI) {
    personEditUI.Religion = this.currentInstance;
    personEditUI.ShowDialog(new Person());
  }
                    
  public personEditUI_Closed(person: Person) {
    if (!person)
      return;
    this.onRefresh();
  }
  
  //#endregion Person


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(religionEditUI: ReligionEditUI){
    religionEditUI.ShowDialog(new Religion());
  }

  resetFilter() {
    this.filterInstance = Religion.SeekInstance();
    
    
  }

  public onEditModalClosed(religion: Religion) {
    this.onRefresh();
    this.currentInstance = new Religion();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
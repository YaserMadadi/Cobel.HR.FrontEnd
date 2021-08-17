import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Passport } from '../passport';
import { PassportService } from '../passport.service';
import { PassportMasterUI } from '../master/passport.master';
import { PassportEditUI } from '../edit/passport.edit';
import { PassportDeleteUI } from '../delete/passport.delete';

import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-passport-index',
  templateUrl: './passport.index.html',
  styleUrls: ['./passport.index.css']
})
export class PassportIndexUI extends IndexView<Passport> implements AfterViewInit, IIndexView<Passport> {

  constructor(private passportService: PassportService) {
    super(passportService);
    this.filterInstance = Passport.SeekInstance();
    this.currentInstance = new Passport();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(passportEditUI: PassportEditUI){
    passportEditUI.ShowDialog(new Passport());
  }

  resetFilter() {
    this.filterInstance = Passport.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(passport: Passport) {
    this.onRefresh();
    this.currentInstance = new Passport();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
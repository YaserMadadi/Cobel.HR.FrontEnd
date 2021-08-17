import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Country } from '../country';
import { CountryService } from '../country.service';
import { CountryMasterUI } from '../master/country.master';
import { CountryEditUI } from '../edit/country.edit';
import { CountryDeleteUI } from '../delete/country.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'base-country-index',
  templateUrl: './country.index.html',
  styleUrls: ['./country.index.css']
})
export class CountryIndexUI extends IndexView<Country> implements AfterViewInit, IIndexView<Country> {

  constructor(private countryService: CountryService) {
    super(countryService);
    this.filterInstance = Country.SeekInstance();
    this.currentInstance = new Country();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(countryEditUI: CountryEditUI){
    countryEditUI.ShowDialog(new Country());
  }

  resetFilter() {
    this.filterInstance = Country.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(country: Country) {
    this.onRefresh();
    this.currentInstance = new Country();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
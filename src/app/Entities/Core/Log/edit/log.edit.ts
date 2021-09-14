import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Log } from '../log';
import { LogService } from '../log.service';
import { Person } from '../../../HR/Person/person';
import { PersonEditUI } from '../../../HR/Person/edit/person.edit';



@Component({
  selector: 'core-log-edit',
  templateUrl: './log.edit.html',
  styleUrls: ['./log.edit.css']
})
export class LogEditUI extends EditModal<Log> implements IEditModal<Log>  {
  
  constructor(private logService: LogService) {
    super(logService); 
    this.currentInstance = new Log();
  }

  //#region Foreign Entities
	
	//#region -- Person --

  personComponent : ForeignComponent<Person> = new ForeignComponent<Person>(this.logService.PersonService);

  @Input()
  public set Person(value: Person) {
    this.currentInstance.person = this.personComponent.instance = value;
  }  


  //#endregion -- Person --
	//#endregion

  @ViewChild('logEditUI')
  private logEditUI: NgForm;

  Init(log: Log = new Log()) {
    if (log.isNew)
      this.logEditUI.reset();
    this.InitLog(log);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitLog(log: Log){
    this.currentInstance = this.service.CreateInstance();
    if (!log.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.personComponent.instance = log.person;
    } else {
      log.person = this.personComponent.instance;
    }
    this.currentInstance = log;
  }

  ResetForm() {
    this.Person = new Person();
  }
}
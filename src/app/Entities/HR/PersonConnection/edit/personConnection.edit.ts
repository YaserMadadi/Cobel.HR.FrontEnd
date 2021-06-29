import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { PersonConnection } from '../personConnection';
import { PersonConnectionService } from '../personConnection.service';
import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { ConnectionType } from '../../../Base/ConnectionType/connectionType';
import { ConnectionTypeEditUI } from '../../../Base/ConnectionType/edit/connectionType.edit';



@Component({
  selector: 'hr-personConnection-edit',
  templateUrl: './personConnection.edit.html',
  styleUrls: ['./personConnection.edit.css']
})
export class PersonConnectionEditUI extends EditModal<PersonConnection> implements IEditModal<PersonConnection>  {
  
  constructor(private personConnectionService: PersonConnectionService) {
    super(personConnectionService); 
    this.currentInstance = new PersonConnection();
  }

  //#region Foreign Entities
	
	//#region -- Person --

  personComponent : ForeignComponent<Person> = new ForeignComponent<Person>(this.personConnectionService.PersonService);

  @Input()
  public set Person(value: Person) {
    this.currentInstance.person = this.personComponent.instance = value;
  }  


  //#endregion -- Person --
	//#region -- ConnectionType --

  connectionTypeComponent : ForeignComponent<ConnectionType> = new ForeignComponent<ConnectionType>(this.personConnectionService.ConnectionTypeService);

  @Input()
  public set ConnectionType(value: ConnectionType) {
    this.currentInstance.connectionType = this.connectionTypeComponent.instance = value;
  }  


  //#endregion -- ConnectionType --
	//#endregion

  @ViewChild('personConnectionEditUI')
  private personConnectionEditUI: NgForm;

  Init(personConnection: PersonConnection = new PersonConnection()) {
    if (personConnection.isNew)
      this.personConnectionEditUI.reset();
    this.InitPersonConnection(personConnection);
    this.loadLists();
  }

  private loadLists() {
    
    this.connectionTypeComponent.LoadList();
  }
  
  InitPersonConnection(personConnection: PersonConnection) {
    if (!personConnection.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.personComponent.instance = personConnection.person;
			this.connectionTypeComponent.instance = personConnection.connectionType;
    } else {
      personConnection.person = this.personComponent.instance;
			personConnection.connectionType = this.connectionTypeComponent.instance;
    }
    this.currentInstance = personConnection;
  }

  ResetForm() {
    this.Person = new Person();
		this.ConnectionType = new ConnectionType();
  }
}
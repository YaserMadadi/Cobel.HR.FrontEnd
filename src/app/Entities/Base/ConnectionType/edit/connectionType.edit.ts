import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { ConnectionType } from '../connectionType';
import { ConnectionTypeService } from '../connectionType.service';



@Component({
  selector: 'base-connectionType-edit',
  templateUrl: './connectionType.edit.html',
  styleUrls: ['./connectionType.edit.css']
})
export class ConnectionTypeEditUI extends EditModal<ConnectionType> implements IEditModal<ConnectionType>  {
  
  constructor(private connectionTypeService: ConnectionTypeService) {
    super(connectionTypeService); 
    this.currentInstance = new ConnectionType();
  }

  

  @ViewChild('connectionTypeEditUI')
  private connectionTypeEditUI: NgForm;

  Init(connectionType: ConnectionType = new ConnectionType()) {
    if (connectionType.isNew)
      this.connectionTypeEditUI.reset();
    this.InitConnectionType(connectionType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitConnectionType(connectionType: ConnectionType) {
    if (!connectionType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = connectionType;
  }

  ResetForm() {
    
  }
}
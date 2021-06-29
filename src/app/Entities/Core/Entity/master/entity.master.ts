import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Entity } from '../entity';
import { EntityService } from '../entity.service';
import { EntityDeleteUI } from '../delete/entity.delete';
import { EntityEditUI } from '../edit/entity.edit';
import { RolePermissionService } from '../../RolePermission/rolePermission.service';
import { PropertyService } from '../../Property/property.service';



@Component({
  selector: 'core-entity-master',
  templateUrl: './entity.master.html',
  styleUrls: ['./entity.master.css'],
  providers: [
    EntityService,
    RolePermissionService,
		PropertyService,
  ]
})
export class EntityMasterUI extends MasterModal<Entity> {

  constructor(private entityService: EntityService) {
    super(entityService);
  }
}
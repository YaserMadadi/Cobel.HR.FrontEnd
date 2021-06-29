import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Entity } from '../entity';
import { EntityService } from '../entity.service';


@Component({
  selector: 'core-entity-delete',
  templateUrl: './entity.delete.html',
  styleUrls: ['./entity.delete.css'],
  providers: [EntityService]
})
export class EntityDeleteUI extends DeleteModal<Entity> {

    constructor(private entityService: EntityService){
        super(entityService);
    }

}
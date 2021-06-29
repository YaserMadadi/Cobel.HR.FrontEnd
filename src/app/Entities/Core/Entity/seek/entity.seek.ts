import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Entity } from '../entity';


@Component({
  selector: 'core-entity-seek',
  templateUrl: './entity.seek.html',
  styleUrls: ['./entity.seek.css']
})
export class EntitySeekUI extends SeekModal<Entity> {

  entity: Entity = new Entity();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.entity);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
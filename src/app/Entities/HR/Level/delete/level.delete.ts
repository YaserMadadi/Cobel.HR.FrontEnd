import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Level } from '../level';
import { LevelService } from '../level.service';


@Component({
  selector: 'hr-level-delete',
  templateUrl: './level.delete.html',
  styleUrls: ['./level.delete.css'],
  providers: [LevelService]
})
export class LevelDeleteUI extends DeleteModal<Level> {

    constructor(private levelService: LevelService){
        super(levelService);
    }

}
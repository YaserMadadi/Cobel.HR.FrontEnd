import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Gender } from '../gender';
import { GenderService } from '../gender.service';


@Component({
  selector: 'base-gender-delete',
  templateUrl: './gender.delete.html',
  styleUrls: ['./gender.delete.css'],
  providers: [GenderService]
})
export class GenderDeleteUI extends DeleteModal<Gender> {

    constructor(private genderService: GenderService){
        super(genderService);
    }

}
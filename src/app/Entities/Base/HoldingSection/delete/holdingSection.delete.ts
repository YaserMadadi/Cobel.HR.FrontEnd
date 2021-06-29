import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { HoldingSection } from '../holdingSection';
import { HoldingSectionService } from '../holdingSection.service';


@Component({
  selector: 'base-holdingSection-delete',
  templateUrl: './holdingSection.delete.html',
  styleUrls: ['./holdingSection.delete.css'],
  providers: [HoldingSectionService]
})
export class HoldingSectionDeleteUI extends DeleteModal<HoldingSection> {

    constructor(private holdingSectionService: HoldingSectionService){
        super(holdingSectionService);
    }

}
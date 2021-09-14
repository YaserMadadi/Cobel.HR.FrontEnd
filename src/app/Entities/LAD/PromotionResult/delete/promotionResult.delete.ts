import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { PromotionResult } from '../promotionResult';
import { PromotionResultService } from '../promotionResult.service';


@Component({
  selector: 'lad-promotionResult-delete',
  templateUrl: './promotionResult.delete.html',
  styleUrls: ['./promotionResult.delete.css'],
  
})
export class PromotionResultDeleteUI extends DeleteModal<PromotionResult> {

    constructor(private promotionResultService: PromotionResultService){
        super(promotionResultService);
    }

}
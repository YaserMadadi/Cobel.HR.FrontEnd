import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { CriticalIncidentRecognition } from '../criticalIncidentRecognition';
import { CriticalIncidentRecognitionService } from '../criticalIncidentRecognition.service';


@Component({
  selector: 'pms-criticalIncidentRecognition-delete',
  templateUrl: './criticalIncidentRecognition.delete.html',
  styleUrls: ['./criticalIncidentRecognition.delete.css'],
  providers: [CriticalIncidentRecognitionService]
})
export class CriticalIncidentRecognitionDeleteUI extends DeleteModal<CriticalIncidentRecognition> {

    constructor(private criticalIncidentRecognitionService: CriticalIncidentRecognitionService){
        super(criticalIncidentRecognitionService);
    }

}
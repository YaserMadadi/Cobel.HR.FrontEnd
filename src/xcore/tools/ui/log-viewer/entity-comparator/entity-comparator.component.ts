import { Component, Input, OnInit } from '@angular/core';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { Log } from '../../../../../app/Entities/Core/Log/log';
import { MasterModal } from '../../view-base/master.modal';

@Component({
    selector: 'entity-comparator',
    templateUrl: './entity-comparator.component.html',
    styleUrls: ['./entity-comparator.component.css'],
    providers: [NgxJsonViewerModule]
})
export class EntityComparatorComponent extends MasterModal<Log> implements OnInit {

    constructor() {
        super();
    }

    ngOnInit(): void {
    }

    @Input()
    CurrentLog: Log = new Log();

    get oldValue() {
        if (this.CurrentLog?.oldValue.length == 0)
            return JSON.parse('{}');
        return JSON.parse(this.CurrentLog?.oldValue);;
    }


    get newValue() {
        if (this.CurrentLog?.newValue.length == 0)
            return JSON.parse('{}');
        return JSON.parse(this.CurrentLog?.newValue);
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { BusinessObject } from '../../../business-object';
//import { Log } from '../../../../app/Entities/Core/Log/log';
// import { Log } from '../../../app/Entities/XCode/Log/log';
// import { LogService } from '../../../app/Entities/XCode/Log/log.service';
// import { LogServiceExt } from './log.service';
import { MasterModal } from '../view-base/master.modal';
//import { EntityComparatorComponent } from './entity-comparator/entity-comparator.component';
//import { LogServiceExt } from './log.service';

@Component({
  selector: 'log-viewer',
  templateUrl: './log-viewer.component.html',
  styleUrls: ['./log-viewer.component.css']
})
export class LogViewerComponent extends MasterModal<any> implements OnInit {

  constructor() {
    super();
    // this.onShown.subscribe(value => {
    //   this.loadLog(); 
    // })
  }

  ngOnInit(): void {
  }

  @Input()
  public Entity: BusinessObject;

  logList: [] = [];

  public async onLoad() {
    // let log: Log = new Log();
    // log.entityName = `[${this.Entity.info.schema}].[${this.Entity.info.name}]`;
    // log.recordID = this.Entity.id;
    // this.logList = await this.logService.loadLog(log);
    // this.ShowDialog(log);
  }

//   ViewDetail(ui: EntityComparatorComponent, currentLog: Log) {
//     ui.CurrentLog = currentLog;
//     ui.ShowDialog(currentLog);
//   }



}

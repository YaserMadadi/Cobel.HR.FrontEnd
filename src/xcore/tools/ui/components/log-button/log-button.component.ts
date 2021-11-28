import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { BusinessObject } from '../../../../../xcore/business-object';
import { PermissionController } from '../../../../../xcore/tools/controller.permission';
import { PermissionResult, PermissionType } from '../../../../../xcore/tools/Enum';
import { LogViewerComponent } from '../../log-viewer/log-viewer.component';

@Component({
  selector: 'log-button',
  templateUrl: './log-button.component.html',
  styleUrls: ['./log-button.component.scss']
})
export class LogButtonComponent implements OnInit {

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  @Input('CurrentInstance')
  public currentInstance: BusinessObject;

  

  onLog() {
    // if (PermissionController.Check(logViewer.Entity.info, PermissionType.ViewLog) == PermissionResult.Denied)
    //   return;
    //logViewer.onLoad();
    console.log('LogViewer Button');
    let logViewer : LogViewerComponent = this.viewContainerRef.createComponent<LogViewerComponent>(LogViewerComponent).instance;
    logViewer.Entity = this.currentInstance;
    logViewer.onLoad();
  }

}

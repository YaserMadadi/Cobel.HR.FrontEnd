import {
  Component, Input, Output, EventEmitter, OnChanges, SimpleChanges
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'ssrs-report-viewer',
  templateUrl: './ssr.reportviewer.component.html',
  styleUrls: ['./ssr.reportviewer.component.css']
})
export class SSRReportViewerComponent implements OnChanges {

  @Input()
  ReportUrl: string;

  @Input()
  ReportServer: string;

  @Input()
  ShowParameters?: string = "false";

  @Input()
  Parameters?: any;

  @Input()
  Language?: string = "fa-IR";

  @Input()
  width?: number = 100;

  @Input()
  height?: number = 100;

  @Input()
  toolbar?: string = "true";

  @Output('error') 
  onError = new EventEmitter<any>();

  constructor(private sanitizer: DomSanitizer) {

  }

  source: SafeResourceUrl;



  ngOnChanges(changes: SimpleChanges) {
    if (!this.ReportUrl) {
      this.onError.emit("Src cannot be null");
    }

    if ('ReportUrl' in changes) {
      // this.source = this.sanitizer
      //   .bypassSecurityTrustResourceUrl(this.buildReportUrl());
    }
  }

  public update(){
    this.source = this.sanitizer
        .bypassSecurityTrustResourceUrl(this.buildReportUrl());
  }

  public buildParameterString(): string {

    let parameterString = "";

    for (let param in this.Parameters) {
      if (param) {
        if (this.Parameters[param] instanceof Array === true) {
          for (let arrayParam in this.Parameters[param]) {
            if (arrayParam) {
              parameterString += "&" + param + "=" + this.Parameters[param][arrayParam];
            }
          }
        }
        if (this.Parameters[param] != null && this.Parameters[param] instanceof Array === false) {
          parameterString += "&" + param + "=" + this.Parameters[param];
        }
        if (this.Parameters[param] == null) {
          parameterString += "&" + param + ":isnull=true";
        }
      }
    }
    return parameterString;
  }

  public buildReportUrl(): string {
    if (!this.ReportUrl) {
      return;
    }
    let parameters = this.buildParameterString();
    let t = this.ReportServer + '?/'
      + this.ReportUrl + '&rs:Embed=true'
      + '&rc:Parameters=' + this.ShowParameters
      + parameters
      + '&rs:ParameterLanguage=' + this.Language + "&rc:Toolbar=" + this.toolbar + "&rc:Zoom=Page Width";
    console.log('T : ', t);
    return t;


  }
}

import { Component, ViewChild, enableProdMode, isDevMode, OnInit, EventEmitter, HostListener } from '@angular/core';

//import * as moment from 'jalali-moment';
import { CompileMode, EndPointController } from '../xcore/tools/controller.endPoint';
import { environment } from '../environments/environment.prod';
import { ToastrService } from 'ngx-toastr';
import { MessageController } from '../xcore/tools/controller.message';
import { NavigationEnd, Router } from '@angular/router';
import { StorageController } from '../xcore/tools/controller.storage';
import { AuthGuard } from '../xcore/security/auth_guard';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, public authGuard: AuthGuard, private toast: ToastrService) {
    //StorageController.show('token');
    //StorageController.Clear();
    environment.Debug = isDevMode();
    MessageController.toaster = toast; 
    console.log(`Application Started in : `);
    console.log(`Time : ${new Date().toLocaleTimeString()}`);
    console.log(`DebugMode : ${environment.Debug}`);
    EndPointController.InitUrl(environment.Debug ? CompileMode.LocalSSL : CompileMode.ServerSSL);
    console.log(`Mode : ${<CompileMode>EndPointController.Mode}.`);
    console.log(`Url : ${EndPointController.BaseUrl}.`);
  }


  @HostListener('mousewheel', ['$event']) onMouseWheelChrome(event: any) {
    this.disableScroll(event);
  }

  @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
    this.disableScroll(event);
  }

  @HostListener('onmousewheel', ['$event']) onMouseWheelIE(event: any) {
    this.disableScroll(event);
  }


  disableScroll(event: any) {
    if (event.srcElement.type === "number")
      event.preventDefault();
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      // if (evt instanceof NavigationEnd) {
      //   let urlSegments: string[] = AuthGuard.urlToArray(evt.url);
      //   AppComponent.Id = urlSegments.length >= 2 ? +urlSegments[1] : 0;
      //   AppComponent.IdChanged.emit(AppComponent.Id);
      //   console.log(AppComponent.Id);
      // }
      if (!(evt instanceof NavigationEnd)) {

        return;
      }
      window.scrollTo(0, 0);
    });
  }
}

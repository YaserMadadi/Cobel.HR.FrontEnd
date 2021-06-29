import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { PermissionController } from '../../../xcore/tools/controller.permission';
import { MenuItem } from '../../_nav';
// import { PersonService } from '../../../app/Entities/HR/Person/person.service';
import { StorageController } from '../../../xcore/tools/controller.storage';
import { AuthGuard } from '../../../xcore/security/auth_guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {

  constructor(private permissionController: PermissionController){//, private personService: PersonService) {//private router: Router) {
    //router.navigate(['login']);
    // console.log(AuthGuard.IsAuthenticated);
    // if (!AuthGuard.IsAuthenticated)
    //   authgurd.router.navigate(['login']);
    this.userName = AuthGuard.DisplayName;
    this.pictureUrl ='../../../assets/PersonPicture/Man.jpg';
  }

  

  async ngOnInit() {
    // this.personService.RetrieveById(+StorageController.Get("Person_Id"))
    //   .then(person => {
    //     //AuthGuard.Person = person;
    //     if (person.pictureUrl.trim().length > 0) {
    //       this.pictureUrl = person.pictureUrl.replace("~", "http://coms.cobeldarou.com/app");
    //     } else {
    //       this.pictureUrl = person.gender.id == 52 ? "../../assets/PersonPicture/Lady.png" : "../../assets/PersonPicture/Man.jpg";
    //     }
    //     //console.log(this.pictureUrl);
    //   });

  }

  public pictureUrl: string = '';

  public userName: string;

  public sidebarMinimized = false;
  public navItems = MenuItem.GetNavItems('user'); // y.madadi

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    AuthGuard.Clear();
  }

  RefreshPermission() {
    this.permissionController.loadPermission(AuthGuard.Person_Id);
  }
}

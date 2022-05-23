import { Component, OnInit } from '@angular/core';
import { loginUser } from '../../../xcore/security/base/loginUser';
import { AuthService } from '../../../xcore/security/auth_service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService)//, private route: ActivatedRoute, private router: Router) { }
  {

  }

  loginUser: loginUser = new loginUser();

  private returnUrl: string = '';

  ngOnInit(): void {
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  async Authenticate(password: string) {
    //this.baseToken.password = Md5.hashStr(password).toString();
    //console.log(password);

    this.loginUser.password = password;
    await this.authService.Authenticate(this.loginUser);
    // if (!result)
    //   return;
    // console.log(this.returnUrl);
    // this.router.navigateByUrl(this.returnUrl);

  }

}

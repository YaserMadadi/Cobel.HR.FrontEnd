import { Component, OnInit } from '@angular/core';
import { loginUser } from '../../../xcore/security/base/loginUser';
import { AuthService } from '../../../xcore/security/auth_service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  loginUser: loginUser = new loginUser();

  ngOnInit(): void {
  }

  async Authenticate(password: string) {
    //this.baseToken.password = Md5.hashStr(password).toString();
    //console.log(this.baseToken.password);

    this.loginUser.password = password;
    //this.logi .password = password;

    await this.authService.Authenticate(this.loginUser);
  }

}

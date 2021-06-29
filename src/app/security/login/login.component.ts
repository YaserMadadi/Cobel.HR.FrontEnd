import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5';
import { AuthService } from '../../../xcore/security/auth_service';
import { BaseToken } from '../../../xcore/security/base/base_token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  baseToken: BaseToken = new BaseToken();

  ngOnInit(): void {
  }

  async Authenticate(password: string) {
    //this.baseToken.password = Md5.hashStr(password).toString();
    //console.log(this.baseToken.password);

    this.baseToken.password = password;

    await this.authService.Authenticate(this.baseToken);
  }

}

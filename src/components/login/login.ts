import { Component } from '@angular/core';

import { SessionService } from '../../services/session.service';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  email: string;
  password: string;

  constructor(
    private session: SessionService) {}

  login() {
    this.session.setCookie('email', this.email);
    this.session.setCookie('password', this.password);
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from 'src/app/entity/Message';
import { MessageType } from 'src/app/entity/MessageType';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public popup: Message = {
    message: '',
    type: MessageType.INFO,
    open: false,
    timeout: 5000,
  };
  private showPopup(message: string, type: MessageType): void {
    this.popup.message = message;
    this.popup.type = type;
    this.popup.open = true;
    setTimeout(() => {
      this.popup.message = '';
      this.popup.type = MessageType.INFO;
      this.popup.open = false;
    }, this.popup.timeout);
  }
  private authService: AuthenticationService;
  constructor(authService: AuthenticationService) {
    this.authService = authService;
  }
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  public submit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      this.authService.login(data).subscribe(
        (response: any) => {
          const token = response.token;
          localStorage.setItem('token', token);
          window.location.href = '/';
        },
        (error) => {
          this.showPopup(error.error.message, MessageType.ERROR);
        }
      );
    }
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from 'src/app/entity/Message';
import { MessageType } from 'src/app/entity/MessageType';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
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
  public registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6)
    ]),
    password_confirmation: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  
  constructor(authService: AuthenticationService) {
    this.authService = authService;
    this.registerForm.get("password_confirmation")?.setValidators([Validators.required, this.passwordsMatchValidator()]);
  }
  passwordsMatchValidator() {
    return (control: any) => {
      const password = control.value;
      const passwordConfirmation = this.registerForm.get('password')?.value;

      return password === passwordConfirmation ? null : { passwordMismatch: true };
    };
  }

  public submit(): void {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      const data = this.registerForm.value;
      this.registerForm.reset();
      this.authService.register(data).subscribe(
        (response) => {
          this.showPopup("A Verification Email was sent to your mail", MessageType.SUCCESS);
        },
        (error) => {
          this.showPopup(error.error.message, MessageType.ERROR);
        }
      );
    }
  }
}

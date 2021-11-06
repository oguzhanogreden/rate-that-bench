import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule],
  exports: [LoginFormComponent],
})
// TODO: Rename
export class LoginGoogleModule {}

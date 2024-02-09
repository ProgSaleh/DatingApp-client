import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();

  constructor(
    private accountService: AccountService,
    private toastrService: ToastrService
  ) {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: (error) => {
        // const { error } = err;
        // console.log({
        //   error,
        //   err,
        // });
        this.toastrService.error(error.error);
      },
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}

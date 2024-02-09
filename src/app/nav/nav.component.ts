import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  model: any = {};

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: () => this.router.navigateByUrl('/members'),
      error: (err) => {
        const { error } = err;
        this.toastrService.error(error);
      },
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}

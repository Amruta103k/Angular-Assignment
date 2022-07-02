import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  unamePattern = '^[A-Za-z0-9_-]{3,15}$';
  pwdPattern = '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,15}'; //"^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}";//"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,8}";
  loginForm = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
  });

  constructor(private auth: AuthService, private router: Router,public datepipe: DatePipe) {}
  get pUsername() {
    return this.loginForm.get('userName');
  }

  get pPassword() {
    return this.loginForm.get('password');
  }
  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }
get pdate()
{
  return this.datepipe.transform((new Date), 'dd/MM/yyyy');
}

  onSubmit() {
    console.log('Username : ' + this.pUsername?.value);
    console.log('Password : ' + this.pPassword?.value );

    if (this.loginForm.valid) {
      //  this.auth.login(this.loginForm.value).subscribe((result)=>{this.router.navigate(['/admin']);},(err:Error)=>{alert('err.....'+err.message);});
      of(this.auth.login(this.loginForm.value)).subscribe({
        next: (result) => {
          this.router.navigate(['/admin/Sliderimages']);
        },
        error: (e) => console.error(e),
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login.model';
import { LoginsService } from '../logins.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  nome = new FormControl('', [Validators.required]);

  login: Login = {
      name: '',
      sobrenome: '',
      email: '',
      cidadeEstado: '',
      profissao: '',
  }

  constructor(private LoginsService: LoginsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'E-mail obrigatório'
    };
  };

  createLogin():void {
    this.LoginsService.create(this.login).subscribe(() => {
      this.router.navigate(['/all'])
    })

  }

};

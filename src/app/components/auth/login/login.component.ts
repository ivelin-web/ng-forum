import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    constructor(private authService: AuthService) {}

    ngOnInit(): void {}

    login(form: NgForm) {
        const { email, password } = form.value;

        this.authService.login(email, password);
    }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginComponent } from '../../auth/login/login.component';
import { RegisterComponent } from '../../auth/register/register.component';
import { IUser } from '../models/user';

@Component({
    selector: 'app-sidenav-list',
    templateUrl: './sidenav-list.component.html',
    styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent implements OnInit {
    @Output() sidenavCloseEmitter = new EventEmitter();

    isAuth: boolean;

    currentUser: IUser;

    constructor(private dialog: MatDialog, private authService: AuthService) {}

    ngOnInit(): void {
        this.authService.getUserData.subscribe((user) => {
            if (user) {
                this.isAuth = true;
            } else {
                this.isAuth = false;
            }
        });

        this.authService.currentUserData().subscribe((currentUser) => {
            this.currentUser = currentUser;
        });
    }

    onSidenavClose() {
        this.sidenavCloseEmitter.emit();
    }

    openLoginDialog() {
        this.dialog.open(LoginComponent).updateSize('300px');
    }

    openRegisterDialog() {
        this.dialog.open(RegisterComponent).updateSize('300px');
    }

    logout() {
        this.authService.logout();
    }
}

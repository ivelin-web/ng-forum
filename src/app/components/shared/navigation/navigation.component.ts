import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { PostService } from 'src/app/core/services/post.service';
import { LoginComponent } from '../../auth/login/login.component';
import { RegisterComponent } from '../../auth/register/register.component';
import { IUser } from '../models/user';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
    @Output() sidenavToggleEmitter = new EventEmitter();
    isAuth: boolean;
    currentUser: IUser;

    constructor(
        private dialog: MatDialog,
        private authService: AuthService,
        private router: Router,
        private postService: PostService
    ) {}

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

    sidenavToggle() {
        this.sidenavToggleEmitter.emit();
    }

    openLoginDialog() {
        this.dialog.open(LoginComponent).updateSize('500px');
    }

    openRegisterDialog() {
        this.dialog.open(RegisterComponent).updateSize('500px');
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/home']);
    }

    onClick() {
        this.postService.changeCategory(null);
    }
}

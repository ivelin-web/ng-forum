import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/app/components/shared/models/user';

@Injectable()
export class AuthService {
    private userData: Observable<firebase.default.User>;

    private currentUser: IUser;
    private currentUserEmitter$: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(
        null
    );

    constructor(
        private afa: AngularFireAuth,
        private afs: AngularFirestore,
        private dialog: MatDialog,
        private router: Router,
        private toastr: ToastrService
    ) {
        this.userData = this.afa.authState;

        this.userData.subscribe((user) => {
            if (user) {
                this.afs
                    .collection<IUser>('users')
                    .doc<IUser>(user.uid)
                    .valueChanges()
                    .subscribe((currentUser) => {
                        if (currentUser) {
                            this.currentUser = currentUser;
                            this.currentUserEmitter$.next(this.currentUser);
                        } else {
                            this.currentUser = null;
                            this.currentUserEmitter$.next(this.currentUser);
                        }
                    });
            }
        });
    }

    register(email: string, password: string, username: string) {
        this.afa
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                this.dialog.closeAll();
                this.router.navigate(['/home']);
                this.toastr.success(
                    'Account was created successfull',
                    'Success!',
                    {
                        timeOut: 3000,
                    }
                );
                if (res) {
                    this.afs
                        .collection('users')
                        .doc(res.user.uid)
                        .set({
                            email,
                            username,
                        })
                        .then(() => {
                            this.afs
                                .collection<IUser>('users')
                                .doc<IUser>(res.user.uid)
                                .valueChanges()
                                .subscribe((user: IUser) => {
                                    if (user) {
                                        this.currentUser = user;
                                        this.currentUserEmitter$.next(
                                            this.currentUser
                                        );
                                    }
                                });
                        })
                        .catch((err) => {
                            this.toastr.error(err.message, 'Error!', {
                                timeOut: 3000,
                            });
                        });
                }
            })
            .catch((err) => {
                this.toastr.error(err.message, 'Error!', {
                    timeOut: 3000,
                });
            });
    }

    login(email: string, password: string) {
        this.afa
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
                this.dialog.closeAll();
                this.router.navigate(['/home']);
                this.userData = this.afa.authState;
                this.toastr.success('You logged in successfull', 'Success!', {
                    timeOut: 3000,
                });

                this.afs
                    .collection<IUser>('users')
                    .doc<IUser>(res.user.uid)
                    .valueChanges()
                    .subscribe((user) => {
                        if (user) {
                            this.currentUser = user;
                            this.currentUserEmitter$.next(this.currentUser);
                        }
                    });
            })
            .catch((err) => {
                this.toastr.error(err.message, 'Error!', {
                    timeOut: 3000,
                });
            });
    }

    logout() {
        this.afa
            .signOut()
            .then(() => {
                this.router.navigate(['/home']);
                this.currentUser = null;
                this.currentUserEmitter$.next(this.currentUser);
                this.toastr.success('You logged out successfull', 'Success!', {
                    timeOut: 3000,
                });
            })
            .catch((err) => {
                this.toastr.error(err.message, 'Error!', {
                    timeOut: 3000,
                });
            });
    }

    currentUserData(): Observable<IUser> {
        return this.currentUserEmitter$.asObservable();
    }

    get getUserData(): Observable<firebase.default.User> {
        return this.userData;
    }
}

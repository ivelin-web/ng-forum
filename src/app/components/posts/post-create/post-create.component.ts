import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { PostService } from 'src/app/core/services/post.service';
import { IPost } from '../../shared/models/post';
import { IUser } from '../../shared/models/user';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
    currentUser: IUser;

    categories: string[] = [
        'Game Theory',
        'Basketball',
        'Education',
        'Marketing',
    ];

    constructor(
        private authService: AuthService,
        private postService: PostService,
        private router: Router,
        private toastr: ToastrService
    ) {}

    ngOnInit(): void {
        this.authService.currentUserData().subscribe((currentUser) => {
            this.currentUser = currentUser;
        });
    }

    createPost(form: NgForm) {
        const body: IPost = form.value;

        body.author = this.currentUser.username;
        body.createdOn = new Date();

        this.postService.createPost(form.value).then(() => {
            this.toastr.success('Post was created', 'Successfull!');
            this.router.navigate(['/home']);
        });
    }
}

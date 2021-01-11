import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommentService } from 'src/app/core/services/comment.service';
import { IComment } from '../../shared/models/comment';
import { IUser } from '../../shared/models/user';

@Component({
    selector: 'app-comment-create',
    templateUrl: './comment-create.component.html',
    styleUrls: ['./comment-create.component.css'],
})
export class CommentCreateComponent implements OnInit, OnDestroy {
    currentUser: IUser;
    postId: string;

    currentUserSubscription: Subscription;

    constructor(
        private commentSerice: CommentService,
        private route: ActivatedRoute,
        private authService: AuthService,
        private toastr: ToastrService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.postId = this.route.snapshot.params.id;

        this.currentUserSubscription = this.authService
            .currentUserData()
            .subscribe((currentUser) => {
                this.currentUser = currentUser;
            });
    }

    createComment(form: NgForm) {
        const { body } = form.value;
        const createdOn = new Date();
        const author = this.currentUser?.username
            ? this.currentUser.username
            : 'Anonymous';

        const commentBody: IComment = {
            author,
            body,
            postId: this.postId,
            createdOn,
        };

        this.commentSerice.createComment(commentBody).then(() => {
            this.router.navigate([`/posts/details/${this.postId}`]);
            this.toastr.success('Comment was created', 'Success!');
        });
    }

    ngOnDestroy(): void {
        this.currentUserSubscription.unsubscribe();
    }
}

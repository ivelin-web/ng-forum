import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommentService } from 'src/app/core/services/comment.service';
import { PostService } from 'src/app/core/services/post.service';
import { IPost } from '../../shared/models/post';
import { IUser } from '../../shared/models/user';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit, OnDestroy {
    postSubscription: Subscription;
    userSubscription: Subscription;
    commentsSubscription: Subscription;

    post: IPost;
    id: string;
    currentUser: IUser;
    commentsLength: number = 0;

    constructor(
        private route: ActivatedRoute,
        private postService: PostService,
        private authService: AuthService,
        private router: Router,
        private toastr: ToastrService,
        private commentService: CommentService
    ) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params.id;

        this.postSubscription = this.postService
            .getPostById(this.id)
            .subscribe((post) => {
                this.post = post;
            });

        this.userSubscription = this.authService
            .currentUserData()
            .subscribe((currentUser) => {
                this.currentUser = currentUser;
            });

        this.commentsSubscription = this.commentService
            .getNumberOfCommentsByPostId(this.id)
            .subscribe((comments) => {
                this.commentsLength = comments.length;
            });
    }

    ngOnDestroy(): void {
        this.postSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
        this.commentsSubscription.unsubscribe();
    }

    onClick() {
        this.postService.changeCategory(this.post.category);
    }

    deletePost() {
        this.postService.deletePost(this.id).then(() => {
            this.toastr.success('Post was deleted', 'Success!');
            this.router.navigate(['/posts']);
        });
    }
}

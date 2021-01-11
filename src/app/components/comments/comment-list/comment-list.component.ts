import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommentService } from 'src/app/core/services/comment.service';
import { IComment } from '../../shared/models/comment';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.css'],
})
export class CommentListComponent implements OnInit {
    comments: Observable<IComment[]>;
    postId: string;

    constructor(
        private commentService: CommentService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.postId = this.route.snapshot.params.id;

        this.comments = this.commentService.getCommentsByPostId(this.postId);
    }
}

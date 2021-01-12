import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CommentService } from 'src/app/core/services/comment.service';
import { IComment } from '../../shared/models/comment';

@Component({
    selector: 'app-comment-edit',
    templateUrl: './comment-edit.component.html',
    styleUrls: ['./comment-edit.component.css'],
})
export class CommentEditComponent implements OnInit {
    comment: IComment;
    commentText: string;

    constructor(
        private dialog: MatDialog,
        private commentService: CommentService,
        private toastr: ToastrService
    ) {}

    ngOnInit(): void {
        this.commentText = this.comment.body;
    }

    cancelDialog() {
        this.dialog.closeAll();
    }

    editComment() {
        const newComment: IComment = {
            id: this.comment.id,
            body: this.commentText,
            author: this.comment.author,
            postId: this.comment.postId,
            createdOn: this.comment.createdOn,
        };

        this.commentService
            .editComment(this.comment.id, newComment)
            .then(() => {
                this.dialog.closeAll();
                this.toastr.success('Comment edited', 'Success');
            });
    }
}

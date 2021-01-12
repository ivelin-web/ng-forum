import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommentService } from 'src/app/core/services/comment.service';
import { IComment } from '../../shared/models/comment';
import { IUser } from '../../shared/models/user';
import { CommentEditComponent } from '../comment-edit/comment-edit.component';

@Component({
    selector: 'app-comment-info',
    templateUrl: './comment-info.component.html',
    styleUrls: ['./comment-info.component.css'],
})
export class CommentInfoComponent implements OnInit {
    @Input() comment: IComment;

    currentUser: IUser;

    constructor(
        private authService: AuthService,
        private commentService: CommentService,
        private toastr: ToastrService,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.authService.currentUserData().subscribe((currentUser) => {
            this.currentUser = currentUser;
        });
    }

    editComment() {
        this.dialog
            .open(CommentEditComponent)
            .updateSize('500px').componentInstance.comment = this.comment;
    }

    deleteComment() {
        this.commentService.deleteComment(this.comment.id).then(() => {
            this.toastr.success('Comment was deleted', 'Success!');
        });
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { IComment } from '../../shared/models/comment';

@Component({
    selector: 'app-comment-info',
    templateUrl: './comment-info.component.html',
    styleUrls: ['./comment-info.component.css'],
})
export class CommentInfoComponent implements OnInit {
    @Input() comment: IComment;

    constructor() {}

    ngOnInit(): void {}
}

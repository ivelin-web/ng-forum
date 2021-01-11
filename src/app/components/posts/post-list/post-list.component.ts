import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/core/services/post.service';
import { IPost } from '../../shared/models/post';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
    posts: Observable<IPost[]>;

    constructor(private postService: PostService) {}

    ngOnInit(): void {
        this.posts = this.postService.getAllPosts();
    }
}

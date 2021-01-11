import {
    AfterViewInit,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { PostService } from 'src/app/core/services/post.service';
import { IPost } from '../../shared/models/post';

@Component({
    selector: 'app-all-posts',
    templateUrl: './all-posts.component.html',
    styleUrls: ['./all-posts.component.css'],
})
export class AllPostsComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(MatPaginator) paginator: MatPaginator;

    currentCategoryPost: string;

    postSubscription: Subscription;

    displayedColumns: string[] = [
        'title',
        'description',
        'author',
        'category',
        'createdOn',
    ];

    dataSource = new MatTableDataSource<IPost>();

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    constructor(private postService: PostService) {}

    ngOnInit(): void {
        this.postSubscription = this.postService
            .getAllPosts()
            .subscribe((data) => {
                this.dataSource.data = data;
                this.currentCategoryPost = this.postService.currentCategory;
            });
    }

    ngOnDestroy(): void {
        this.postSubscription.unsubscribe();
        this.postService.changeCategory(null);
    }
}

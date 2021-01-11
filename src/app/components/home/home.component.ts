import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    slides = [
        {
            image:
                'https://cdn.pixabay.com/photo/2017/01/14/10/56/men-1979261__340.jpg',
        },
        {
            image:
                'https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776__340.jpg',
        },
    ];

    constructor(private postService: PostService, private router: Router) {}

    ngOnInit(): void {}

    onClick(category: string) {
        this.postService.currentCategory = category;
        this.router.navigate(['/posts']);
    }
}

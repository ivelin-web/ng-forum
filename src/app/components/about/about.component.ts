import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
    aboutUsImageUrl: string;

    constructor() {}

    ngOnInit(): void {
        this.aboutUsImageUrl = 'https://firebasestorage.googleapis.com/v0/b/ng-forum-21.appspot.com/o/images%2Fabout-us.svg?alt=media&token=0d40b287-2cb8-41d1-b2ad-2c27ae590cf5'
    }
}

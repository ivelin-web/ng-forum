import { Component, isDevMode, OnInit } from '@angular/core';

const ABOUT_US_URL = {
    prod: 'assets/about-us.svg',
    dev: '..//..//..//assets/about-us.svg',
};

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
    aboutUsImageUrl: string;

    constructor() {}

    ngOnInit(): void {
        this.aboutUsImageUrl = isDevMode ? ABOUT_US_URL.dev : ABOUT_US_URL.prod;
    }
}

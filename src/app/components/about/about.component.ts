import { Component, isDevMode, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
    aboutUsImageUrl: string;

    constructor() {}

    ngOnInit(): void {
        this.aboutUsImageUrl = environment.aboutUsImageUrl;
    }
}

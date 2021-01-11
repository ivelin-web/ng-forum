import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAboutCard } from '../shared/models/about-card';

@Component({
    selector: 'app-about-card',
    templateUrl: './about-card.component.html',
    styleUrls: ['./about-card.component.css'],
})
export class AboutCardComponent implements OnInit {
    @Input() aboutCard: IAboutCard;

    constructor(private router: Router) {}

    ngOnInit(): void {}

    onClick() {
        this.router.navigate([`/about/person/${this.aboutCard.id}`]);
    }
}

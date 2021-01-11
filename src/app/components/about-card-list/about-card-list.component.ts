import { Component, OnInit } from '@angular/core';
import { aboutPersonsData } from '../about-persons-data/persons-data';
import { IAboutCard } from '../shared/models/about-card';

@Component({
    selector: 'app-about-card-list',
    templateUrl: './about-card-list.component.html',
    styleUrls: ['./about-card-list.component.css'],
})
export class AboutCardListComponent implements OnInit {
    aboutCards: IAboutCard[] = aboutPersonsData;

    constructor() {}

    ngOnInit(): void {}
}

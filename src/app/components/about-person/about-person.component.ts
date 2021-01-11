import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { aboutPersonsData } from '../about-persons-data/persons-data';
import { IAboutCard } from '../shared/models/about-card';

@Component({
    selector: 'app-about-person',
    templateUrl: './about-person.component.html',
    styleUrls: ['./about-person.component.css'],
})
export class AboutPersonComponent implements OnInit {
    aboutPerson: IAboutCard;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;
        const personData: IAboutCard[] = aboutPersonsData;

        personData.every((data) => {
            if (data.id === id) {
                this.aboutPerson = data;
                return false;
            }

            return true;
        });
    }
}

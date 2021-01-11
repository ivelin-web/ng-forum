import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCardListComponent } from './about-card-list.component';

describe('AboutCardListComponent', () => {
  let component: AboutCardListComponent;
  let fixture: ComponentFixture<AboutCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

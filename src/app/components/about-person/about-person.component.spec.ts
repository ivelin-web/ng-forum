import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPersonComponent } from './about-person.component';

describe('AboutPersonComponent', () => {
  let component: AboutPersonComponent;
  let fixture: ComponentFixture<AboutPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

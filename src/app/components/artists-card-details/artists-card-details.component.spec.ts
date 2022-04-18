import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsCardDetailsComponent } from './artists-card-details.component';

describe('ArtistsCardDetailsComponent', () => {
  let component: ArtistsCardDetailsComponent;
  let fixture: ComponentFixture<ArtistsCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsCardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

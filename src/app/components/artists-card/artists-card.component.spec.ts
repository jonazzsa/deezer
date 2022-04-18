import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsCardComponent } from './artists-card.component';

describe('ArtistsCardComponent', () => {
  let component: ArtistsCardComponent;
  let fixture: ComponentFixture<ArtistsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTracksComponent } from './details-tracks.component';

describe('DetailsTracksComponent', () => {
  let component: DetailsTracksComponent;
  let fixture: ComponentFixture<DetailsTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTracksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

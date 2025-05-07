import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCarouselComponent } from './space-carousel.component';

describe('SpaceCarouselComponent', () => {
  let component: SpaceCarouselComponent;
  let fixture: ComponentFixture<SpaceCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

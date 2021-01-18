import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductorComponent } from './introductor.component';

describe('IntroductorComponent', () => {
  let component: IntroductorComponent;
  let fixture: ComponentFixture<IntroductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

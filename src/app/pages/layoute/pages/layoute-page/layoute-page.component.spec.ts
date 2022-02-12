import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutePageComponent } from './layoute-page.component';

describe('LayoutePageComponent', () => {
  let component: LayoutePageComponent;
  let fixture: ComponentFixture<LayoutePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

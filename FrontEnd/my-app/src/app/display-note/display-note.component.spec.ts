import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNoteComponent } from './display-note.component';

describe('DisplayNoteComponent', () => {
  let component: DisplayNoteComponent;
  let fixture: ComponentFixture<DisplayNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayNoteComponent]
    });
    fixture = TestBed.createComponent(DisplayNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

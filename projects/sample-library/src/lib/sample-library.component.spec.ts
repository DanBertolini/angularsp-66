import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleLibraryComponent } from './sample-library.component';

describe('SampleLibraryComponent', () => {
  let component: SampleLibraryComponent;
  let fixture: ComponentFixture<SampleLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleLibraryComponent]
    });
    fixture = TestBed.createComponent(SampleLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

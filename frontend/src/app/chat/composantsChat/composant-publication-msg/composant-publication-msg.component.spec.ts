import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantPublicationMsgComponent } from './composant-publication-msg.component';

describe('ComposantPublicationMsgComponent', () => {
  let component: ComposantPublicationMsgComponent;
  let fixture: ComponentFixture<ComposantPublicationMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantPublicationMsgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantPublicationMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

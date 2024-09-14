import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantAffichageComponent } from './composant-affichage.component';

describe('ComposantAffichageComponent', () => {
  let component: ComposantAffichageComponent;
  let fixture: ComponentFixture<ComposantAffichageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantAffichageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

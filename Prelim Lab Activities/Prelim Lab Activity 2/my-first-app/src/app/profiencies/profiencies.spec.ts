import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profiencies } from './profiencies';

describe('Profiencies', () => {
  let component: Profiencies;
  let fixture: ComponentFixture<Profiencies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profiencies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Profiencies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiuRodrigoComponent } from './tiu-rodrigo.component';

describe('TiuRodrigoComponent', () => {
  let component: TiuRodrigoComponent;
  let fixture: ComponentFixture<TiuRodrigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiuRodrigoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiuRodrigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

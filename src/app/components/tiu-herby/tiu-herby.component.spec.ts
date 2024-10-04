import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiuHerbyComponent } from './tiu-herby.component';

describe('TiuHerbyComponent', () => {
  let component: TiuHerbyComponent;
  let fixture: ComponentFixture<TiuHerbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiuHerbyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiuHerbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

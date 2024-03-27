import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TIUVirtualComponent } from './tiuvirtual.component';

describe('TIUVirtualComponent', () => {
  let component: TIUVirtualComponent;
  let fixture: ComponentFixture<TIUVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TIUVirtualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TIUVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

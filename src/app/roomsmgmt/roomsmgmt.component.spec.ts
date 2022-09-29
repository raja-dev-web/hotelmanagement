import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsmgmtComponent } from './roomsmgmt.component';

describe('RoomsmgmtComponent', () => {
  let component: RoomsmgmtComponent;
  let fixture: ComponentFixture<RoomsmgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsmgmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsmgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

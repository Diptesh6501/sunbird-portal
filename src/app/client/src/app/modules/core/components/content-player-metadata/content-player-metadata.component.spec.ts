import { CoreModule } from '@sunbird/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '@sunbird/shared';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentPlayerMetadataComponent } from './content-player-metadata.component';

describe('ContentMetadataComponent', () => {
  let component: ContentPlayerMetadataComponent;
  let fixture: ComponentFixture<ContentPlayerMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule.forRoot(), HttpClientTestingModule, CoreModule.forRoot()],
      declarations: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPlayerMetadataComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

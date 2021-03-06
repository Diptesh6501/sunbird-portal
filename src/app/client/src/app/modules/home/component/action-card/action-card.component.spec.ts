import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui/dist';
import { ActionCardComponent } from './action-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import 'rxjs/add/operator/mergeMap';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CoursesService, UserService, LearnerService, ContentService } from '@sunbird/core';
import { ResourceService, ConfigService } from '@sunbird/shared';
import { ActionCard } from './../../interfaces/index';
import * as mockData from './action-card.component.spec.data';
import { TelemetryModule } from '@sunbird/telemetry';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from '@sunbird/shared';
const env = 'home';
class ActivatedRouteStub {
    snapshot = {
      root: { firstChild : {data: { telemetry: { env: env} } } },
      data : {
         telemetry: { env: env }
      }
    };
  }
  class RouterStub {
    navigate = jasmine.createSpy('navigate');
  }
const testData = mockData.mockRes;
describe('ActionCardComponent', () => {
    let component: ActionCardComponent;
    let fixture: ComponentFixture<ActionCardComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule, SuiModule, CommonModule, SharedModule.forRoot(), TelemetryModule.forRoot()],
            declarations: [ActionCardComponent],
            providers: [ResourceService, CoursesService, ContentService, UserService, LearnerService, ConfigService,
                { provide: Router, useClass: RouterStub },
                { provide: ActivatedRoute, useClass: ActivatedRouteStub }],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ActionCardComponent);
        component = fixture.componentInstance;
    });
    it('should show success TEST INPUT', () => {
        component.enrolledCourses = testData.successData;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('span.sliderCardHeading').innerText).toEqual('27-sept');
        expect(fixture.nativeElement.querySelector('div.sliderCardDesc').innerText).toEqual('test');
    });
    it('should show different TEST INPUT', () => {
        component.enrolledCourses = testData.parsedData;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('span.sliderCardHeading').innerText).toEqual('Test textbook');
        expect(fixture.nativeElement.querySelector('div.sliderCardDesc').innerText).toEqual('k;askdl;sakdl;askdl;sak');
    });
});

import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import * as _ from 'lodash';
import { UserService, OtpService } from '@sunbird/core';
import { ResourceService, ServerResponse, ToasterService } from '@sunbird/shared';
import { Subject } from 'rxjs';
import { ProfileService } from './../../services';

@Component({
  selector: 'app-update-contact-details',
  templateUrl: './update-contact-details.component.html',
  styleUrls: ['./update-contact-details.component.scss']
})
export class UpdateContactDetailsComponent implements OnInit, OnDestroy {
  public unsubscribe = new Subject<void>();
  @Input() contactType: string;
  @Output() close = new EventEmitter<any>();
  contactTypeForm: FormGroup;
  enableSubmitBtn = false;
  showUniqueError = '';
  showForm = true;
  @ViewChild('contactTypeModal') contactTypeModal;
  otpData: any;

  constructor(public resourceService: ResourceService, public userService: UserService,
    public otpService: OtpService, public toasterService: ToasterService,
    public profileService: ProfileService) { }

  ngOnInit() {
    this.initializeFormFields();
  }

  initializeFormFields() {
    if (this.contactType === 'phone') {
      this.contactTypeForm = new FormGroup({
        phone: new FormControl('', [Validators.required, Validators.pattern('^\\d{10}$')]),
        uniqueContact: new FormControl(null, [Validators.required])
      });
      this.onContactValueChange();
    } else if (this.contactType === 'email') {
      this.contactTypeForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,4}$/)]),
        uniqueContact: new FormControl(null, [Validators.required])
      });
      this.onContactValueChange();
    }
    this.enableSubmitButton();
  }

  closeModal() {
    this.contactTypeModal.deny();
    this.close.emit();
  }

  enableSubmitButton() {
    this.contactTypeForm.valueChanges.subscribe(val => {
      this.enableSubmitBtn = (this.contactTypeForm.status === 'VALID');
    });
  }

  showParentForm(event) {
    if (event === 'true') {
      this.initializeFormFields();
      this.showForm = true;
    }
  }

  prepareOtpData() {
    this.otpData = {
      'type': this.contactType.toString(),
      'value': this.contactType === 'phone' ?
        this.contactTypeForm.controls.phone.value.toString() : this.contactTypeForm.controls.email.value,
      'instructions': this.contactType === 'phone' ?
        this.resourceService.frmelmnts.instn.t0083 : this.resourceService.frmelmnts.instn.t0084,
      'retryMessage': this.contactType === 'phone' ?
        this.resourceService.frmelmnts.lbl.unableToUpdateMobile : this.resourceService.frmelmnts.lbl.unableToUpdateEmail,
      'wrongOtpMessage': this.contactType === 'phone' ? this.resourceService.frmelmnts.lbl.wrongPhoneOTP :
        this.resourceService.frmelmnts.lbl.wrongEmailOTP
    };
  }

  vaidateUserContact() {
    const value = this.contactType === 'phone' ?
      this.contactTypeForm.controls.phone.value.toString() : this.contactTypeForm.controls.email.value;
    const uri = this.contactType + '/' + value;
    this.userService.getUserByKey(uri).subscribe(
      (data: ServerResponse) => {
        if (this.userService.userid === data.result.response.id) {
          this.showUniqueError = this.contactType === 'phone' ?
            this.resourceService.frmelmnts.lbl.samePhoneNo : this.resourceService.frmelmnts.lbl.sameEmailId;
        } else {
          this.showUniqueError = this.contactType === 'phone' ?
            this.resourceService.frmelmnts.lbl.uniquePhone : this.resourceService.frmelmnts.lbl.uniqueEmail;
        }
      },
      (err) => {
        if (_.get(err, 'error.params.status') && err.error.params.status === 'USER_ACCOUNT_BLOCKED') {
          this.showUniqueError = this.resourceService.frmelmnts.lbl.blockedUserError;
        } else {
          this.contactTypeForm.controls['uniqueContact'].setValue(true);
          this.showUniqueError = '';
        }
      }
    );
  }

  onContactValueChange() {
    const contactTypeControl = this.contactType === 'phone' ?
      this.contactTypeForm.get('phone') : this.contactTypeForm.get('email');
    let contactValue = '';
    contactTypeControl.valueChanges.subscribe(
      (data: string) => {
        if (contactTypeControl.status === 'VALID' && contactValue !== contactTypeControl.value) {
          this.contactTypeForm.controls['uniqueContact'].setValue('');
          this.vaidateUserContact();
          contactValue = contactTypeControl.value;
        }
      });
  }

  onSubmitForm() {
    this.enableSubmitBtn = false;
    this.generateOTP();
  }

  generateOTP() {
    const request = {
      'request': {
        'key': this.contactType === 'phone' ?
          this.contactTypeForm.controls.phone.value.toString() : this.contactTypeForm.controls.email.value,
        'type': this.contactType.toString()
      }
    };
    this.otpService.generateOTP(request).subscribe(
      (data: ServerResponse) => {
        this.prepareOtpData();
        this.showForm = false;
      },
      (err) => {
        const failedgenerateOTPMessage = (err.error.params.status === 'PHONE_ALREADY_IN_USE') ||
          (err.error.params.status === 'EMAIL_IN_USE') ? err.error.params.errmsg : this.resourceService.messages.fmsg.m0085;
        this.toasterService.error(failedgenerateOTPMessage);
        this.enableSubmitBtn = true;
      }
    );
  }

  updateProfile(data) {
    this.profileService.updateProfile(data).subscribe(res => {
      this.closeModal();
      const sMessage = this.contactType === 'phone' ?
        this.resourceService.messages.smsg.m0047 : this.resourceService.messages.smsg.m0048;
      this.toasterService.success(sMessage);
    }, err => {
      this.closeModal();
      const fMessage = this.contactType === 'phone' ?
        this.resourceService.messages.emsg.m0014 : this.resourceService.messages.emsg.m0015;
      this.toasterService.error(fMessage);
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
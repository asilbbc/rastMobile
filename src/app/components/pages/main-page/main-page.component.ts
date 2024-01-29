import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal , NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  constructor(
    public modalService: NgbModal,
    public modalConfig : NgbModalConfig
  ) {
  }

  @ViewChild('content') content!: ElementRef;

  newRecordForm = new FormGroup({
    socialMediaLink: new FormControl(''),
    socialMediaName: new FormControl(''),
    description: new FormControl('')
  });

  //data examples for table
  tableData: any = [
    { socialMediaLink: 'instagram.com/mobilerast', socialMediaName: 'intagram', description: 'We will help you to finish your development project successfully.' },
    { socialMediaLink: 'tr.linkendIn.com/mobilerast', socialMediaName: 'linkedIn', description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.' },
    { socialMediaLink: 'behance.com/mobilerast', socialMediaName: 'behance', description: 'Software Development Agency Rast Mobile Information Technology Ltd.' },
    { socialMediaLink: 'twitter.com/mobilerast', socialMediaName: 'twitter', description: 'Software Development Agency Rast Mobile Information Technology Ltd.' },
  ];

  //for opening the new record templete
  open() {
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' })
    this.modalConfig.size = 'md'
  }

  //save new record
  addNewRecord() {
    const data = {
      socialMediaLink: this.newRecordForm.value.socialMediaLink,
      socialMediaName: this.newRecordForm.value.socialMediaName,
      description: this.newRecordForm.value.description
    }

    console.log(data)
  }
}

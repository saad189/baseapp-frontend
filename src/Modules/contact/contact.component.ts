import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  env = environment;

  contactForm = this.fb.group({
    name: [[], [Validators.required]],
    email: [[], [Validators.email, Validators.required]],
    phone: [[], [Validators.required]],
    country: [[], [Validators.required]],
    description: [[], [Validators.required]],

  });

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {

  }

  saveData() {
    if (this.contactForm.invalid) {
      return;
    }

    const contact = {
      name: this.contactForm.get("name")?.value,
      email: this.contactForm.get("email")?.value,
      phone: this.contactForm.get("phone")?.value,
      country: this.contactForm.get("country")?.value,
      description: this.contactForm.get("description")?.value
    }

    console.log(contact);
    // Upload to Database
  }

}

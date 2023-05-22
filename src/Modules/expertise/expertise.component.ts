import { Component, OnInit } from '@angular/core';
import { Expertise } from 'src/Models/expertise';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss']
})
export class ExpertiseComponent implements OnInit {

  expertise: Expertise[] = [
    {
      name: "Web Development",
      description: "",
      link: "",
      image: ""
    }, {
      name: "Mobile Development",
      description: "",
      link: "",
      image: ""
    }, {
      name: "UI/UX Engineering",
      description: "",
      link: "",
      image: ""
    }, {
      name: "AI and ML Development",
      description: "",
      link: "",
      image: ""
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

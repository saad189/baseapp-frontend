import { Component, Input, OnInit } from "@angular/core";
import { ModuleInfo } from "src/Models/module-info";

import { AppService } from "src/Services/app-service/app.service";


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {


  @Input()
  currentModule: any;

  constructor(private appService: AppService) { }

  ngOnInit() { }



}

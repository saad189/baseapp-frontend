import { Component, HostListener, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { MODULE_ADDRESS, MODULE_NAMES, ModuleInfo } from 'src/Models/module-info';
import { environment } from 'src/environments/environment';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AppService } from 'src/Services/app-service/app.service';
import { FormControl } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  env = environment;

  minScrollLimit = 150;
  isNavBarFixed = false;
  isBarHidden = true;

  currentModule: any; //ModuleInfo
  moduleNames = MODULE_NAMES;
  moduleAddress = MODULE_ADDRESS;
  darkTheme = false;
  backgroundImage = 'background-grey';
  mode = new FormControl('over' as MatDrawerMode);

  isLoading = false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Tablet])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.manageNavigationSubscriptions();
  }

  manageNavigationSubscriptions() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.isLoading = true;
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator

        const paths = this.router.url.split("/").slice(1);


        this.currentModule = Object.values(this.moduleAddress).find((value) =>
          paths.includes(value)
        );

        this.isBarHidden = this.currentModule === this.moduleAddress.CONTACT;

        this.isLoading = false;
        console.log({ isBarHidden: this.isBarHidden, currentModule: this.currentModule, paths, modules: Object.values(this.moduleAddress) })
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
        this.isLoading = false;

        // Present error to user
        console.log(event.error);
      }
    });
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    this.isNavBarFixed = window.scrollY > this.minScrollLimit;
  }
}

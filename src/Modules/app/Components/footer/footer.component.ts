import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/Services/app-service/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public facebookPage = `https://www.facebook.com/Scientists-Engineers-100422122298630`;
  public instagramPage = `https://www.instagram.com/scientist_and_engineer`;
  public twitterPage = `https://twitter.com/SaadnFahad`;
  public youtubeChannel = `https://www.youtube.com/channel/UC5G6kQq4KUmPa3Pjvkh_8Lw`;
  public email = `safnbusiness@gmail.com`;
  public phoneNumber = `+92 3001024411`
  darkTheme = false;

  version = environment.VERSION;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.darkThemeObservable.subscribe(value => this.darkTheme = value);
  }

}

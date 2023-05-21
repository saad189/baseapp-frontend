import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private darkThemeSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public darkThemeObservable = this.darkThemeSubject.asObservable();

  constructor() { }

  private changeDarkTheme(value: boolean) {
    this.darkThemeSubject.next(value);
  }
}

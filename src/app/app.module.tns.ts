import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// nativescript
import { NSModuleFactoryLoader } from 'nativescript-angular/router';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
// vendor dependencies
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// app
import { Config } from './common/index';
import { AppComponent } from './app.component';
import {
  SHARED_MODULES,
  COMPONENT_DECLARATIONS,
  PROVIDERS,
} from './app.common';

import { UserService } from './user.service';
import { NavigationService } from './navigation.service';

Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;

export function TranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(<any>http, '/assets/i18n/', '.json');
}

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    NativeScriptModule,
    NativeScriptHttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (TranslateLoaderFactory),
        deps: [HttpClient]
      }
    }),
    ...SHARED_MODULES
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
  providers: [
    // Allows your {N} application to use lazy-loading
    { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader },
    UserService,
    NavigationService,
    ...PROVIDERS
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }

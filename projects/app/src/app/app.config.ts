import { ApplicationConfig, importProvidersFrom, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { Noir } from './app-theme';
import { ToastModule } from 'primeng/toast';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import localeEnGb from '@angular/common/locales/en-GB';
import { registerLocaleData } from '@angular/common';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ErrorInterceptor } from './interceptors/http-error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideYConfig, YConfig } from 'angular-yandex-maps-v3';
const config: YConfig = {
  apikey: '042405c2-12f5-4b78-9580-cb5ea1d7c106',
  lang:'ru_RU'
};

import {
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';

import { LocalizationService } from './services/localization.service';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader'; //
registerLocaleData(localeEnGb);
export const appConfig: ApplicationConfig = {
  providers: [
    provideYConfig(config),
    { provide: LOCALE_ID, useValue: 'en-GB' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    importProvidersFrom(
      TranslateModule.forRoot({
        fallbackLang: 'en',
        lang: 'en',

        loader: provideTranslateHttpLoader({
          prefix: 'assets/i18n/',
          suffix: '.json'
        })
      })
    ),
    TranslateService,
    TranslateStore,
    LocalizationService,
    importProvidersFrom(BrowserModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: Noir,
        options: {
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng'
          },
          darkModeSelector: '.p-dark'
        }
      }
    }),
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideAnimationsAsync(),
    importProvidersFrom(BrowserAnimationsModule, ToastModule),
    {
      provide: 'BASE_HREF',
      useFactory: () => {
        const baseElement = document.querySelector('base');
        return baseElement ? baseElement.getAttribute('href') || '/' : '/';
      }
    }
  ]
};

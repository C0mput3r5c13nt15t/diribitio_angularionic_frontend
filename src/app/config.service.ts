import { Injectable } from '@angular/core';
import app from 'src/config/app.config.json';
import backend from 'src/config/backend.config.json';
import conditions from 'src/config/conditions.json';
import content from 'src/config/content.json';
import data_protection from 'src/config/data-protection.json';
import error from 'src/config/error.json';
import help from 'src/config/help.json';
import home from 'src/config/home.json';
import imprint from 'src/config/imprint.json';

export interface ContentConfig {
  page: string;
  explanation?: string;
  explanations?: string[];
  error?: string;
  errors?: string[];
}

export interface BackendConfig {
  url: string;
}

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  private definiteArticlesCapital: { [gender: string]: string } = {
    m: 'Der',
    f: 'Die',
    n: 'Das',
  };
  private indefiniteArticlesCapital: { [gender: string]: string } = {
    m: 'Ein',
    f: 'Eine',
    n: 'Ein',
  };

  constructor() {}

  get_content(pageName) {
    // tslint:disable-next-line: triple-equals
    return content.contents.filter(text => text.page == pageName)[0].content;
  }

  get_content_by_index(pageName, index = 0) {
    // tslint:disable-next-line: triple-equals
    return content.contents.filter(text => text.page == pageName)[0].contents[index].content;
  }

  get_error(errorName) {
    // tslint:disable-next-line: triple-equals
    return error.errors.filter(descr => descr.error == errorName)[0].descr;
  }

  get_mail_status_descr(pageName, status) {
    // tslint:disable-next-line: triple-equals
    const descriptions = content.contents.filter(text => text.page == pageName)[0].descriptions;
    // tslint:disable-next-line: triple-equals
    return descriptions.filter(text => text.code == status)[0];
  }

  get app_config() {
    return app;
  }

  get backend_config() {
    return backend;
  }

  get conditions() {
    return conditions;
  }

  get data_protection() {
    return data_protection;
  }

  get help() {
    return help;
  }

  get home() {
    return home;
  }

  get imprint() {
    return imprint;
  }

  get definite_article() {
    const gender = app.noun_gender;
    return this.definiteArticlesCapital[gender];
  }

  get indefinite_article() {
    const gender = app.noun_gender;
    return this.indefiniteArticlesCapital[gender];
  }
}

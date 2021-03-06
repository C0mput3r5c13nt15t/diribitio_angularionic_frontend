import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { AlertService } from './alert.service';
import { ConfigService } from './config.service';
import { Response } from 'src/models/Response.model';

/**
 * This service handles all request to the backend having to do with the messages
 */
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  /**
   * The update event is emitted after every major successful request
   */
  @Output() update = new EventEmitter();

  constructor(private http: HttpClient,
              private auth: AuthenticationService,
              private alert: AlertService,
              private config: ConfigService) { }

  /**
   * The url to the backend
   */
  backendUrl = this.config.backend_config.url;

  /**
   * Creates a new message for a project
   * @param baseUrl Contains for which type of user accout this request is (students or leaders)
   * @param messageData Contains the message
   * @returns RequestObservable
   */
  createMessage(baseUrl= 'students', messageData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.post<Response>(this.backendUrl + baseUrl + '/store_leaded_project_message', messageData, options);
  }

  /**
   * Deletes the message with the given id from a project
   * @param baseUrl Contains for which type of user accout this request is (students or leaders)
   * @param messageID Contains the id of the message to be deleted
   * @returns RequestObservable
   */
  deleteMessage(baseUrl= 'students', messageID: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    this.http.delete<Response>(this.backendUrl + baseUrl + '/destroy_leaded_project_message/' + messageID, options).subscribe(() => {
      this.update.emit();
    }, error => {
      this.alert.error('Löschung der Nachricht fehlgeschlagen!', error.error);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/students.service';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-user-generation',
  templateUrl: './user-generation.page.html',
  styleUrls: ['./user-generation.page.scss'],
})
export class UserGenerationPage implements OnInit {
  signUpData: any = {
    user_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  text: string;

  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private alertCtrl: AlertController,
              private studentsService: StudentsService,
              private config: ConfigService) { }

  ngOnInit() {
    this.text = this.config.get_content('user-generation');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (paramMap.has('SignUpToken')) {
        this.signUpData.sign_up_token = this.activatedRoute.snapshot.paramMap.get('SignUpToken');
      }
    });
  }

  signUpAsStudent(form) {
    if (this.signUpData.password === this.signUpData.password_confirmation) {
      this.studentsService.signUpStudent(this.signUpData, form);
    } else {
      this.alertCtrl.create({
        header: 'Fehler',
        message: 'Das bestätigte Passwort entspricht nicht dem anfangs eingegebenen!',
        buttons: [{
          text: 'Ok',
          role: 'cancel',
          }]
        }).then(alertEl => {
          alertEl.present();
        });
    }
  }

}

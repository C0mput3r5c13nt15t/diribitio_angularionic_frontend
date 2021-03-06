import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { AlertController } from '@ionic/angular';
import { Student } from 'src/models/Student.model';
import { Project } from 'src/models/Project.model';
import { Schedule } from 'src/models/Schedule.model';
import { formatDate } from '@angular/common';
import { ScheduleService } from 'src/app/services/schedule.service';
import { ConfigService } from 'src/app/services/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-project-detail',
  templateUrl: './admin-project-detail.page.html',
  styleUrls: ['./admin-project-detail.page.scss'],
})
export class AdminProjectDetailPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  adminUrl: string;

  projectId: number;

  loadedProject: Project = {
    id: 0,
    authorized: 0,
    editable: 0,
    title: '',
    image: '',
    descr: '',
    leader_name: '',
    leader_type: '',
    leader_id: 0,
    cost: 0,
    first_day_begin: {
      hours: 0,
      minutes: 0,
    },
    first_day_end: {
      hours: 0,
      minutes: 0,
    },
    second_day_begin: {
      hours: 0,
      minutes: 0,
    },
    second_day_end: {
      hours: 0,
      minutes: 0,
    },
    min_grade: 0,
    max_grade: 0,
    min_participants: 0,
    max_participants: 0,
    messages: [],
    participants: [],
    leader: null,
    assistant_student_leaders: []
  };

  loadedStudentLeader: Student = {
    id: 0,
    user_name: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    grade: 0,
    letter: '',
    exchange_id: 0,
    exchange_requests: [],
    first_friend: 0,
    second_friend: 0,
    third_friend: 0,
    first_wish: 0,
    second_wish: 0,
    third_wish: 0,
    project_id: 0,
    role: 2
  };

  /**
   * Contains the time schedule of the application
   */
  schedule: Schedule = {
    id: 1,
    begin: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
    control: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
    registration: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
    sort_students: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
    exchange: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
    projects: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
    end: formatDate(new Date(), 'yyyy-MM-dd', 'en')
  };

  /**
   * Contains the current date in yyyy-MM-dd format
   */
  currentDate: any;

  adminWrongTime: string;

  imageUrl = this.config.backend_config.imageUrl;
  projectNoun = this.config.app_config.project_noun;
  projectsNoun = this.config.app_config.projects_noun;
  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private scheduleService: ScheduleService,
              private projectsService: ProjectsService,
              private alertCtrl: AlertController,
              private config: ConfigService) { }

  ngOnInit() {
    this.adminWrongTime = this.config.get_error('admin-wrong_time');

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('ProjectID')) {
        this.router.navigate(['']);
        return;
      }
      this.adminUrl = paramMap.get('AdminName');
      this.projectId = Number(paramMap.get('ProjectID'));
    });

    this.getSchedule();
    this.getProject();

    this.subscriptions.push(
      this.scheduleService.update.subscribe(() => this.getSchedule()),
      this.projectsService.update.subscribe(() => this.getProject())
    );
  }

  /**
   * Unsubscribes from all events when the page is unloaded
   */
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Gets the current time schedule for the application and sets the schedule value
   */
  getSchedule() {
    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });
  }

  getProject() {
    this.projectsService.getProjectAdmin(this.projectId).subscribe(data => {
      if (!data.data) {
        this.router.navigate([this.eventName + '/Admin/' + this.adminUrl]);
      } else {
        this.loadedProject = data.data;
      }
    });
  }

  authorizedChanged() {
    if (this.currentDate > this.schedule.control && this.currentDate <= this.schedule.registration) {
      this.projectsService.toogleAuthorizedProject(this.loadedProject.id, Boolean(this.loadedProject.authorized));
    }
  }

  editableChanged() {
    this.projectsService.toogleEditableProject(this.loadedProject.id, Boolean(this.loadedProject.editable));
  }

  deleteProject() {
    this.alertCtrl.create({
      header: 'Sind Sie sicher?',
      message: 'Wollen Sie dieses Projekt wirklich unwiederruflich löschen?',
      buttons: [{
        text: 'Abbrechen',
        role: 'cancel',
      }, {
        text: 'Löschen',
        handler: () => {
          this.projectsService.deleteProject(this.loadedProject.id);
          this.router.navigate([this.eventName + '/Admin/' + this.adminUrl + '/' + this.projectsNoun]);
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}

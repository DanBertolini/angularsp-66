import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../interfaces/task.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  private type: string = '';
  private tasks: Array<Task> = [];
  public shownTasks: Array<Task> = [];

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
    if(this.tasks.length === 0) {
      this.http.get('/api/tasks').subscribe((tasks) => {
        this.tasks = (tasks as unknown as Array<Task>).concat([]);
        this.shownTasks = this.tasks.filter((task) => task.status === this.type);
      });
    }
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ type }) => {
      this.type = type;
      if (this.tasks.length !== 0) {
        this.shownTasks = this.tasks.filter((task) => task.status === type);
      }
    });
  }
}

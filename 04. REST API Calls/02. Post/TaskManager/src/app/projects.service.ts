import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  urlPrefix: string = 'http://localhost:5201/api/'; //Dot Net Core WebAPI URL

  constructor(private httpClient: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.urlPrefix + 'Projects');
  }

  insertProject(newProject: Project): Observable<Project> {
    return this.httpClient.post<Project>(
      this.urlPrefix + 'Projects',
      newProject
    );
  }
}

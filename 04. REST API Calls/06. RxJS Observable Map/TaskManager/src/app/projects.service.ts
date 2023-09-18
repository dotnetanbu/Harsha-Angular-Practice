import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  urlPrefix: string = 'http://localhost:5201/api/'; //Dot Net Core WebAPI URL

  constructor(private httpClient: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.httpClient
      .get<Project[]>(this.urlPrefix + 'Projects', { responseType: 'json' })
      .pipe(
        map((data: Project[]) => {
          for (let i = 0; i < data.length; i++) {
            data[i].teamSize = data[i].teamSize * 100;
          }
          return data;
        })
      );
  }

  insertProject(newProject: Project): Observable<Project> {
    return this.httpClient.post<Project>(
      this.urlPrefix + 'Projects',
      newProject
    );
  }

  updateProject(existingProject: Project): Observable<Project> {
    return this.httpClient.put<Project>(
      this.urlPrefix + 'projects',
      existingProject,
      { responseType: 'json' }
    );
  }

  deleteProject(projectID: number): Observable<string> {
    return this.httpClient.delete<string>(
      this.urlPrefix + 'projects/' + projectID.toString()
    );
  }

  SearchProjects(searchBy: string, searchText: string): Observable<Project[]> {
    return this.httpClient.get<Project[]>(
      this.urlPrefix + 'projects/' + searchBy + '/' + searchText
    );
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];

  ngOnInit(): void {
    this.Designation = 'Team Leader';
    this.Username = 'Anbu';
    this.NoOfTeamMembers = 10;
    this.TotalCostOfAllProjects = 20;
    this.PendingTasks = 90;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;

    this.Clients = [
      'ABC Infotech Ltd.',
      'DEF Software Solutions',
      'GHI Industries',
    ];

    this.Projects = ['Project A', 'Project B', 'Project C', 'Project D'];

    for (var i = 2023; i >= 2018; i--) {
      this.Years.push(i);
    }

    this.TeamMembersSummary = [
      {
        Region: 'East',
        TeamMembersCount: 20,
        TemporarilyUnavailableMembers: 4,
      },
      {
        Region: 'West',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 8,
      },
      {
        Region: 'South',
        TeamMembersCount: 17,
        TemporarilyUnavailableMembers: 1,
      },
      {
        Region: 'North',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 6,
      },
    ];

    this.TeamMembers = [
      {
        Region: 'East',
        Members: [
          { ID: 1, Name: 'Ford', Status: 'Available' },
          { ID: 2, Name: 'Miller', Status: 'Available' },
          { ID: 3, Name: 'Jones', Status: 'Busy' },
          { ID: 4, Name: 'James', Status: 'Busy' },
        ],
      },
      {
        Region: 'West',
        Members: [
          { ID: 5, Name: 'Anna', Status: 'Available' },
          { ID: 6, Name: 'Arun', Status: 'Available' },
          { ID: 7, Name: 'Varun', Status: 'Busy' },
          { ID: 8, Name: 'Jasmine', Status: 'Busy' },
        ],
      },
      {
        Region: 'South',
        Members: [
          { ID: 9, Name: 'Krishna', Status: 'Available' },
          { ID: 10, Name: 'Mohan', Status: 'Available' },
          { ID: 11, Name: 'Raju', Status: 'Busy' },
          { ID: 12, Name: 'Farooq', Status: 'Busy' },
        ],
      },
      {
        Region: 'North',
        Members: [
          { ID: 13, Name: 'Jacob', Status: 'Available' },
          { ID: 14, Name: 'Smith', Status: 'Available' },
          { ID: 15, Name: 'Jones', Status: 'Busy' },
          { ID: 16, Name: 'James', Status: 'Busy' },
        ],
      },
    ];
  }

  onProjectChange($event: any) {
    if ($event.target.innerHTML == 'Project A') {
      this.ProjectCost = 2113000;
      this.CurrentExpenditure = 96700;
      this.AvailableFunds = 52500;
    } else if ($event.target.innerHTML == 'Project B') {
      this.ProjectCost = 2113111;
      this.CurrentExpenditure = 96711;
      this.AvailableFunds = 52511;
    } else if ($event.target.innerHTML == 'Project C') {
      this.ProjectCost = 2113222;
      this.CurrentExpenditure = 96722;
      this.AvailableFunds = 52522;
    } else if ($event.target.innerHTML == 'Project D') {
      this.ProjectCost = 2113333;
      this.CurrentExpenditure = 96733;
      this.AvailableFunds = 52533;
    } else {
      this.ProjectCost = 0;
      this.CurrentExpenditure = 0;
      this.AvailableFunds = 0;
    }
  }
}

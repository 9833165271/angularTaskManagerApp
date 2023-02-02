import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation: string = "";
  Username: string = "";
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;
  ToDay!: Date;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = []; 


  ngOnInit(): void {
    this.Designation = 'Team Leader';
    this.Username = 'John Smith';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 0.2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.ToDay= new Date();

    this.Clients=[
      "ABC Infotech Ltd.", "DEF Software Solutions","GHI Industries"
    ];

    this.Projects = [
      "Project A", "Project B", "Project C", "Project D" 
    ];

    for(var i=2023; i>2015; i--){
      this.Years.push(i)
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

  

  this.TeamMembers=[
    {
      Region:"East", Members:[
      {ID:1,Name:"Ab", Status:"Available"},
      {ID:2,Name:"ABc", Status:"Available"},
      {ID:3,Name:"Abcd", Status:"Busy"},
      {ID:4,Name:"abcde", Status:"Busy"}
    ]
  },
    {Region:"West", Members:[
      {ID:5,Name:"Ford", Status:"Available"},
      {ID:6,Name:"Fin", Status:"Available"},
      {ID:7,Name:"Firoz", Status:"Busy"},
      {ID:8,Name:"Fahad", Status:"Busy"}
    ]
  },
    {
      Region:"South", Members:[
      {ID:9,Name:"ccc", Status:"Available"},
      {ID:10,Name:"cc1", Status:"Available"},
      {ID:11,Name:"cc2", Status:"Busy"},
      {ID:12,Name:"Freddy", Status:"Busy"}
    ]
  },
    {
      Region:"North", Members:[
      {ID:1,Name:"aws", Status:"Available"},
      {ID:1,Name:"zuan", Status:"Available"},
      {ID:1,Name:"fign", Status:"Busy"},
      {ID:1,Name:"john", Status:"Busy"}
    ]
  }
  ];
  }
  onProjectChange($event: any)
  {
    //console.log($event.target.innerHTML);
    if($event.target.innerHTML =="Project A")
    {
      this.ProjectCost= 1231748;
      this.CurrentExpenditure = 78645;
      this.AvailableFunds = 543289;
    }
    else if($event.target.innerHTML == "Project B")
    { 
      this.ProjectCost= 12748;
      this.CurrentExpenditure = 645;
      this.AvailableFunds = 5329;
    }
    else if($event.target.innerHTML == "Project c")
    { 
      this.ProjectCost= 31748;
      this.CurrentExpenditure = 5090;
      this.AvailableFunds = 90870;
    }
  }
}

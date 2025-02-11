
const employees = [
  {
      "id": 1,
      "firstname": "Aarav",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Complete Documentation",
              "description": "Finish the user guide documentation.",
              "date": "2024-11-10",
              "category": "Documentation",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "title": "Bug Fix",
              "description": "Resolve reported login issues.",
              "date": "2024-11-12",
              "category": "Development",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Team Meeting",
              "description": "Discuss project status with team members.",
              "date": "2024-11-15",
              "category": "Meetings",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 2,
      "firstname": "Ishita",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Update Software",
              "description": "Install the latest software updates.",
              "date": "2024-11-11",
              "category": "Maintenance",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Prepare Report",
              "description": "Compile weekly performance report.",
              "date": "2024-11-13",
              "category": "Reporting",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "title": "Client Call",
              "description": "Discuss requirements with client.",
              "date": "2024-11-14",
              "category": "Communication",
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 1
      }
  },
  {
      "id": 3,
      "firstname": "Kabir",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Code Review",
              "description": "Review code for recent PRs.",
              "date": "2024-11-09",
              "category": "Code Review",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "title": "Database Optimization",
              "description": "Optimize database queries.",
              "date": "2024-11-13",
              "category": "Development",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Product Demo",
              "description": "Demo product to stakeholders.",
              "date": "2024-11-15",
              "category": "Presentation",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 4,
      "firstname": "Simran",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Backup Data",
              "description": "Ensure data backup is completed.",
              "date": "2024-11-09",
              "category": "Maintenance",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": true
          },
          {
              "title": "Project Planning",
              "description": "Plan the next quarter's project roadmap.",
              "date": "2024-11-12",
              "category": "Planning",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 2,
          "completed": 0,
          "failed": 1
      }
  },
  {
      "id": 5,
      "firstname": "Vikram",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Testing",
              "description": "Test the new feature release.",
              "date": "2024-11-10",
              "category": "Testing",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "title": "Team Training",
              "description": "Conduct training for the new hires.",
              "date": "2024-11-15",
              "category": "Training",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 0,
          "completed": 1,
          "failed": 0
      }
  }
];

const admin = [
  {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin };
};

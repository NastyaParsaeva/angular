import { Injectable } from '@angular/core';
import { CourseItemComponent } from './course-item/course-item.component';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private courses = [
    {
      id: 1005,
      title: 'Video Course 1',
      duration: 88,
      creationDate: new Date(),
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
      mollit anim id est laborum.`,
      isTopRated: false
    },
    {
      id: 1006,
      title: 'Video Course 2',
      duration: 109,
      creationDate: new Date('06.09.2018'),
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
      mollit anim id est laborum.`,
      isTopRated: false
    },
    {
      id: 1007,
      title: 'Video Course 3',
      duration: 99,
      creationDate: new Date('09.18.2018'),
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
      mollit anim id est laborum.`,
      isTopRated: true
    },
    {
      id: 1008,
      title: 'Video Course 4',
      duration: 55,
      creationDate: new Date('07.15.2018'),
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
      mollit anim id est laborum.`,
      isTopRated: false
    },
    {
      id: 1009,
      title: 'Video Course 5',
      duration: 55,
      creationDate: new Date('07.15.2019'),
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
      mollit anim id est laborum.`,
      isTopRated: false
    }
  ];

  constructor() { }

  getList() {
    return this.courses;
  }

  createCourse() {

  }

  getItemById() {

  }

  updateItem() {

  }

  removeItem(courseId) {
    console.log('remove item service' + courseId);
    let courseIndex = this.courses.findIndex(element => {
      if (element.id === courseId) {
        return true;
      }
    })
    this.courses.splice(courseIndex, 1);
  }
}

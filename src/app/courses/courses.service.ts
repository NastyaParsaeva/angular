import { Injectable } from '@angular/core';
import { CourseItemComponent } from './course-item/course-item.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CourseItem } from './course-item.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private courses = [
    {
      id: 10004005,
      title: 'Angular 2018Q2: TypeScript Fundamentals RU',
      duration: 65,
      creationDate: new Date('06.05.2018'),
      description: 'TypeScript — the programming language presented to ' +
      'Microsoft in 2012 and positioned as the development tool of web applications expanding ' +
      'possibilities of JavaScript. TypeScript is the superset of the JS language allowing to annotate types ' +
      'of various objects and already today to use possibilities of ES6 and some opportunities of ES7. ' + 
      'Language gains popularity and moves ahead the Google and Microsoft companies, is used in development ' +
      'of frameworks of new generation, for example such as Angular 2.',
      isTopRated: false
    },
    {
      id: 10004006,
      title: 'Angular 2018Q4: Angular Intro (Q&A Session)',
      duration: 78,
      creationDate: new Date('06.13.2018'),
      description: `How to build your first Hello World Angular application.
      We will:
      -take a look on ng-cli.
      -create simple application
      -take a look on desired application (video courses) and discuss
      -review project structure`,
      isTopRated: false
    },
    {
      id: 10004007,
      title: 'Angular 2018Q2: Components RU',
      duration: 68,
      creationDate: new Date('06.20.2018'),
      description: 'On this training, we will take a look at custom components in Angular 2, ' + 
      'what they are, how to build components in Angular 2 application and pass data between them. ' + 
      'Also, we will check components lifecycle and find out correct component’s lifecycle event for ' + 
      'several common tasks you’ll face during development. ',
      isTopRated: true
    },
    {
      id: 10004008,
      title: 'Angular 2018Q2: Unit Testing for Angular RU',
      duration: 72,
      creationDate: new Date('06.26.2018'),
      description: 'This training is for writing Unit tests on the Angular 2 application. ' + 
      'During the training people will be receive understanding what Unit tests are, why they are needed, ' + 
      'how to write code and Unit tests. The main goal of this training is to try on the practice to ' + 
      'write tests for all Angular components.',
      isTopRated: false
    },
    {
      id: 10004009,
      title: 'Angular 2018Q2: Working with Directives and Pipes RU',
      duration: 78,
      creationDate: new Date('07.04.2018'),
      description: 'This training is about Angular 2 directives and pipes. It covers pipes purpose, ' + 
      'build-in pipes usage and custom pipes creation. Participants will know about built-in directives ' + 
      'and how to write custom directives. ',
      isTopRated: false
    },
    {
      id: 10004010,
      title: 'Angular 2018Q2: Modules, Services and DI RU',
      duration: 84,
      creationDate: new Date('07.11.2018'),
      description: 'Multiple components have to use the same functionality over and over again. ' + 
      'To not copy and paste same code each time we need to use some other way. So let\'s figure out how ' + 
      'services can be used for this purpose. ',
      isTopRated: false
    },
    {
      id: 10004011,
      title: 'Angular 2018Q2: Understanding Сhange Detection RU',
      duration: 58,
      creationDate: new Date('07.23.2018'),
      description: 'Angular 2 introduces a reinvented change detection system that drops digest cycles in ' + 
      'favor of one-way flow. Additionally, change detection can now be controlled and fine-tuned by developers ' +
      'to get the most of the framework\'s performance. Let\'s find out how. ',
      isTopRated: false
    },
    {
      id: 10004012,
      title: 'Angular 2018Q2: Routing RU',
      duration: 60,
      creationDate: new Date('07.25.2018'),
      description: 'In this training, we will take a look at Angular2 Routing. Also will try to use ' +
      'it in the real application, will write simple navigation, guards, and lazy module loading. ',
      isTopRated: false
    },
    {
      id: 10004013,
      title: 'Angular 2018Q2: HTTP RU',
      duration: 32,
      creationDate: new Date('07.31.2018'),
      description: 'In this training, we will get familiar with angular2 HTTP module. ' +
      'We will write a small search application in real time. ',
      isTopRated: false
    },
    {
      id: 10004014,
      title: 'Angular 2018Q2: RxJS Observables RU',
      duration: 78,
      creationDate: new Date('08.08.2018'),
      description: 'Applications, especially on the web have changed over the years from being ' +
      'a simple static page to DHTML with animations to the Ajax revolution. Each time, we\'re adding more '+
      'complexity, more data, and asynchronous behavior to our applications. The Reactive Extensions ' +
      'for JavaScript (RxJS) is a set of libraries for composing asynchronous and event-based programs ' +
      'using observable sequences and fluent query operators. Using RxJS, developers represent asynchronous ' +
      'data streams with Observables, query asynchronous data streams using library operators, and ' +
      'parameterize the concurrency in the asynchronous data streams using Schedulers. ',
      isTopRated: false
    },
    {
      id: 10004015,
      title: 'Angular 2018Q2: Redux Architecture RU',
      duration: 58,
      creationDate: new Date('08.13.2018'),
      description: 'Redux is a predictable state container for JavaScript apps. Redux evolves the ideas ' +
      'of Flux but avoids its complexity by taking cues from Elm. ',
      isTopRated: false
    },
    {
      id: 10004016,
      title: 'Angular 2018Q2: Forms Fundamentals RU',
      duration: 67,
      creationDate: new Date('08.20.2018'),
      description: 'This training will cover the fundamentals of working with forms in Angular 2. ' +
      'You will learn how to create forms, apply validations and styles, effectively use   some specific features.',
      isTopRated: false
    },
    {
      id: 10004017,
      title: 'Angular 2018Q2: Internationalization RU',
      duration: 58,
      creationDate: new Date('09.14.2018'),
      description: 'Application internationalization is a many-faceted area of development, focused on making ' +
      'applications available and user-friendly to a worldwide audience. This course describes Angular\'s ' +
      'internationalization (i18n) tools, which can help you make your app available in multiple languages.',
      isTopRated: false
    }
  ];

  constructor(private http: HttpClient) { }

  getCourses(pageNumber: number = null, itemsPerPage: number = null): Observable<CourseItem[]> {
    return this.http.get<any>(BASE_URL).pipe(map(data => {
      let coursesList = data;
      return coursesList.map(item => {
        return {
          id: item.id,
          title: item.name,
          creationDate: item.date, 
          duration: item.length,
          description: item.description,
          isTopRated: item.isTopRated
        };
      });
    }));
  }

  getFilteredItems(textFragment: string): Observable<CourseItem[]> {
    return this.http.get<CourseItem[]>(BASE_URL, {params: {textFragment}});
  }

  createCourse() {

  }

  getItemById(id) {
    return this.http.get<any>(`${ BASE_URL }/${id}`).pipe(map(item => {
      return {
        id: item.id,
        title: item.name,
        creationDate: item.date, 
        duration: item.length,
        description: item.description,
        isTopRated: item.isTopRated,
        authors: item.authors
      }
    }));
  }

  updateItem() {
    
  }

  removeItem(courseId: number): any {
    let temp = null;
    console.log('remove service' + courseId);
    return this.http.delete<CourseItem>(`${BASE_URL}/${courseId}`);
  }
}
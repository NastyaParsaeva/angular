import { ConvertCourseItemToServiceCoursePipe } from './convert-course-item-to-service-course.pipe';

describe('ConvertCourseItemToServiceCoursePipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertCourseItemToServiceCoursePipe();
    expect(pipe).toBeTruthy();
  });
});

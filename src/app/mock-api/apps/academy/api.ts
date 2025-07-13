import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
import { categories as categoriesData, courses as coursesData  } from 'app/mock-api/apps/academy/data';
import { cloneDeep } from 'lodash-es';
import { securityCourseSteps } from './data-security';
import { steps_security_boot_security_001 } from './data';

@Injectable({providedIn: 'root'})
export class AcademyMockApi
{
    private _categories: any[] = categoriesData;
    private _courses: any[] = coursesData;
    private _demoCourseSteps: any[] = securityCourseSteps;
    private _steps_security_boot_security_001: any[] = steps_security_boot_security_001;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Categories - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/academy/categories')
            .reply(() =>
            {
                // Clone the categories
                const categories = cloneDeep(this._categories);

                // Sort the categories alphabetically by title
                categories.sort((a, b) => a.title.localeCompare(b.title));

                return [200, categories];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Courses - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/academy/courses')
            .reply(() =>
            {
                // Clone the courses
                const courses = cloneDeep(this._courses);

                return [200, courses];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Course - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/academy/courses/course')
            .reply(({request}) =>
            {
                // Get the id from the params
                const id = request.params.get('id');

                const stepsVarName = `_steps_${id}`;
                let stepsTmp = [];
                if (typeof (this as any)[stepsVarName] !== 'undefined') {
                    stepsTmp = cloneDeep((this as any)[stepsVarName]);
                }
                // Clone the courses and steps
                const courses = cloneDeep(this._courses);
                // const steps = cloneDeep(this._demoCourseSteps);

                // Find the course and attach steps to it
                const course = courses.find(item => item.id === id);
                if ( course )
                {
                    course.steps = stepsTmp;
                }

                return [
                    200,
                    course,
                ];
            });
    }
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UsersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Login Via Google
     * @returns any Successful Response
     * @throws ApiError
     */
    public loginViaGoogleApiLoginGoogleGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/login/google',
        });
    }

    /**
     * Auth Via Google
     * @returns any Successful Response
     * @throws ApiError
     */
    public authViaGoogleApiAuthGoogleGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auth/google',
        });
    }

    /**
     * Get Me
     * @returns any Successful Response
     * @throws ApiError
     */
    public getMeApiUsersMeGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/me',
        });
    }

}
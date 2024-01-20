/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeedPost } from '../models/FeedPost';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PostsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Posts
     * @returns FeedPost Successful Response
     * @throws ApiError
     */
    public getPostsApiPostsGet(): CancelablePromise<Array<FeedPost>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/posts',
        });
    }

    /**
     * Get Post
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public getPostApiPostsIdGet(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/posts/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
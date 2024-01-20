/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeedPost } from '../models/FeedPost';
import type { PostCreate } from '../models/PostCreate';

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
     * Create Post
     * @param requestBody
     * @returns FeedPost Successful Response
     * @throws ApiError
     */
    public createPostApiPostsPost(
        requestBody: PostCreate,
    ): CancelablePromise<FeedPost> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/posts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
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
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { AppClient } from './AppClient';

export { ApiError } from './core/ApiError';
export { BaseHttpRequest } from './core/BaseHttpRequest';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { Author } from './models/Author';
export type { FeedPost } from './models/FeedPost';
export type { HTTPValidationError } from './models/HTTPValidationError';
export type { PostCreate } from './models/PostCreate';
export type { User } from './models/User';
export type { ValidationError } from './models/ValidationError';

export { PostsService } from './services/PostsService';
export { UsersService } from './services/UsersService';

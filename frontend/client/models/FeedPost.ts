/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Author } from './Author';

export type FeedPost = {
    id: number;
    title: string;
    content: string;
    likesCount: number;
    commentsCount: number;
    date: string;
    author: Author;
};

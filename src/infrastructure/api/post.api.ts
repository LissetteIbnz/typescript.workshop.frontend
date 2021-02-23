import { runRequest, RequestArgs } from './api'
import { POSTS_EXTENDED_PATH, POSTS_LIKE_PATH, POSTS_PATH } from '@common'
import { ApiPost, ApiError } from '@types'

export const getAllPostsApi = async (): Promise<ApiPost[] | ApiError> => {
  const requestParams: RequestArgs = {
    method: 'get',
    url: POSTS_PATH
  }

  return await runRequest(requestParams)
}

export const getAllExtendedPostsApi = async (token: string): Promise<ApiPost[] | ApiError> => {
  const requestParams: RequestArgs = {
    method: 'get',
    url: POSTS_EXTENDED_PATH,
    token
  }

  return await runRequest(requestParams)
}

export const getPostByIdApi = async (postId: string): Promise<ApiPost | ApiError> => {
  const requestParams: RequestArgs = {
    method: 'get',
    url: `${POSTS_PATH}/${postId}`
  }

  return await runRequest(requestParams)
}

export const getExtendedPostByIdApi = async (postId: string, token: string): Promise<ApiPost | ApiError> => {
  const requestParams: RequestArgs = {
    method: 'get',
    url: `${POSTS_EXTENDED_PATH}/${postId}`,
    token
  }

  return await runRequest(requestParams)
}

export const createNewPostApi = async (postBody: string, token: string): Promise<ApiPost | ApiError> => {
  const requestParams: RequestArgs = {
    method: 'post',
    url: `${POSTS_PATH}`,
    token,
    body: { postBody }
  }

  return await runRequest(requestParams)
}

export const likePostApi = async (postId: string, token: string): Promise<ApiPost | ApiError> => {
  const requestParams: RequestArgs = {
    method: 'post',
    url: `${POSTS_LIKE_PATH}`,
    token,
    body: { postId }
  }

  return await runRequest(requestParams)
}

export const dislikePostApi = async (postId: string, token: string): Promise<ApiPost | ApiError> => {
  const requestParams: RequestArgs = {
    method: 'delete',
    url: `${POSTS_LIKE_PATH}`,
    token,
    body: { postId }
  }

  return await runRequest(requestParams)
}

export const deletePostByIdApi = async (postId: string, token: string): Promise<ApiError | null> => {
  const requestParams: RequestArgs = {
    method: 'delete',
    url: `${POSTS_PATH}`,
    token,
    body: { postId }
  }

  return await runRequest(requestParams)
}

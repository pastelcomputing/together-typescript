// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TogetherAI from 'together-ai';
import { Response } from 'node-fetch';

const togetherAI = new TogetherAI({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource files', () => {
  test('retrieve', async () => {
    const responsePromise = togetherAI.files.retrieve('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(togetherAI.files.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      TogetherAI.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = togetherAI.files.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(togetherAI.files.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TogetherAI.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = togetherAI.files.delete('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(togetherAI.files.delete('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      TogetherAI.NotFoundError,
    );
  });

  test('content: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(togetherAI.files.content('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      TogetherAI.NotFoundError,
    );
  });
});
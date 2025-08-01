import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

// Error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Safe API call wrapper
export async function safeCosmicCall<T>(
  apiCall: () => Promise<{ objects: T[] }>
): Promise<T[]> {
  try {
    const response = await apiCall();
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []; // Handle empty results
    }
    console.error('Cosmic API error:', error);
    throw new Error('Failed to fetch data from Cosmic');
  }
}
import PocketBase from 'pocketbase';
import type { TypedPocketBase } from '../../pocketbase-types';

// Get PocketBase URL from environment variable or use default
// Set PUBLIC_POCKETBASE_URL in your .env file for production/deployment
const POCKETBASE_URL = import.meta.env.PUBLIC_POCKETBASE_URL || 'http://127.0.0.1:8090';

// Create a singleton PocketBase instance for client-side use
export const pb = new PocketBase(POCKETBASE_URL) as TypedPocketBase;

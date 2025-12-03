import PocketBase from 'pocketbase';
import type { TypedPocketBase } from '../../pocketbase-types';

// Create a singleton PocketBase instance for client-side use
export const pb = new PocketBase('http://127.0.0.1:8090') as TypedPocketBase;

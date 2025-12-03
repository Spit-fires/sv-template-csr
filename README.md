# sv

Sveltekit starter for spitfire

## Included resources
- sv minimal
- shadcn with neutral theme
- tailwindcss
- netlify adapter
- lucide icons
- CSR pocketbase

## PocketBase Setup

This template uses PocketBase in Client-Side Rendering (CSR) mode.

### Configuration

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the `PUBLIC_POCKETBASE_URL` in `.env` with your PocketBase URL:
   ```
   PUBLIC_POCKETBASE_URL=http://127.0.0.1:8090
   ```

### Usage

Import the PocketBase instance in your Svelte components:

```typescript
import { pb } from '$lib';

// Example: Fetch records
const records = await pb.collection('your_collection').getList();

// Example: Authentication
await pb.collection('users').authWithPassword('email@example.com', 'password');
```

The PocketBase instance is a singleton and maintains its state across your application.
// Development-only hook fixture. No Worker, authentication, env files or external services.
import { createServer } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
const repo = fileURLToPath(new URL('../..', import.meta.url));
const server = await createServer({
  configFile: false, envDir: false, envPrefix: [], root: repo,
  plugins: [react()], resolve: { alias: { '@': `${repo}/src` } },
  server: { host: '127.0.0.1', port: 4175, strictPort: true, fs: { strict: true, allow: [repo] } },
});
await server.listen();
for (const signal of ['SIGTERM', 'SIGINT']) process.once(signal, async () => { await server.close(); process.exit(0); });
console.log('Simulation fixture: http://127.0.0.1:4175/tests/simulations/harness.html');

<script lang="ts">
  import { isTauriAvailable } from "$lib";
  import { getTauriVersion } from "@tauri-apps/api/app";
  import { onMount } from "svelte";

  const wsServerUrl = import.meta.env.VITE_WS_SERVER_URL;

  // NodeJS.CpuUsage
  type CpuUsage = {
    user: number;
    system: number;
  };

  // NodeJS.MemoryUsage
  type MemoryUsage = {
    rss: number;
    heapTotal: number;
    heapUsed: number;
    external: number;
    arrayBuffers: number;
  };

  let stats:
    | {
        cpu: CpuUsage;
        memory: MemoryUsage;
      }
    | undefined = undefined;

  let tauriVersion: string;

  onMount(async () => {
    if (isTauriAvailable()) {
      try {
        tauriVersion = await getTauriVersion();
      } catch (e) {
        console.error(e);
      }
    }

    const socket = new WebSocket(wsServerUrl);
    socket.addEventListener("message", (event) => {
      if (!event.data) {
        return;
      }
      const data = JSON.parse(event.data);
      // console.log(data);
      stats = data;
    });
  });
</script>

<h1>Welcome to SvelteKit + Fastify + WebSocket{isTauriAvailable() ? " + Tauri" : ""}.</h1>

{#if stats}
  <pre>{JSON.stringify(stats, null, 2)}</pre>
{/if}

{#if tauriVersion}
  <p>Tauri: {tauriVersion}</p>
{/if}

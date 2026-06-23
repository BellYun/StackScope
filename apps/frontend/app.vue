<script setup lang="ts">
const config = useRuntimeConfig();

const { data: health, status } = await useFetch<{ ok: boolean; service: string }>(
  "/api/health",
  {
    baseURL: config.public.apiBase,
    server: false,
  },
);
</script>

<template>
  <main class="shell">
    <section class="panel">
      <p class="eyebrow">StackScope</p>
      <h1>Nuxt frontend + Next backend</h1>
      <p class="summary">
        Frontend runs on port 3000. Backend API runs on port 3001.
      </p>
      <div class="status">
        <span class="dot" :class="{ live: health?.ok }" />
        <span>
          API:
          <strong v-if="health?.ok">{{ health.service }}</strong>
          <strong v-else>{{ status }}</strong>
        </span>
      </div>
    </section>
  </main>
</template>

<style scoped>
:global(body) {
  margin: 0;
  color: #17202a;
  background: #f5f7fa;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
}

.shell {
  display: grid;
  min-height: 100vh;
  place-items: center;
  padding: 32px;
}

.panel {
  width: min(100%, 680px);
  border: 1px solid #d8dee8;
  border-radius: 8px;
  background: #ffffff;
  padding: 32px;
}

.eyebrow {
  margin: 0 0 12px;
  color: #31685f;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(32px, 5vw, 56px);
  line-height: 1;
}

.summary {
  margin: 18px 0 0;
  color: #4c5968;
  font-size: 18px;
  line-height: 1.6;
}

.status {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 28px;
  color: #27313d;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: #a8b0ba;
}

.dot.live {
  background: #16a06d;
}
</style>

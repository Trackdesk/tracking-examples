<script setup lang="ts">
    useHead({
        script: [
            { src: 'https://cdn.trackdesk.com/tracking.js' },
            { innerHTML: `
                (function(t,d,k){(t[k]=t[k]||[]).push(d);t[d]=t[d]||t[k].f||function(){(t[d].q=t[d].q||[]).push(arguments)}})(window,"trackdesk","TrackdeskObject");
                trackdesk("robocop", "click");`
            }
        ]
    })
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
    useHead({
        script: [
            { innerHTML: `
                (function(t,d,k){(t[k]=t[k]||[]).push(d);t[d]=t[d]||t[k].f||function(){(t[d].q=t[d].q||[]).push(arguments)}})(window,"trackdesk","TrackdeskObject");
                trackdesk("robocop", "conversion", {
                    "conversionType": "sale"
                }); `
            }
        ]
    })
</script>

<template>
    <h1>Thank you page</h1>
</template>

<script setup lang="ts">
import { Client } from 'minio-core'

const client = new Client({
  endPoint: 'play.min.io',
  port: 9000,
  useSSL: true,
  accessKey: 'Q3AM3UQ867SPQQA43P2F',
  secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG',
})

console.log('client', client)
</script>

<template>
  <div />
</template>

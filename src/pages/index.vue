<template>
  <div>
    <h1>Helxlo!</h1>
    <button @click="throw new Error('Some sentry error');">Error</button>
  </div>
</template>

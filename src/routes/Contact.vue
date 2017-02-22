<template>
  <div class="contact">
    <a target="_blank" href="mailto:kevin.e.roark@gmail.com">kevin.e.roark@gmail.com</a>
    <a target="_blank" href="https://twitter.com/jester_rodeo">TWITTER</a>
    <a target="_blank" href="https://instagram.com/jester_rodeo">INSTAGRAM</a>
    <a target="_blank" href="https://github.com/kevin-roark">GITHUB</a>
    <a target="_blank" href="https://facebook.com/kevroark">FACEBOOK</a>
  </div>
</template>

<style scoped>
.contact {
  word-break: break-all;
  margin: 140px 20px;
  font-family: 'Crimson Text', 'Times New Roman', Times, serif;
  font-size: 120px;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
}

a {
  display: block;
  margin: 40px 0;
  color: inherit;
  text-decoration: underline;
  transition: color 0.1s;
}

.no-touch a:hover {
  color: #ddd;
}

@media (max-width: 800px) {
  .contact {
    margin: 70px 10px;
    font-size: 64px;
  }

  a {
    margin: 80px 0;
  }
}
</style>

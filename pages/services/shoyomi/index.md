---
layout: default.njk
title: 所読み | Index
---

<style>
  .artwork {
    border: 1px solid var(--text-color);
    width: 20vw;

  }

  .artwork img {
    width: 100%;
  }

  .artwork p {
    text-align: center;
    font-size: 1.5em;
  }

  .artwork:hover, .artwork a:hover {
    cursor: pointer;
    background-color: var(--text-color);
    color: var(--background-color);
  }

  .artwork .artist {
    font-size: 1.2em;
    font-style: italic;
    border-top: 1px solid var(--text-color);
  }

  .artwork a {
    text-decoration: none;
  }

  
</style>


<div class="artwork">
  <a href="./publishers/0/novel/0/">
    <img src="/assets/png/harmony_ren_light.png" alt="artwork" />
    <p>The Fall Of The Abyss</p>
    <p class="artist">{{ kai_placeholder }}</p>
  </a>
</div>
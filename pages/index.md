---
layout: default.njk
title: HARMONY連 | Index
---

<style>
.hero {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  height: 80vh;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--text-color);
  color: var(--background-color);
  padding: 0 2rem;
}

.hero h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.25rem;
  margin: 0 auto;
  max-width: 700px;
}

.hero button {
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border: 2px solid var(--text-color);
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero button:hover {
  background-color: var(--text-color);
  color: var(--background-color);
  border: 2px solid var(--background-color);
}

section {
  padding: 2rem 4rem;
  text-align: center;
}

section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

section p {
  margin: 0 auto;
  font-size: 1.1rem;
  max-width: 700px;
  color: #333;
}

.highlight {
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 0 10px;
  font-weight: 600;
  border-radius: 4px;
  font-style: italic;
}

@media (max-width: 1024px) {
  .hero h2 {
    font-size: 2.5rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  section h2 {
    font-size: 1.75rem;
  }

  section p {
    font-size: 1rem;
  }

  section {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .hero h2 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .hero button {
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
  }

  section h2 {
    font-size: 1.5rem;
  }

  section p {
    font-size: 0.95rem;
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    height: auto;
    padding: 2rem 1rem;
  }

  .hero h2 {
    font-size: 1.75rem;
  }

  .hero p {
    font-size: 0.95rem;
  }

  .hero button {
    width: 100%;
    padding: 0.75rem;
    font-size: 0.9rem;
  }

  section {
    padding: 1.5rem 1rem;
  }

  section h2 {
    font-size: 1.3rem;
  }

  section p {
    font-size: 0.9rem;
  }
}

</style>

<div class="hero">
      <h2>Research. Propose. Debate. Create.</h2><br/>
      <h2 class="highlight">For innovation.</h2>
      <p>Join the Open Innovation Collective HARMONY連</p>
      <button onclick="window.location.href='/get-involved'">Get Involved</button>
</div>

<section class="section" id="about">
  <h2>About Us</h2>
  <p>
    HARMONY連 (read HARMONY REN) is an Open Innovation collective focused on project proposal and innovation.
    Our goal is to cultivate ideas and transform them into actionable projects. The Collective's infrastructure is currently being built by our founder, {{ kai_placeholder }}, you can follow their progress on <a href="https://github.com/kai5041" target="_blank">GitHub</a>!
  </p>
</section>

<section id="what-we-do">
  <h2>What We Do</h2>
  <p>
    We research topics, propose theses, debate them, and create what we discuss.<br/>
    Every opinion matters, and collaboration drives our innovation forward.
  </p>
</section>

<section id="contact">
  <h2>Contact Us</h2>
  <p>
    Got an idea, feedback, or want to collaborate? Or maybe you just want to chat?<br/>
    <a href="/contact-us">Reach out to us here</a> – our founder, {{ kai_placeholder }}, values every message and looks forward to connecting with everyone.
  </p>
</section>

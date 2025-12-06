---
layout: default.njk
title: HARMONY連 | Index
---
<style>
.hero {
  text-align: center;
  background-color: var(--text-color);
  color: var(--background-color);
  width: 50%;
  max-width: 800px;
  margin: 3rem auto;
  padding: 3rem 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}

.hero .text {
  font-style: italic;
  font-size: 2em;
  line-height: 1.7;
}

.hero .highlight {
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 0 10px;
  font-weight: 600;
  border-radius: 4px;
}

.hero a {
  display: inline-block;
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 12px 28px;
  font-size: 1.2rem;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  border: 2px solid var(--text-color);
}

.hero a:hover {
  background-color: var(--text-color);
  color: var(--background-color);
  border: 2px solid var(--background-color);
}

.section {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  text-align: center;
}

.section p {
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
}

/* --- Responsive Structure Reinforcements --- */

@media (max-width: 1024px) {
  .hero {
    width: 70%;
    padding: 2.5rem 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero {
    width: 90%;
    padding: 2rem 1.2rem;
  }

  .hero .text {
    font-size: 1.6em;
  }

  .hero a {
    font-size: 1rem;
    padding: 10px 20px;
  }

  .section h2 {
    font-size: 1.6rem;
  }

  .section p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    width: 100%;
    margin: 2rem 0;
    padding: 1.8rem 1rem;
    border-radius: 0;
    box-shadow: none;
  }

  .hero .text {
    font-size: 1.4em;
    line-height: 1.5;
  }

  .hero a {
    width: 100%;
    max-width: 260px;
    padding: 10px;
    font-size: 0.95rem;
  }

  .section {
    padding: 0 0.8rem;
  }
}
</style>


<div class="hero">
  <div class="text">
    <p>
      Research. Propose.<br>
      Debate. Create.<br>
      <span class="highlight">For innovation.</span>
    </p>
  </div>
  
  <a href="/get-involved/">Get Involved</a>
</div>

<div class="section" id="about">
  <h2>About Us</h2>
  <p>
    HARMONY連 (read HARMONY REN) is an Open Innovation collective focused on project proposal and innovation.
    Our goal is to cultivate ideas and transform them into actionable projects. The Collective's infrastructure is currently being built by our founder, {{ kai_placeholder }}, you can follow their progress on <a href="https://github.com/kai5041" target="_blank">GitHub</a>!
  </p>
</div>

<div class="section" id="what-we-do">
  <h2>What We Do</h2>
  <p>
    We research topics, propose theses, debate them, and create what we discuss.<br/>
    Every opinion matters, and collaboration drives our innovation forward.
  </p>
</div>

<div class="section" id="contact">
  <h2>Contact Us</h2>
  <p>
    Got an idea, feedback, or want to collaborate? Or maybe you just want to chat?<br/>
    <a href="/contact-us">Reach out to us here</a> – our founder, {{ kai_placeholder }}, values every message and looks forward to connecting with everyone.
  </p>
</div>

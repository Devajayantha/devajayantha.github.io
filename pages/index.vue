<template>
  <div class="theme-gradient">
    <Head>
      <Title>Deva Jayantha — Software Engineer</Title>
    </Head>

    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <div class="row gy-4 align-items-center">
          <div class="col-lg-7">
            <div class="intro">
              <span class="eyebrow"><i class="fa-solid fa-code"></i> Software Engineer</span>
              <h1 class="title">Hi, I'm Deva — a software engineer focused on backend systems and growing through real product work.</h1>
              <p class="subtitle">
                Focused on APIs, data models, and integrations. Comfortable learning new tools quickly,
                collaborating with mobile teams, and shipping clean, maintainable code.
              </p>
              <div class="d-flex gap-2">
                <a href="/I_Putu Deva Jayantha Putra_Resume.pdf" class="btn btn-primary">
                  <i class="fa-solid fa-file-lines me-1"></i> Resume / CV
                </a>
                <a href="mailto:devajayantha870@gmail.com" class="btn btn-outline-primary">
                  <i class="fa-solid fa-envelope me-1"></i> Contact
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="profile-card">
              <img src="/images/photo3.jpg" alt="Portrait of Deva Jayantha" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="about">
      <div class="container">
        <div class="d-flex align-items-center gap-3 mb-2">
          <div class="bar"></div>
          <h2 class="section-title mb-0">About</h2>
        </div>
        <p class="lead">A quick snapshot of my background, interests, and how I work.</p>

        <div class="row g-3">
          <div class="col-lg-8">
            <div class="about-card">
              <p>
                I'm a backend developer from Bali. Over the past few years I've contributed to multiple projects,
                mainly building admin panels and RESTful APIs for mobile apps.
              </p>
              <p>
                I learn fast and adapt quickly to new languages and tools. I'm comfortable handling multiple tasks,
                collaborating across PM / mobile / QA, and delivering features that are reliable and easy to maintain.
              </p>
              <p>
                Lately I'm exploring machine learning and advanced tooling—experimenting, testing ideas, and
                integrating third-party services to ship creative, practical solutions.
              </p>
              <p class="mb-0">
                Outside code, I'm working on communication and public speaking. I like sharing ideas, practicing,
                and taking on challenges that stretch me.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="about-card h-100 d-flex flex-column justify-content-between">
              <div>
                <h6 class="fw-bold mb-2">Find me online</h6>
                <div class="social mb-3">
                  <a href="https://www.linkedin.com/in/deva-jayantha" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                  <a href="https://github.com/devajayantha" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
                  <a href="https://medium.com/@devajayantha" target="_blank" aria-label="Medium"><i class="fab fa-medium"></i></a>
                </div>
              </div>
              <div>
                <h6 class="fw-bold mb-2">Currently</h6>
                <ul class="mb-0">
                  <li>Backend Developer @ <a href="https://timedoor.net/" target="_blank" rel="noopener">Timedoor Indonesia</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles -->
    <section class="articles">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between mb-2">
          <div class="d-flex align-items-center gap-3">
            <div class="bar"></div>
            <h2 class="section-title mb-0">Articles</h2>
          </div>
          <div class="see-all">
            <a href="https://medium.com/@devajayantha" target="_blank" class="text-primary text-decoration-underline">
              See all on Medium
            </a>
          </div>
        </div>
        <p class="lead">I'm building a writing habit this year. Improving clarity and accuracy with each post.</p>
        <MediumPosts />
      </div>
    </section>

    <!-- Text + Image -->
    <section class="text-image">
      <div class="container">
        <div class="row align-items-center gy-4">
          <div class="col-md-8">
            <div class="bubble">
              <p class="mb-0">
                I usually work behind the scenes, but I enjoy collaborating with the team and
                stepping into discussions when technical decisions matter. I'm also practicing
                public speaking to communicate ideas better—one session at a time.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img class="portrait" src="/images/photo2.jpeg" alt="Deva speaking with students" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
:root { --bg:#f7fbff; --surface:#ffffff; --text:#0e1726; --muted:#66758a; --line:#e9eef5; --accent:#0d6efd; --radius:18px; --shadow:0 12px 30px rgba(2,8,23,.08); }
.theme-gradient { --bg:linear-gradient(180deg,#f7fbff 0,#f2f6ff 60%,#eef4ff 100%); --surface:#ffffff; --text:#0e1726; --muted:#55627a; --line:#e8eef7; --accent:#6366f1; --radius:18px; --shadow:0 14px 36px rgba(2,8,23,.10); --bar-grad:linear-gradient(90deg,#6366f1,#22d3ee); }

.theme-gradient { background: var(--bg); color: var(--text); }
.card { background: var(--surface); border:1px solid var(--line); border-radius: var(--radius); box-shadow: var(--shadow); }
.btn-primary { background:#111 !important; border-color:#111 !important; font-weight:700; border-radius:12px; }
.btn-primary:hover, .btn-primary:focus { background:#000 !important; border-color:#000 !important; }
.btn-outline-primary { color:#111 !important; border-color:#111 !important; border-radius:12px; }
.btn-outline-primary:hover, .btn-outline-primary:focus { background:#111 !important; color:#fff !important; border-color:#111 !important; }
.section-title { font-weight:800; letter-spacing:.2px; }
.bar { width:48px; height:6px; border-radius:999px; background: var(--bar-grad, linear-gradient(90deg,var(--accent),#7dd3fc)); }

.eyebrow { display:inline-flex; gap:.6rem; align-items:center; font-weight:800; letter-spacing:.3px; font-size:.9rem; color:#111 !important; background:rgba(0,0,0,.06) !important; border:1px solid #111 !important; padding:.35rem .7rem; border-radius:999px; }
.title { font-weight:900; letter-spacing:.2px; font-size:clamp(28px,4.2vw,44px); margin:.6rem 0 .6rem; color:var(--text); }
.subtitle { color:var(--muted); font-size:clamp(15px,1.4vw,18px); margin-bottom:1.1rem; }

.hero { position:relative; padding:clamp(48px,6vw,72px) 0; }
.hero .intro { max-width:700px; }
.profile-card { background:var(--surface); border:1px solid var(--line); border-radius:var(--radius); box-shadow:var(--shadow); padding:16px; width:min(360px,90%); margin-inline:auto; }
.profile-card img { border-radius:14px; width:100%; height:auto; display:block; }

.about { padding:56px 0 28px; }
.lead { color:var(--muted); }
.about-card { background:var(--surface); border:1px solid var(--line); border-radius:var(--radius); box-shadow:var(--shadow); padding:clamp(16px,2.6vw,26px); }
.about-card p { color:#24324a; }

.social a { display:inline-flex; align-items:center; justify-content:center; width:40px; height:40px; border-radius:10px; background:#fff; border:1px solid var(--line); margin-right:10px; color:#0e1726; transition:.18s ease transform,.18s ease box-shadow,.18s ease border-color; }
.social a:hover { transform:translateY(-2px); border-color:color-mix(in srgb,var(--accent) 35%,transparent); box-shadow:0 10px 22px color-mix(in srgb,var(--accent) 12%,transparent); color:var(--accent); }

.articles { padding:32px 0 48px; }
.post-card { background:#fff; border:1px solid var(--line); border-radius:16px; overflow:hidden; height:100%; box-shadow:var(--shadow); transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease; }
.post-card:hover { transform:translateY(-3px); border-color:color-mix(in srgb,var(--accent) 28%,transparent); box-shadow:0 16px 34px color-mix(in srgb,var(--accent) 14%,transparent); }
.thumb { width:100%; height:180px; object-fit:cover; display:block; }
.post-body { padding:14px 16px 16px; }
.post-title { font-weight:800; font-size:1rem; margin:0 0 .35rem; color:var(--text); }
.post-desc { color:var(--muted); font-size:.92rem; margin:0 0 .5rem; }
.post-link { font-weight:700; text-decoration:none; }
.see-all { text-align:right; }

.text-image { padding:48px 0 56px; }
.bubble { background:#fff; border:1px solid var(--line); border-radius:16px; padding:18px; box-shadow:var(--shadow); }
.portrait { width:100%; border-radius:16px; display:block; border:1px solid var(--line); }
</style>

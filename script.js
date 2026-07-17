(function () {
  "use strict";

  const content = window.PORTFOLIO_CONTENT;
  if (!content) return;

  const escapeHtml = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const tagList = (items, className = "tag-row") =>
    `<div class="${className}">${items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>`;

  const sectionIntro = (intro, index) => `
    <header class="section-intro">
      <div>
        <p class="eyebrow">${escapeHtml(intro.eyebrow)}</p>
        <h1>${escapeHtml(intro.title)}</h1>
      </div>
      <div class="section-copy">
        <span>${index} / 05</span>
        <p>${escapeHtml(intro.copy)}</p>
      </div>
    </header>
  `;

  function renderHome() {
    const home = content.home;
    const lifecycle = content.aiLifecycle;
    const displayStages = [
      ...lifecycle.stages.slice(0, 3),
      ...lifecycle.stages.slice(3).reverse(),
    ];

    document.querySelector("#panel-home").innerHTML = `
      <div class="home-panel">
        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">${escapeHtml(home.eyebrow)}</p>
            <h1>${escapeHtml(home.name)}</h1>
            <h2>${escapeHtml(home.headline)}</h2>
            <p>${escapeHtml(home.summary)}</p>
            <div class="hero-actions">
              <button class="primary-button" type="button" data-tab-target="projects">
                Explore my work <span aria-hidden="true">→</span>
              </button>
              <a class="secondary-button" href="${escapeHtml(content.personal.resume)}" download>
                Download CV <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div class="availability"><i aria-hidden="true"></i>${escapeHtml(home.availability)}</div>
          </div>

          <div class="lifecycle-visual" aria-label="End-to-end steps for building efficient and reliable AI systems">
            <div class="lifecycle-title">
              <span>${escapeHtml(lifecycle.eyebrow)}</span>
              <small>${escapeHtml(lifecycle.subtitle)}</small>
            </div>

            <div class="lifecycle-core">
              <h3>${escapeHtml(lifecycle.title)}</h3>
              <p>From a defined problem to a monitored production system.</p>
              <div class="stage-track">
                ${displayStages.map((stage) => `
                  <article class="stage-card">
                    <b>${escapeHtml(stage.number)}</b>
                    <strong>${escapeHtml(stage.title)}</strong>
                    <small>${escapeHtml(stage.detail)}</small>
                  </article>
                `).join("")}
              </div>
            </div>

            <div class="quality-checks">
              ${lifecycle.qualityChecks.map((check) => `
                <span class="quality-check ${escapeHtml(check.position)}">${escapeHtml(check.label)}</span>
              `).join("")}
            </div>

            <svg class="lifecycle-connectors" viewBox="0 0 760 525" preserveAspectRatio="none" aria-hidden="true">
              <path d="M130 107v42h88" />
              <path d="M630 107v42h-88" />
              <path d="M112 312h90" />
              <path d="M648 312h-90" />
              <path d="M174 470v-55h62" />
              <path d="M586 470v-55h-62" />
            </svg>
            <span class="end-to-end-badge">END-TO-END OWNERSHIP</span>
          </div>
        </div>

        <div class="signal-row" aria-label="Career highlights">
          ${home.stats.map((stat) => `
            <article class="signal-card">
              <strong>${escapeHtml(stat.value)}</strong>
              <div><b>${escapeHtml(stat.label)}</b><small>${escapeHtml(stat.note)}</small></div>
            </article>
          `).join("")}
          <article class="signal-card focus-card">
            <span>SELECTED FOCUS</span>
            ${tagList(home.focus, "focus-list")}
          </article>
        </div>
      </div>
    `;
  }

  function renderExperience() {
    document.querySelector("#panel-experience").innerHTML = `
      <div class="content-panel">
        ${sectionIntro(content.experienceIntro, "01")}
        <div class="experience-layout">
          <div class="timeline">
            ${content.experience.map((item, index) => `
              <article class="timeline-item">
                <span class="timeline-index">${String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p class="timeline-date">${escapeHtml(item.dates)}</p>
                  <h2>${escapeHtml(item.role)}</h2>
                  <h3>${escapeHtml(item.organization)}</h3>
                  <p>${escapeHtml(item.summary)}</p>
                  ${tagList(item.highlights)}
                </div>
              </article>
            `).join("")}
          </div>

          <aside class="expertise-rail">
            <p class="micro-label">CORE STACK</p>
            ${content.expertise.map((item, index) => `
              <div class="expertise-item">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <div><b>${escapeHtml(item.title)}</b><small>${escapeHtml(item.detail)}</small></div>
              </div>
            `).join("")}
            <div class="education-card">
              <p class="micro-label">EDUCATION</p>
              ${content.education.map((item) => `
                <b>${escapeHtml(item.degree)}</b><span>${escapeHtml(item.school)}</span>
              `).join("")}
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderProjects() {
    const projectCards = content.projects.map((project, index) => `
      <article class="project-card">
        <div class="project-top"><span>0${index + 1}</span><span>${escapeHtml(project.category)}</span></div>
        <div class="project-viz ${project.id === "security" ? "security" : ""}" aria-hidden="true">
          ${Array.from({ length: 5 }, () => '<i class="viz-node"></i>').join("")}
          <b>${escapeHtml(project.impact[0])}</b>
        </div>
        <h2>${escapeHtml(project.title)}</h2>
        <p>${escapeHtml(project.summary)}</p>
        ${tagList(project.impact, "impact-row")}
        <div class="project-footer">
          ${tagList(project.stack, "stack-row")}
          <div class="project-links">
            <button class="text-button" type="button" data-demo="${escapeHtml(project.id)}">${escapeHtml(project.demoLabel)} →</button>
            ${project.liveUrl ? `<a class="text-link" href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noreferrer">Live ↗</a>` : ""}
            ${project.githubUrl ? `<a class="text-link" href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noreferrer">Code ↗</a>` : ""}
          </div>
        </div>
      </article>
    `).join("");

    const publications = content.publications.map((publication, index) => {
      const inner = `
        <span>0${index + 1}</span>
        <div><b>${escapeHtml(publication.title)}</b><small>${escapeHtml(publication.authors)} · ${escapeHtml(publication.venue)}</small></div>
        ${publication.url ? "<span aria-hidden=\"true\">↗</span>" : '<span class="status-pill">2026</span>'}
      `;
      return publication.url
        ? `<a class="publication-row" href="${escapeHtml(publication.url)}" target="_blank" rel="noreferrer">${inner}</a>`
        : `<div class="publication-row">${inner}</div>`;
    }).join("");

    document.querySelector("#panel-projects").innerHTML = `
      <div class="content-panel">
        ${sectionIntro(content.projectsIntro, "02")}
        <div class="project-grid">${projectCards}</div>
        <div class="publication-block">
          <div class="publication-heading"><p class="micro-label">SELECTED PUBLICATIONS</p><span>IEEE · arXiv · 2026</span></div>
          ${publications}
        </div>
      </div>
    `;
  }

  function renderVisuals() {
    const matrix = [76, 64, 58, 49, 70, 66, 52, 42, 61, 55, 46, 39, 68, 71, 57, 45, 62, 59, 44, 34, 73, 67, 53, 48];
    document.querySelector("#panel-visuals").innerHTML = `
      <div class="content-panel">
        ${sectionIntro(content.visualsIntro, "03")}
        <div class="visual-grid">
          <article class="poster-card security">
            <div class="poster-meta"><span>RESEARCH VISUAL · 2026</span><b>01</b></div>
            <h2>LLM Security × OWASP</h2>
            <p>Detection strength across model families and attack categories.</p>
            <div class="security-matrix">
              ${matrix.map((value) => `<i title="${value}%" style="opacity:${0.18 + value / 105}"></i>`).join("")}
            </div>
            <div class="poster-legend"><span>LOW</span><b>10 models · 10 risk categories</b><span>HIGH</span></div>
          </article>

          <article class="poster-card">
            <div class="poster-meta"><span>SYSTEM ARCHITECTURE · 2026</span><b>02</b></div>
            <h2>HPC-LLM Agentic Pipeline</h2>
            <p>From live documentation ingestion to cited, domain-grounded answers.</p>
            <div class="system-map">
              <div class="map-node main">ORCHESTRATOR</div>
              <div class="map-node n1">CRAWL</div>
              <div class="map-node n2">RETRIEVE</div>
              <div class="map-node n3">GENERATE</div>
              <svg class="map-lines" viewBox="0 0 500 200" preserveAspectRatio="none" aria-hidden="true">
                <path d="M250 80L90 140M250 80v60m0-60l160 60" />
              </svg>
            </div>
            <div class="poster-legend"><span>A100 DEPLOYMENT</span><b>Stateful memory · citations · FastAPI</b></div>
          </article>
        </div>

        <div class="participation-block">
          <div><p class="micro-label">CONFERENCE PARTICIPATION & SUPPORT</p><h2>Research travels when the idea is worth sharing.</h2></div>
          <div class="conference-grid">
            ${content.conferences.map((item) => `<article><b>${escapeHtml(item.name)}</b><span>${escapeHtml(item.detail)}</span></article>`).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderTestimonials() {
    const verifiedQuotes = content.testimonials.length
      ? `<div class="testimonial-grid">${content.testimonials.map((item) => `
          <article class="testimonial-card">
            <blockquote>“${escapeHtml(item.quote)}”</blockquote>
            <footer><b>${escapeHtml(item.name)}</b><span>${escapeHtml(item.role)}</span></footer>
          </article>
        `).join("")}</div>`
      : `
        <div class="reference-card">
          <div class="quote-mark">“</div>
          <div><p>Verified recommendations from former supervisors and collaborators can be added here once supplied.</p><span>Professional references are available on request.</span></div>
          <a href="mailto:${escapeHtml(content.personal.email)}?subject=Professional%20reference%20request">Request references →</a>
        </div>
        <p class="integrity-note">No endorsements are fabricated—this space is reserved for verified words from real collaborators.</p>
      `;

    document.querySelector("#panel-testimonials").innerHTML = `
      <div class="content-panel">
        ${sectionIntro(content.testimonialsIntro, "04")}
        <div class="collaboration-grid">
          ${content.workStyle.map((item, index) => `
            <article class="collaboration-card"><span>0${index + 1}</span><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.copy)}</p></article>
          `).join("")}
        </div>
        ${verifiedQuotes}
      </div>
    `;
  }

  function renderConnect() {
    const personal = content.personal;
    document.querySelector("#panel-connect").innerHTML = `
      <div class="content-panel">
        ${sectionIntro(content.connectIntro, "05")}
        <div class="connect-grid">
          <div class="contact-cards">
            <a href="mailto:${escapeHtml(personal.email)}"><span>EMAIL</span><b>${escapeHtml(personal.email)}</b><b aria-hidden="true">→</b></a>
            <a href="tel:${escapeHtml(personal.phoneLink)}"><span>PHONE</span><b>${escapeHtml(personal.phoneDisplay)}</b><b aria-hidden="true">→</b></a>
            <a href="${escapeHtml(personal.linkedin)}" target="_blank" rel="noreferrer"><span>LINKEDIN</span><b>linkedin.com/in/nourin-shahin</b><b aria-hidden="true">↗</b></a>
            <a href="${escapeHtml(personal.scholar)}" target="_blank" rel="noreferrer"><span>GOOGLE SCHOLAR</span><b>Search publications & citations</b><b aria-hidden="true">↗</b></a>
            <a href="${escapeHtml(personal.resume)}" download><span>CURRICULUM VITAE</span><b>Download résumé · PDF</b><b aria-hidden="true">↓</b></a>
          </div>

          <form class="contact-form" id="contact-form">
            <p class="micro-label">START A CONVERSATION</p>
            <label>Your name<input id="contact-name" type="text" placeholder="Jane Recruiter" /></label>
            <label>Your email<input id="contact-email" type="email" placeholder="jane@company.com" /></label>
            <label>What would you like to discuss?<textarea id="contact-message" placeholder="Tell me about the role, team, or problem you’re solving..."></textarea></label>
            <button class="primary-button" type="submit">Open email draft <span aria-hidden="true">→</span></button>
            <small>This opens your email app—nothing is stored by this website.</small>
          </form>
        </div>
        <footer class="site-footer"><span>© 2026 ${escapeHtml(personal.name)}</span><b>AI ENGINEER · RESEARCHER · SYSTEM BUILDER</b><a href="#top">Back to top ↑</a></footer>
      </div>
    `;
  }

  const demoData = {
    security: {
      options: [
        { label: "Base64", value: "100%", note: "Specialized guard detected every encoded case in this test set." },
        { label: "Hex", value: "2%", note: "Hex encoding exposed a severe detection gap and a clear hardening target." },
        { label: "ASCII art", value: "0%", note: "Visual-text transformations bypassed detection in this evaluation." },
      ],
    },
    hpc: {
      options: [
        { label: "Why is my SLURM job pending?", source: "Scheduler guide · Priority & QOS", answer: "Check the job reason code with squeue. Priority, unavailable resources, or a QOS limit are the most likely causes; the cited scheduler guide maps each code to a next step." },
        { label: "How do I request an A100 GPU?", source: "GPU nodes · Resource request syntax", answer: "Request the GPU resource in your SLURM submission and select the documented A100 partition. The exact resource flag and limits come from the retrieved cluster guide." },
        { label: "How should I transfer a large dataset?", source: "Data transfer · Globus workflow", answer: "Use the center’s supported high-throughput transfer service rather than the login node. The retrieved guide recommends Globus and documents the endpoint and staging path." },
      ],
    },
  };

  function openDemo(id) {
    const project = content.projects.find((item) => item.id === id);
    if (!project) return;
    const root = document.querySelector("#modal-root");
    root.innerHTML = `
      <div class="modal-backdrop" data-modal-backdrop>
        <section class="demo-modal" role="dialog" aria-modal="true" aria-labelledby="demo-title">
          <header class="modal-head">
            <div><p class="micro-label">INTERACTIVE RESEARCH WALKTHROUGH</p><h2 id="demo-title">${escapeHtml(project.title)}</h2></div>
            <button class="close-button" type="button" data-modal-close aria-label="Close demo">×</button>
          </header>
          <div id="demo-content"></div>
        </section>
      </div>
    `;
    document.body.style.overflow = "hidden";
    renderDemoContent(id, 0);
    root.querySelector("[data-modal-close]").focus();
  }

  function renderDemoContent(id, selectedIndex) {
    const container = document.querySelector("#demo-content");
    if (!container) return;

    if (id === "security") {
      const options = demoData.security.options;
      const selected = options[selectedIndex];
      container.innerHTML = `
        <div class="demo-layout">
          <div class="demo-controls"><p>Select an encoding attack</p>${options.map((item, index) => `<button class="${index === selectedIndex ? "active" : ""}" type="button" data-demo-choice="${id}" data-choice-index="${index}"><span>${escapeHtml(item.label)}</span><b>${escapeHtml(item.value)}</b></button>`).join("")}</div>
          <div class="demo-result"><p class="micro-label">DETECTION RATE</p><strong>${escapeHtml(selected.value)}</strong><h3>${escapeHtml(selected.label)} attack</h3><p>${escapeHtml(selected.note)}</p><div class="result-meter"><i style="width:${escapeHtml(selected.value)}"></i></div><small>Research-results explorer · not a live security classifier</small></div>
        </div>
      `;
    } else if (id === "hpc") {
      const options = demoData.hpc.options;
      const selected = options[selectedIndex];
      container.innerHTML = `
        <div class="demo-layout">
          <div class="demo-controls"><p>Ask the HPC assistant</p>${options.map((item, index) => `<button class="${index === selectedIndex ? "active" : ""}" type="button" data-demo-choice="${id}" data-choice-index="${index}">${escapeHtml(item.label)}</button>`).join("")}</div>
          <div class="demo-result"><div class="retrieval-card"><p class="micro-label">01 · RETRIEVE</p><b>${escapeHtml(selected.source)}</b><small>Top semantic match · cited source</small></div><div class="answer-card"><small>02 · GROUNDED ANSWER</small><p>${escapeHtml(selected.answer)}</p></div><p><small>Guided system walkthrough · production knowledge base not connected in this portfolio</small></p></div>
        </div>
      `;
    } else {
      const seeds = [1, 3, 5];
      const selected = seeds[selectedIndex];
      const bars = [
        ["Quality", 82 + selected],
        ["Consistency", 68 + selected * 5],
        ["Execution", 91 - selected],
        ["Memory", 76],
      ];
      container.innerHTML = `
        <div class="demo-layout">
          <div class="demo-controls"><p>Cross-seed evaluation runs</p>${seeds.map((seed, index) => `<button class="${index === selectedIndex ? "active" : ""}" type="button" data-demo-choice="${id}" data-choice-index="${index}">${seed} seed${seed > 1 ? "s" : ""}</button>`).join("")}</div>
          <div class="demo-result"><p class="micro-label">EVALUATION OVERVIEW</p>${bars.map(([label, value]) => `<div class="benchmark-bar"><span>${label}</span><i><b style="width:${value}%"></b></i><strong>${value}</strong></div>`).join("")}<p><small>Illustrative interface modeled on the 243-task evaluation workflow</small></p></div>
        </div>
      `;
    }
  }

  function closeDemo() {
    document.querySelector("#modal-root").innerHTML = "";
    document.body.style.overflow = "";
  }

  function activateTab(tabId, updateHash = true) {
    const validTabs = ["home", "experience", "projects", "visuals", "testimonials", "connect"];
    const safeTab = validTabs.includes(tabId) ? tabId : "home";
    document.querySelectorAll("[data-panel]").forEach((panel) => {
      const active = panel.dataset.panel === safeTab;
      panel.hidden = !active;
      panel.classList.toggle("active", active);
    });
    document.querySelectorAll(".main-nav [data-tab-target]").forEach((button) => {
      const active = button.dataset.tabTarget === safeTab;
      button.classList.toggle("active", active);
      if (active) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
    if (updateHash) history.replaceState(null, "", safeTab === "home" ? location.pathname : `#${safeTab}`);
    document.querySelector("#main-nav").classList.remove("open");
    document.querySelector("#menu-button").setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function initialize() {
    document.querySelector("#brand-initials").textContent = content.personal.initials;
    document.querySelector("#brand-name").textContent = content.personal.name;
    document.querySelector("#brand-role").textContent = content.personal.role;
    document.querySelector("#header-contact").href = `mailto:${content.personal.email}`;
    renderHome();
    renderExperience();
    renderProjects();
    renderVisuals();
    renderTestimonials();
    renderConnect();
    activateTab(location.hash.replace("#", "") || "home", false);
  }

  document.addEventListener("click", (event) => {
    const tabButton = event.target.closest("[data-tab-target]");
    if (tabButton) {
      activateTab(tabButton.dataset.tabTarget);
      return;
    }

    const demoButton = event.target.closest("[data-demo]");
    if (demoButton) {
      openDemo(demoButton.dataset.demo);
      return;
    }

    const demoChoice = event.target.closest("[data-demo-choice]");
    if (demoChoice) {
      renderDemoContent(demoChoice.dataset.demoChoice, Number(demoChoice.dataset.choiceIndex));
      return;
    }

    if (event.target.closest("[data-modal-close]") || event.target.matches("[data-modal-backdrop]")) {
      closeDemo();
    }
  });

  document.querySelector("#menu-button").addEventListener("click", () => {
    const nav = document.querySelector("#main-nav");
    const open = nav.classList.toggle("open");
    document.querySelector("#menu-button").setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("submit", (event) => {
    if (event.target.id !== "contact-form") return;
    event.preventDefault();
    const name = document.querySelector("#contact-name").value.trim() || "a recruiter";
    const sender = document.querySelector("#contact-email").value.trim();
    const message = document.querySelector("#contact-message").value.trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}${sender ? ` (${sender})` : ""}`);
    window.location.href = `mailto:${content.personal.email}?subject=${subject}&body=${body}`;
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.querySelector(".modal-backdrop")) closeDemo();
  });

  initialize();
})();

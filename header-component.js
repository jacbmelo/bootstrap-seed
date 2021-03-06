'use strict'

Vue.component('header-component', {
  template: `
    <header class="header">
      <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light">
        <a class="navbar-brand" href="index.html" id="navbar-brand"><i class="fab fa-html5"></i><strong> Bootstrap</strong> Seed</a>
        <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-content">
          <ul class="navbar-nav mr-auto" id="navbar-items">
              <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
          </ul>
        </div>
      </nav>
    </header>
  `
})

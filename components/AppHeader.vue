<template>
  <header class="navbar navbar-expand-lg navbar-light custom-header">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">Deva Jayantha</NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/" active-class="active" exact-active-class="active">About</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/resume" active-class="active">Resume</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/porto" active-class="active">Portofolio</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/gallery" active-class="active">Gallery</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<template>
  <div>
    <Head>
      <Title>Deva Jayantha's Portfolio — Gallery</Title>
    </Head>

    <section class="gallery-section gallery-pro py-5">
      <div class="container">
        <div class="d-flex align-items-center gap-3 mb-2">
          <div class="bar"></div>
          <h2 class="section-header mb-0">Gallery</h2>
        </div>
        <p class="lead">Moments from campus visits, trainings, workshops and speaking sessions.</p>

        <!-- Filters -->
        <div class="filters">
          <button
            v-for="f in filters"
            :key="f.value"
            class="chip"
            :class="{ active: activeFilter === f.value }"
            @click="activeFilter = f.value"
          >{{ f.label }}</button>
        </div>

        <!-- Grid -->
        <div class="gallery-grid">
          <div
            v-for="(item, idx) in filteredItems"
            :key="item.src"
            class="g-item"
          >
            <button
              type="button"
              class="g-img-wrap"
              :aria-label="`Open image: ${item.title}`"
              @click="openLightbox(idx)"
            >
              <span class="badge-pill">{{ item.badge }}</span>
              <img class="g-img" loading="lazy" decoding="async" :src="item.src" :alt="item.alt" />
            </button>
            <div class="g-body">
              <h3 class="g-title">{{ item.title }}</h3>
              <p class="g-meta">{{ item.meta }}</p>
              <p class="g-desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <ClientOnly>
      <vue-easy-lightbox
        :visible="lightboxVisible"
        :imgs="lightboxImgs"
        :index="lightboxIndex"
        @hide="lightboxVisible = false"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
interface GalleryItem {
  src: string
  alt: string
  badge: string
  title: string
  meta: string
  desc: string
  cat: string
}

const allItems: GalleryItem[] = [
  {
    src: '/images/gallery1.jpg',
    alt: 'Campus Visit with students',
    badge: 'Visiting',
    title: 'Campus Visit',
    meta: 'Students • 2025',
    desc: 'A fun moment capturing a group photo with students during a campus visit. These visits are opportunities to share industry insights and inspire the next generation of tech professionals.',
    cat: 'visiting',
  },
  {
    src: '/images/gallery2.jpeg',
    alt: 'Digitirta training at Semarang, July 2023',
    badge: 'Trainer',
    title: 'Digitirta – Semarang',
    meta: 'Trainer • July 2023',
    desc: 'Conducting a hands-on training session for Digitirta participants in Semarang. The program focused on practical digital skills to help participants grow their capabilities in the tech industry.',
    cat: 'training',
  },
  {
    src: '/images/gallery3.jpeg',
    alt: 'Digitirta training at Yogyakarta, July 2024',
    badge: 'Trainer',
    title: 'Digitirta – Yogyakarta',
    meta: 'Trainer • July 2024',
    desc: 'Leading a Digitirta training session in Yogyakarta, delivering structured learning on software development fundamentals. A memorable batch full of enthusiasm and curiosity.',
    cat: 'training',
  },
  {
    src: '/images/gallery4.png',
    alt: 'Sharing session with students',
    badge: 'Visiting',
    title: 'Sharing Session',
    meta: 'Campus Visit',
    desc: 'An interactive sharing session with students at a campus visit, discussing real-world career paths in tech, what it takes to land a job, and how to build relevant skills while still studying.',
    cat: 'visiting',
  },
  {
    src: '/images/gallery5.jpeg',
    alt: 'Digitirta training group photo',
    badge: 'Trainer',
    title: 'Digitirta – Yogyakarta',
    meta: 'Trainer • July 2024',
    desc: 'Group photo with Digitirta trainees in Yogyakarta at the end of the program. It is always rewarding to see participants grow in confidence and technical ability throughout the training.',
    cat: 'training',
  },
  {
    src: '/images/gallery6.png',
    alt: 'Training with Water.org & Government at Tangerang, Sept 2024',
    badge: 'Trainer',
    title: 'Water.org & Government Training',
    meta: 'Trainer • Tangerang • Sep 2024',
    desc: 'A collaborative training initiative with Water.org and local government officials in Tangerang. The session aimed to digitize workflows and strengthen digital literacy among public sector participants.',
    cat: 'training',
  },
  {
    src: '/images/gallery7.jpg',
    alt: 'Campus Visit 2025',
    badge: 'Visiting',
    title: 'Campus Visit',
    meta: 'Students • 2025',
    desc: 'Visiting a campus in 2025 to connect with students and faculty. These engagements help bridge the gap between academic learning and the expectations of the tech industry today.',
    cat: 'visiting',
  },
  {
    src: '/images/gallery8.jpeg',
    alt: 'Speaker session – SMK TI Bali Global, July 2025',
    badge: 'Speaker',
    title: 'Curriculum Review – SMK TI Bali Global',
    meta: 'Speaker • July 2025',
    desc: 'Invited as a speaker from Timedoor to contribute to the vocational curriculum review and professional development program for IT teachers at SMK TI Bali Global.',
    cat: 'speaker',
  },
  {
    src: '/images/gallery10.jpeg',
    alt: 'Campus Visit 2025 group photo',
    badge: 'Visiting',
    title: 'Campus Session',
    meta: 'Students • 2025',
    desc: 'Wrapping up a campus session with a group photo alongside enthusiastic students. Moments like these are a reminder of why mentoring and knowledge-sharing matter beyond the classroom.',
    cat: 'visiting',
  },
  {
    src: '/images/gallery9.jpeg',
    alt: 'Collab workshop – Laravel Security at PNB, July 2025',
    badge: 'Workshop',
    title: 'Laravel Security – Mini Credential',
    meta: 'Workshop Supervisor • PNB • July 2025',
    desc: 'Serving as supervisor for a Mini Credential workshop on Laravel Security, a collaboration between Sawah Security and Timedoor at Politeknik Negeri Bali.',
    cat: 'workshop',
  },
]

const filters = [
  { value: 'all', label: 'All' },
  { value: 'visiting', label: 'Campus Visit' },
  { value: 'training', label: 'Trainer' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'speaker', label: 'Speaker' },
]

const activeFilter = ref('all')
const filteredItems = computed(() =>
  activeFilter.value === 'all' ? allItems : allItems.filter(i => i.cat === activeFilter.value)
)

const lightboxVisible = ref(false)
const lightboxIndex = ref(0)
const lightboxImgs = computed(() => filteredItems.value.map(i => ({ src: i.src, title: i.title })))

function openLightbox(idx: number) {
  lightboxIndex.value = idx
  lightboxVisible.value = true
}
</script>

<style scoped>
.gallery-pro {
  --accent: #0d6efd;
  --card: #ffffff;
  --line: #e9ecef;
  --text: #212529;
  --muted: #6c757d;
  --radius: 14px;
}
.section-header { font-size: clamp(26px,3vw,34px); font-weight: 800; letter-spacing: 0.2px; color: var(--text); margin: 0; }
.bar { width: 48px; height: 6px; border-radius: 999px; background: linear-gradient(90deg,var(--accent),#7dd3fc); }
.lead { color: var(--muted); margin: 0 0 20px; }
.filters { display: flex; flex-wrap: wrap; gap: 10px; margin: 16px 0 24px; }
.chip { border: 1px solid var(--line); background: #fff; color: var(--text); padding: 8px 13px; border-radius: 999px; cursor: pointer; font-weight: 700; font-size: 13px; transition: transform 0.12s ease, background 0.2s ease, border-color 0.2s ease; }
.chip:hover { transform: translateY(-1px); }
.chip.active { background: rgba(13,110,253,0.1); border-color: rgba(13,110,253,0.35); }
.gallery-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(260px,1fr)); gap: 18px; }
.g-item { overflow: hidden; border-radius: var(--radius); background: var(--card); border: 1px solid var(--line); box-shadow: 0 10px 26px rgba(33,37,41,0.08); transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; display: flex; flex-direction: column; }
.g-item:hover { transform: translateY(-4px); box-shadow: 0 16px 38px rgba(33,37,41,0.14); border-color: rgba(13,110,253,0.22); }
.g-img-wrap { position: relative; overflow: hidden; display: block; line-height: 0; padding: 0; border: 0; background: transparent; text-align: inherit; cursor: pointer; }
.g-img-wrap:focus-visible { outline: 3px solid rgba(13,110,253,0.35); outline-offset: -3px; }
.g-img { display: block; width: 100%; height: auto; aspect-ratio: 16/10; object-fit: cover; filter: saturate(1.06) contrast(1.04); transform: scale(1.02); transition: transform 0.35s ease; }
.g-item:hover .g-img { transform: scale(1.065); }
.badge-pill { position: absolute; top: 12px; left: 12px; z-index: 2; background: linear-gradient(180deg,var(--accent),#3b86ff); color: #fff; font-weight: 800; letter-spacing: 0.2px; font-size: 12px; padding: 6px 10px; border-radius: 999px; box-shadow: 0 6px 18px rgba(13,110,253,0.25); }
.g-body { padding: 14px 16px 16px; display: flex; flex-direction: column; gap: 4px; flex: 1; }
.g-title { font-size: 15px; font-weight: 800; color: var(--text); margin: 0; }
.g-meta { font-size: 12px; color: var(--accent); font-weight: 600; margin: 0; }
.g-desc { font-size: 13px; color: var(--muted); line-height: 1.55; margin: 6px 0 0; }
</style>

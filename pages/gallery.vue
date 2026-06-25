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
            @click="openLightbox(idx)"
          >
            <span class="badge-pill">{{ item.badge }}</span>
            <img class="g-img" loading="lazy" decoding="async" :src="item.src" :alt="item.alt" />
            <div class="overlay">
              <div class="caption">
                <h3>{{ item.title }}</h3>
                <span class="meta">{{ item.meta }}</span>
              </div>
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
  cat: string
}

const allItems: GalleryItem[] = [
  { src: '/images/gallery1.jpg', alt: 'Campus Visit with students', badge: 'Visiting', title: 'Campus Visit', meta: 'Students • 2025', cat: 'visiting' },
  { src: '/images/gallery2.jpeg', alt: 'Digitirta training at Semarang, July 2023', badge: 'Trainer', title: 'Digitirta – Semarang', meta: 'July 2023', cat: 'training' },
  { src: '/images/gallery3.jpeg', alt: 'Digitirta training at Yogyakarta, July 2024', badge: 'Trainer', title: 'Digitirta – Yogyakarta', meta: 'July 2024', cat: 'training' },
  { src: '/images/gallery4.png', alt: 'Sharing session with students', badge: 'Visiting', title: 'Sharing Session', meta: 'Campus Visit', cat: 'visiting' },
  { src: '/images/gallery5.jpeg', alt: 'Digitirta training group photo', badge: 'Trainer', title: 'Digitirta – Yogyakarta', meta: 'July 2024', cat: 'training' },
  { src: '/images/gallery6.png', alt: 'Training with Water.org & Government at Tangerang, Sept 2024', badge: 'Trainer', title: 'Water.org & Gov', meta: 'Tangerang • Sep 2024', cat: 'training' },
  { src: '/images/gallery7.jpg', alt: 'Campus Visit 2025', badge: 'Visiting', title: 'Campus Visit', meta: '2025', cat: 'visiting' },
  { src: '/images/gallery8.jpeg', alt: 'Speaker session – SMK TI Bali Global, July 2025', badge: 'Speaker', title: 'Curriculum Review', meta: 'Speaker • July 2025', cat: 'speaker' },
  { src: '/images/gallery10.jpeg', alt: 'Campus Visit 2025 group photo', badge: 'Visiting', title: 'Campus Session', meta: '2025', cat: 'visiting' },
  { src: '/images/gallery9.jpeg', alt: 'Collab workshop – Laravel Security at PNB, July 2025', badge: 'Workshop', title: 'Laravel Security', meta: 'PNB • July 2025', cat: 'workshop' },
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
.g-item { position: relative; overflow: hidden; border-radius: var(--radius); background: var(--card); border: 1px solid var(--line); box-shadow: 0 10px 26px rgba(33,37,41,0.08); transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; cursor: pointer; }
.g-item:hover { transform: translateY(-4px); box-shadow: 0 16px 38px rgba(33,37,41,0.14); border-color: rgba(13,110,253,0.22); }
.g-img { display: block; width: 100%; height: auto; aspect-ratio: 16/10; object-fit: cover; filter: saturate(1.06) contrast(1.04); transform: scale(1.02); transition: transform 0.35s ease; }
.g-item:hover .g-img { transform: scale(1.065); }
.badge-pill { position: absolute; top: 12px; left: 12px; z-index: 2; background: linear-gradient(180deg,var(--accent),#3b86ff); color: #fff; font-weight: 800; letter-spacing: 0.2px; font-size: 12px; padding: 6px 10px; border-radius: 999px; box-shadow: 0 6px 18px rgba(13,110,253,0.25); }
.overlay { position: absolute; inset: 0; display: grid; align-content: end; padding: 14px 14px 12px; background: linear-gradient(to top,rgba(0,0,0,0.45),rgba(0,0,0,0) 60%); opacity: 0; transition: opacity 0.25s ease; pointer-events: none; }
.g-item:hover .overlay { opacity: 1; }
.caption { color: #fff; display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.caption h3 { margin: 0; font-size: 16px; font-weight: 900; text-shadow: 0 2px 10px rgba(0,0,0,0.45); }
.meta { color: #e9ecef; opacity: 0.85; font-size: 12px; }
</style>

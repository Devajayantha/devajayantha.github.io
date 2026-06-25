<template>
  <div>
    <div v-if="loading" class="row">
      <div v-for="n in 3" :key="n" class="col-md-4 mb-3">
        <div class="post-card">
          <div style="height:180px;background:#eef2f7"></div>
          <div class="post-body">
            <div class="post-title">Loading…</div>
            <p class="post-desc">Fetching latest articles…</p>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="error" class="col-12">
      <div class="alert alert-light border" role="alert">
        Couldn't load Medium posts right now.
        <a href="https://medium.com/@devajayantha" target="_blank" class="fw-semibold">See all on Medium</a>.
      </div>
    </div>

    <div v-else class="row">
      <div v-for="post in posts" :key="post.link" class="col-md-4 mb-3">
        <div class="post-card h-100 d-flex flex-column">
          <img class="thumb" :src="post.imgSrc" :alt="'Thumbnail for ' + post.title" />
          <div class="post-body">
            <div class="post-title">{{ post.title }}</div>
            <p class="post-desc">{{ post.excerpt }}</p>
            <a class="post-link text-primary" :href="post.link" target="_blank" rel="noopener">
              Read on Medium <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Post {
  title: string
  link: string
  imgSrc: string
  excerpt: string
}

const loading = ref(true)
const error = ref(false)
const posts = ref<Post[]>([])

onMounted(async () => {
  try {
    const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@devajayantha')
    const data = await res.json()
    const items = (data.items || []).slice(0, 3)
    posts.value = items.map((item: any) => {
      const imgMatch = item.description && item.description.match(/<img[^>]+src="([^">]+)"/i)
      const imgSrc = imgMatch ? imgMatch[1] : 'https://via.placeholder.com/640x360?text=Article'
      const clean = (item.description || '').replace(/<img[^>]*>/gi, '').replace(/<[^>]*>/g, '')
      const excerpt = clean.length > 140 ? clean.slice(0, 140) + '…' : clean
      return { title: item.title, link: item.link, imgSrc, excerpt }
    })
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>

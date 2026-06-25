<template>
  <footer class="footer">
    <h4>Feel free to contact me</h4>
    <p class="mb-2">If you have any questions or want to say hi, my inbox is open.</p>
    <a href="mailto:devajayantha870@gmail.com" class="email-link btn btn-outline-primary">
      devajayantha870@gmail.com
    </a>
  </footer>
</template>

<style scoped>
.footer {
  background: #f8fafc;
  color: #0f172a;
  text-align: center;
  padding: 64px 16px;
  border-top: 1px solid var(--line, #e9eef5);
}
.footer h4 {
  color: #0f172a;
  font-weight: 800;
  font-size: clamp(22px, 2.4vw, 32px);
  margin: 0 0 0.5rem;
}
.footer p {
  color: #64748b;
  margin: 0 0 1rem;
}
.email-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 20px;
  border-radius: 999px;
  border: 2px solid var(--accent, #0d6efd);
  background: #fff;
  color: var(--accent, #0d6efd);
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 10px 24px rgba(13, 110, 253, 0.12);
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
}
.email-link:hover {
  background: rgba(13, 110, 253, 0.06);
  transform: translateY(-1px);
  box-shadow: 0 14px 30px rgba(13, 110, 253, 0.16);
}
.email-link::before {
  content: '\f0e0';
  font-family: 'Font Awesome 6 Free';
  font-weight: 900;
  font-style: normal;
}
</style>

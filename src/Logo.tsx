function Logo({ size }: { size: string }) {
  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(45)">
          <stop offset="0%" stop-color="#24C6DC" />
          <stop offset="100%" stop-color="#514A9D" />
        </linearGradient>
      </defs>
      <path fill="url(#gradient)" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
    </svg>)
}

export default Logo

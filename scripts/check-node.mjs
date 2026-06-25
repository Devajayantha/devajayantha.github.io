const requiredMajor = 20
const requiredMinor = 0
const requiredPatch = 0

function parseVersion(version) {
  const match = /^v?(\d+)\.(\d+)\.(\d+)$/.exec(version)

  if (!match) {
    return null
  }

  return {
    major: Number(match[1]),
    minor: Number(match[2]),
    patch: Number(match[3]),
  }
}

function isSupported(version) {
  if (!version) {
    return false
  }

  if (version.major > requiredMajor) {
    return true
  }

  if (version.major < requiredMajor) {
    return false
  }

  if (version.minor > requiredMinor) {
    return true
  }

  if (version.minor < requiredMinor) {
    return false
  }

  return version.patch >= requiredPatch
}

const current = parseVersion(process.version)

if (!isSupported(current)) {
  console.error(
    `Unsupported Node.js version ${process.version}. Use Node.js 20 or newer before running Nuxt.`
  )
  process.exit(1)
}

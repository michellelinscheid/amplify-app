/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
}

module.exports = nextConfig

// export default {
//   experimental: {
//     optimizePackageImports: ["@chakra-ui/react"],
//   },
// }


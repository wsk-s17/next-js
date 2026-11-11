/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	output: 'standalone',
	serverExternalPackages: ['@prisma/adapter-mariadb', 'mariadb'],
	cacheComponents: true,
	partialPrefetching: true,
	reactCompiler: true,
	turbopack: {
		rules: {
			'*.css': {
				loaders: ['@tailwindcss/turbopack'],
				as: '*.css'
			}
		}
	}
}

export default nextConfig

import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'prisma/config'

if (existsSync('.env')) process.loadEnvFile()

if (process.platform === 'win32' && process.arch === 'x64') {
	const engine = join(
		import.meta.dirname,
		'engines',
		'schema-engine-windows.exe'
	)

	if (existsSync(engine)) process.env.PRISMA_SCHEMA_ENGINE_BINARY ??= engine

	process.env.CHECKPOINT_DISABLE ??= '1'
}

export default defineConfig({
	schema: 'prisma/schema.prisma',
	migrations: {
		path: 'prisma/migrations'
	},
	datasource: {
		url: process.env.DATABASE_URL
	}
})

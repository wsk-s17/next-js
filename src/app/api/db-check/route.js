import { prisma } from '@/lib/prisma'
import { sequelize } from '@/lib/sequelize'
import { connection } from 'next/server'

async function check(fn) {
	try {
		await fn()
		return true
	} catch (error) {
		console.error(error)
		return false
	}
}

export async function GET() {
	await connection()

	const [prismaOk, sequelizeOk] = await Promise.all([
		check(() => prisma.$queryRaw`SELECT 1`),
		check(() => sequelize.authenticate())
	])

	const ok = prismaOk && sequelizeOk

	return Response.json(
		{
			ok,
			prisma: prismaOk,
			sequelize: sequelizeOk
		},
		{
			status: ok ? 200 : 500
		}
	)
}

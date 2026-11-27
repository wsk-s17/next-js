import mysql2 from 'mysql2'
import { Sequelize } from 'sequelize'
import 'server-only'

const globalForSequelize = globalThis

const sequelize =
	globalForSequelize.sequelize ??
	new Sequelize(process.env.DATABASE_URL, {
		dialect: 'mysql',
		dialectModule: mysql2,
		logging: false,
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		}
	})

if (process.env.NODE_ENV !== 'production')
	globalForSequelize.sequelize = sequelize

export { sequelize }

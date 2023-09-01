import { fileURLToPath } from 'node:url'
import path from 'node:path'
import shell from 'shelljs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const demo = path.resolve(__dirname, '../packages/demo/')

shell.cd(demo)
shell.exec('pnpm run dev')

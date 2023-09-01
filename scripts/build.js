import { fileURLToPath } from 'node:url'
import path from 'node:path'
import shell from 'shelljs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const source = path.resolve(__dirname, '../packages/minio-core/dist/*')
const target = path.resolve(__dirname, '../dist/')

function build() {
  shell.cd(path.resolve(__dirname, '../packages/minio-core/'))
  shell.exec('pnpm run build')

  shell.rm('-rf', target)
  shell.mkdir('-p', target)
  shell.cp('-R', source, target)
}

build()

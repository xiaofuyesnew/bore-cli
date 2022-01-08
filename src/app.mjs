import 'zx/globals'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// current working directory
const cwd = process.cwd()

// package object
const pkg = JSON.parse(readFileSync(resolve(cwd, './package.json'), 'utf8'))

const registry = JSON.parse(
  readFileSync(resolve(cwd, './registry.json'), 'utf8')
)

// get rest argv
const [execPath, argv0, ...restArgv] = process.argv

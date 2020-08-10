import fs from 'fs'
import path from 'path'

import { processRoutes } from '../lib/index.js'

import routes from './routes.js'

const __dirname = path.resolve('example')

processRoutes({
  dist: path.join(__dirname, 'dist'),
  template: path.join(__dirname, 'template.html'),
  routes,
})
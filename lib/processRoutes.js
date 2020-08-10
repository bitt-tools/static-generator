import path from 'path'
import fs from 'fs'

import { inject } from './inject.js'

export const processRoutes = ({
  routes,
  template,
  dist,
  options,
}) => {
  for (const route of routes) {
    const output = inject(
      fs.readFileSync(template, { encoding: 'utf-8' }),
      route.component,
      options,
    )

    const pathname = path.join(dist, route.path)
  
    if (!fs.existsSync(pathname, { recursive: true })) fs.mkdirSync(pathname, { recursive: true })
    fs.writeFileSync(path.join(pathname, 'index.html'), output, { encoding: 'utf-8' })
  }
}
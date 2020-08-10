import { generate } from './generate.js'

export const inject = (template, component, options = {}) => {
  return template.replace(/(\s*)\n?{\|\s*bitt\s*\|}/, `${generate(component, { indent: '$1', ...options })}`)
}

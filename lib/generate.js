import { normalizeComponent } from 'bitt'

export const generate = (component, options) => {
  let {
    indentSize,
    indent,
  } = Object.assign({
    indentSize: '  ',
    indent: '',
  }, options)

  try {
    const unpackedComponent = typeof component === 'function' ? component({ 
      rerender: () => {}, 
      newState: object => object 
    }) : component
  
    if (Array.isArray(unpackedComponent[0])) return unpackedComponent[0].map(component => generate(component, { indent, indentSize }))
  
    const normalizedComponent = normalizeComponent(unpackedComponent)

    if (typeof normalizedComponent === 'string' || typeof normalizedComponent === 'number' ) {
      return indent + normalizedComponent
    } else {
      const { tagName, props, children } = normalizedComponent

      const attributes = Object.entries(props)
        .filter(([ key ]) => !/^on[A-Z]/.test(key))
        .map(([ key, value ]) => ` ${key}="${value}"`)

      const currentIndent = indent
  
      indent += indentSize

      const generatedChildren = children.map(component => generate(component, { indent, indentSize })).join('')

      return `${currentIndent}<${tagName}${attributes}>${generatedChildren}${currentIndent}</${tagName}>`
    }
  } catch (error) {
    console.error(error)
  }
}

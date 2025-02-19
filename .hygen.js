const inflection = require('inflection')
const path = require('path')

// Todo read this from the main package.json or git?
const config = {
  author: 'Eelco Wiersma <eelco@saas-ui.dev>',
  org: 'saas-ui',
  packagesDir: 'packages',
  appsDir: 'apps',
  blocksDir: 'packages/pro/packages/blocks/src',
}

const packageName = (org, name, separator = '/') => {
  if (org === '') org = config.org
  return `${inflection.dasherize(org)}${separator}${inflection.dasherize(name)}`
}

const camelizePath = (name, lower = true) =>
  inflection.camelize(name, lower).replace(/::/g, '/')
const pluralizeProp = (name) => inflection.pluralize(name)

const camelizeQuery = (name, lower = false) =>
  inflection.camelize(name, lower).replace(/::/g, '/')
const pluralizeQuery = (name) => inflection.pluralize(name)

const pascalize = (name) => inflection.camelize(name.replaceAll(' ', '_'))

module.exports = {
  templates: `${__dirname}/templates`,
  helpers: {
    config: (key) => config[key],
    camelizedPathName: (name, lower = true) => camelizePath(name, lower),
    camelizedBaseName: (name, lower = false) =>
      path.parse(camelizePath(name, lower)).base,
    baseName: (name) => path.parse(name).base,
    dirName: (name) => path.parse(name).dir,
    pluralizePageProp: (name) => pluralizeProp(name),
    camelizedQueryHook: (name, plural) => {
      const query = plural ? pluralizeQuery(name) : name
      const camelizedQuery = camelizeQuery(query)

      return `use${camelizedQuery}Query`
    },
    pascalize: (name) => pascalize(name),
    /**
     * Normalize the filename casing. Defaults to kebabcase.
     * @param {string} name
     * @returns
     */
    filename: (name) => {
      return inflection.dasherize(name).toLowerCase()
    },
    /**
     * Returns the package directory, eg: packages/saas-ui-component
     * @param {string} org
     * @param {string} name
     * @returns
     */
    packageDir: (org, name) => {
      return path.join(config.packagesDir, packageName(org, name, '-'))
    },
    /**
     * Returns the package name, eg: @saas-ui/component
     * @param {string} org
     * @param {string} name
     * @returns
     */
    packageName: (org, name) => `@${packageName(org, name)}`,
    /**
     * Returns the relative app directory, eg: apps/website
     * @param {string} org
     * @param {string} name
     * @returns
     */
    appDir: (app) => {
      return path.join(config.appsDir, app)
    },
    /**
     * Returns the blocks directory, eg: packages/pro/packages/blocks/src/
     * @param {string} category
     * @param {string} name
     * @returns
     */
    blocksDir: (category, name) => {
      return path.join(
        config.blocksDir,
        inflection.dasherize(category).toLowerCase(),
        inflection.dasherize(name).toLowerCase()
      )
    },
  },
}

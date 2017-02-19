import chalk from 'chalk'

const c = chalk.red

const errorMessages = {
	VIEWS_ENGINE_NEEDED: (appName) => c(`"viewsEngine" must be specified in ${appName} config when using "viewsDir"`),
	INCOMPLETE_TEMPLATE_ENGINE: (appName) => c(`${appName} custom template engine needs both "ext" and "engineFunc"`),
	MIDDLEWARE_NOT_ARRAY: (appName) => c(`Middelware for ${appName} must be an Array`),
	ROUTES_IS_NOT_ARRAY: (appName, type) => c(`The routes for ${appName} must be passed as an Array, got ${type} instead`),
	NO_ROUTES: (appName) => c(`Forgot to add routes? At least one route is needed for ${appName}`),
	EXTEND_DRAWER_NOT_OBJECT: (appName, type) => c(`"extendDrawer" passed to ${appName} must be a key-value Object, got ${type} instead`)
}

module.exports = errorMessages
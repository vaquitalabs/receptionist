let template = ''

template += `const controller = (drawer, req, res) => {\n`
template += `  res.json('{{name}} controller is running')\n`
template += `}`
template += `\n\n`
template += `module.exports = controller\n`

module.exports = template

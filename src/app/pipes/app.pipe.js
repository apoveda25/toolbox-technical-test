const appPipe = (req, res, next) => {
  const { text } = req.query

  if (!text) return res.status(400).json({ error: 'no text' })

  req.appPipeResult = { text }

  next()
}

module.exports = { appPipe }

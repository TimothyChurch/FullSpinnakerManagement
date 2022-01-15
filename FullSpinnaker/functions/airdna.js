module.exports = async function(payload) {
  const { path, ...urlQuery } = payload

  const key = context.values.get('AirdnaApi')
  const url = context.values.get('AirdnaUrl')

  urlQuery.access_token = key

  const allValues = Object.values(urlQuery)
  const allKeys = Object.keys(urlQuery)
  const apiQuery = {}

  allKeys.forEach((key, index) => {
    apiQuery[key] = [allValues[index]]
  })

  try {
    const response = await context.http.get({
      scheme: 'https',
      host: url,
      path,
      query: apiQuery,
    }).then((response) => {
      const ejson_body = EJSON.parse(response.body.text())
      return ejson_body
    })
    return response
  }
  catch (err) {
    return err
  }
}

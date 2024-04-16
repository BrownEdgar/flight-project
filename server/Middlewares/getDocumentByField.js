const getDocumentByField = async (req, res, next) => {
  const { body: { code, company_name } } = req
  const cityId = await req.app.locals.services.city.getCityByName(code)
  const companyId = await req.app.locals.services.company.GetCompanyByName(company_name)

  res.locals.cityId = cityId
  res.locals.companyId = companyId
  next()
}

module.exports = getDocumentByField
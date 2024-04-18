class CompanyServices {
  constructor(models) {
    this.models = models;
  }

  async getAllCompany() {
    const company = await this.models.company.findAll();
    return company;
  }

  async saveCompany(body) {
    const company = await this.models.company.create({ ...body });
    return company;
  }

  async GetCompanyByName(company_Name) {
    const company = await this.models.company.findOne({
      where: { company_Name },
      attributes: ["id"],
    });

    return company.dataValues;
  }
}

module.exports = CompanyServices;

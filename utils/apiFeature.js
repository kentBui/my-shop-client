export default class APIFeature {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    // search for name of products
    const queryObj = { ...this.queryStr };

    const name = queryObj.name
      ? {
          name: {
            $regex: queryObj.name,
            $option: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...name });
    return this;
  }

  filter() {
    const queryObj = { ...this.queryStr };
    const excludedField = ["name", "page", "sort", "limit", "fields"];
    excludedField.forEach((el) => delete queryObj[el]);

    let queryStrCopy = JSON.stringify(queryObj);
    queryStrCopy = queryStrCopy.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    this.query = this.query.find(JSON.parse(queryStrCopy));
    return this;
  }

  sort() {
    if (this.queryStr.sort) {
      const sortBy = this.queryStr.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("createdAt");
    }

    return this;
  }

  limitField() {
    if (this.queryStr.fields) {
      const fields = this.queryStr.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }

  paginate() {
    let page = this.queryStr.page * 1 || 1;
    let limit = this.queryStr.limit * 1 || 10;
    let skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

const { User, UserSchema } = require('./user.model');
const { Address, AddressSchema } = require('./address.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { LegalCustomer, LegalCustomerSchema } = require('./legalCustomer.model');

const { Category, CategorySchema } = require('./category.model');
const { Publication, PublicationSchema } = require('./publication.model');
const { Tag, TagSchema } = require('./tag.model');
const { TagPublication, TagPublicationSchema } = require('./tag-publication.model');
const { Comment, CommentSchema } = require('./comment.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Address.init(AddressSchema, Address.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  LegalCustomer.init(LegalCustomerSchema, LegalCustomer.config(sequelize));

  Category.init(CategorySchema, Category.config(sequelize));
  Publication.init(PublicationSchema, Publication.config(sequelize));
  Tag.init(TagSchema, Tag.config(sequelize));
  TagPublication.init(TagPublicationSchema, TagPublication.config(sequelize));
  Comment.init(CommentSchema, Comment.config(sequelize));

  //asociaciones
  User.associate(sequelize.models);
  Address.associate(sequelize.models);
  Customer.associate(sequelize.models);
  LegalCustomer.associate(sequelize.models);

  Category.associate(sequelize.models);
  Publication.associate(sequelize.models);
  Tag.associate(sequelize.models);           //aca se realiza no solo la asociación de Tags, tambien de TagsPublications
  Comment.associate(sequelize.models);
}

module.exports = setupModels;

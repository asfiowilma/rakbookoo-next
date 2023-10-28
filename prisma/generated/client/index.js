Object.defineProperty(exports, '__esModule', { value: true })

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')

const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.1.1
 * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
 */
Prisma.prismaVersion = {
  client: '5.1.1',
  engine: '6a3747c37ff169c90047725a05a6ef02e32ac97e',
}

false

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
}

const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
})

exports.Prisma.AuthorScalarFieldEnum = {
  id: 'id',
  name: 'name',
}

exports.Prisma.BookScalarFieldEnum = {
  id: 'id',
  isbn: 'isbn',
  title: 'title',
  coverImage: 'coverImage',
  blurb: 'blurb',
  rating: 'rating',
  shelfId: 'shelfId',
  ownerId: 'ownerId',
}

exports.Prisma.NoteScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  content: 'content',
  bookId: 'bookId',
}

exports.Prisma.ShelfScalarFieldEnum = {
  id: 'id',
  name: 'name',
  userUid: 'userUid',
}

exports.Prisma.TagScalarFieldEnum = {
  id: 'id',
  name: 'name',
}

exports.Prisma.UserScalarFieldEnum = {
  uid: 'uid',
  name: 'name',
  avatar_url: 'avatar_url',
}

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc',
}

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive',
}

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last',
}

exports.Prisma.ModelName = {
  Author: 'Author',
  Book: 'Book',
  Note: 'Note',
  Shelf: 'Shelf',
  Tag: 'Tag',
  User: 'User',
}
/**
 * Create the Client
 */
const config = {
  generator: {
    name: 'client',
    provider: {
      fromEnvVar: null,
      value: 'prisma-client-js',
    },
    output: {
      value:
        'C:\\Users\\Asfiolitha Wilmarani\\Desktop\\Espresso Castle\\Projects\\Rakbookoo\\rakbookoo-next\\prisma\\generated\\client',
      fromEnvVar: null,
    },
    config: {
      engineType: 'library',
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: 'windows',
        native: true,
      },
    ],
    previewFeatures: [],
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: '../../../.env',
    schemaEnvPath: '../../../.env',
  },
  relativePath: '../..',
  clientVersion: '5.1.1',
  engineVersion: '6a3747c37ff169c90047725a05a6ef02e32ac97e',
  datasourceNames: ['db'],
  activeProvider: 'postgresql',
  dataProxy: false,
  postinstall: false,
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = ['prisma/generated/client', 'generated/client']

  const alternativePath =
    alternativePaths.find((altPath) => {
      return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
    }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse(
  '{"models":{"Author":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"Book","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Book","relationName":"AuthorToBook","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Book":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"isbn","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"coverImage","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"blurb","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"rating","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"shelfId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"shelf","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Shelf","relationName":"BookToShelf","relationFromFields":["shelfId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"notes","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Note","relationName":"BookToNote","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"authors","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Author","relationName":"AuthorToBook","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"tags","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Tag","relationName":"BookToTag","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"ownerId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"owner","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"BookToUser","relationFromFields":["ownerId"],"relationToFields":["uid"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Note":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"bookId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"book","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Book","relationName":"BookToNote","relationFromFields":["bookId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Shelf":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"userUid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"books","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Book","relationName":"BookToShelf","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"owner","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"ShelfToUser","relationFromFields":["userUid"],"relationToFields":["uid"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Tag":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"book","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Book","relationName":"BookToTag","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"User":{"dbName":null,"fields":[{"name":"uid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"avatar_url","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"shelves","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Shelf","relationName":"ShelfToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"books","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Book","relationName":"BookToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}'
)
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)

const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
  rootEnvPath:
    config.relativeEnvPaths.rootEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath:
    config.relativeEnvPaths.schemaEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath),
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, 'query_engine-windows.dll.node')
path.join(
  process.cwd(),
  'prisma/generated/client/query_engine-windows.dll.node'
)
path.join(__dirname, 'schema.prisma')
path.join(process.cwd(), 'prisma/generated/client/schema.prisma')

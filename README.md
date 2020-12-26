# Multitenancy
 The purpose is to demonstrate the use of different database scheme using the same singular connection and verify the logs.
Executing (default): SELECT "id", "username", "birthday", "createdAt", "updatedAt" FROM "zeeyarah"."users" AS "user";
[
  user {
    dataValues: {
      id: 1,
      username: 'zeeyarah',
      birthday: 1980-07-19T20:00:00.000Z,
      createdAt: 2020-12-26T16:43:04.225Z,
      updatedAt: 2020-12-26T16:43:04.225Z
    },
    _previousDataValues: {
      id: 1,
      username: 'zeeyarah',
      birthday: 1980-07-19T20:00:00.000Z,
      createdAt: 2020-12-26T16:43:04.225Z,
      updatedAt: 2020-12-26T16:43:04.225Z
    },
    _changed: Set(0) {},
    _options: {
      isNewRecord: false,
      _schema: 'zeeyarah',
      _schemaDelimiter: '',
      raw: true,
      attributes: [Array]
    },
    isNewRecord: false
  }
]
Executing (default): SELECT "id", "username", "birthday", "createdAt", "updatedAt" FROM "buildatrip"."users" AS "user";
[
  user {
    dataValues: {
      id: 1,
      username: 'buildatrip',
      birthday: 1980-07-19T20:00:00.000Z,
      createdAt: 2020-12-26T16:41:06.512Z,
      updatedAt: 2020-12-26T16:41:06.512Z
    },
    _previousDataValues: {
      id: 1,
      username: 'buildatrip',
      birthday: 1980-07-19T20:00:00.000Z,
      createdAt: 2020-12-26T16:41:06.512Z,
      updatedAt: 2020-12-26T16:41:06.512Z
    },
    _changed: Set(0) {},
    _options: {
      isNewRecord: false,
      _schema: 'buildatrip',
      _schemaDelimiter: '',
      raw: true,
      attributes: [Array]
    },
    isNewRecord: false
  }
]

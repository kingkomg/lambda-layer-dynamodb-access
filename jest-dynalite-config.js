module.exports = {
  tables: [{
    TableName: "todos",
    AttributeDefinitions: [{
        AttributeName: "id",
        AttributeType: "S"
      },
      {
        AttributeName: "other",
        AttributeType: "S"
      }
    ],
    KeySchema: [{
      AttributeName: "id",
      KeyType: "HASH"
    }],
    ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 },
    GlobalSecondaryIndexes: [{
      IndexName: "gsi-other",
      KeySchema: [{
        AttributeName: "other",
        KeyType: "HASH"
      }],
      Projection: { ProjectionType: "ALL" },
      ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 }
    }]
  }],
  basePort: 8000
};
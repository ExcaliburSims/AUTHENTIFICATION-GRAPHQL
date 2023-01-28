import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { DataSource } from "typeorm";

const main = async () => {
  const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "graphCRUD",
    entities: [],
    synchronize: false,
    logging: true,
  });
  await AppDataSource.initialize();

  const app = express();
  app.use(cors());
  app.use(express.json());
  /* app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  ); */

  app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
  });
};

main().catch((err) => {
  console.log(err);
});

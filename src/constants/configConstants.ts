import dotenv from "dotenv";

export const dev = process.env.NODE_ENV === "development";
dotenv.config({ path: dev ? ".env.dev" : ".env" });

export const port = process.env.PORT || 35000;

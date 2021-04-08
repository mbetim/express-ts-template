import http from "http";

import app from "./app";
import { port } from "./constants/configConstants";

const server = http.createServer(app);

server.listen(port, () => console.log(`> Server listening on port ${port}`));

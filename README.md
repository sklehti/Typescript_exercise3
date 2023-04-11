# To ran locally:

The source code of the backend can be found in https://github.com/fullstack-hy2020/flight-diary

Please make the following changes to the backend to make this program work:

- install cors `npm i cors` and add the following content to index.ts:

```
import cors from "cors";

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  cors({
    origin: "*",
  })
);
```

You can then install both programmes (frontend and backend) with the following commands:

- `npm i`
- `npm start`

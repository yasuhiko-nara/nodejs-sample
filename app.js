const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const url = 'http://node-service-backend.example-namespace.local:8000';

// backendサービスに繋ぐためには、後ほど作成するservice discoveryの設定が必要
// Route53でクラスター内のnamespaceを作り、そこにbackendサービスの場所を問い合わせる必要がある。
// エンドポイントは、ecsService.namespace:portとなる
// 今回は、backend ECS service名がnode-service-backendで、namespace名がexample-namespace.localとなる

app.get('/', (req, res) => {
  res.send('Hello from FRONTEND-server!');
});

app.get('/backend', async (req, res) => {
  const axios_res = await axios.get(url);
  res.send(axios_res.data);
});

app.listen(port, () => {
  console.log(`Example app listening at port:${port}`);
});

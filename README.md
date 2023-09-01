# minio-es

Use the MinIO JavaScript Client SDK in the browser easily, with support for ES modules.

## Install

```shell
$ npm install minio-es
```

## Use

```javascript
import { Client } from 'minio-es'

const minioClient = new Client({
  endPoint: 'play.min.io',
  port: 9000,
  useSSL: true,
  accessKey: 'Q3AM3UQ867SPQQA43P2F',
  secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG',
})
```

## Related

[minio-js](https://github.com/minio/minio-js)

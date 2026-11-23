# Next JS Template

## Setup

Set `DATABASE_URL` in `.env`:

```
DATABASE_URL=mysql://USER:PASSWORD@HOST:3306/DATABASE
```

For MySQL 8, append `?allowPublicKeyRetrieval=true` if the app fails with
`pool failed to retrieve a connection from pool`.

## Offline Prisma

Prisma works without downloading anything on Windows x64: the required engine is
in `engines/`.

- Do not delete `engines/`.
- Do not change the Prisma version (7.10.1).

# Auth Module 1 ================================================ 
name: deploy-auth

on:
  push:
    branches:
      - master
    paths:
      - 'packages/auth/**'

defaults:
  run:
    working-directory: packages/auth

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run build

      - uses: chrislennon/action-aws-cli@v1.1
      - run: aws s3 sync dist s3://${{ secrets.AWS_S3_BUCKET_NAME }}/auth/latest
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}

      - run: aws cloudfront create-invalidation --distribution-id ${{ secrets.AWS_DISTRIBUTION_ID }} --paths "/auth/latest/remoteEntry.js"
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}

# Container Module 2 ================================================ 
name: deploy-container

on:
  push:
    branches:
      - master
    paths:
      - 'packages/container/**'

defaults:
  run:
    working-directory: packages/container

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run build
        env:
          PRODUCTION_DOMAIN: ${{ secrets.PRODUCTION_DOMAIN }}

      - uses: chrislennon/action-aws-cli@v1.1
      - run: aws s3 sync dist s3://${{ secrets.AWS_S3_BUCKET_NAME }}/container/latest
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}

      - run: aws cloudfront create-invalidation --distribution-id ${{ secrets.AWS_DISTRIBUTION_ID }} --paths "/container/latest/index.html"
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}



# Dashboard Module 3 ================================================ 
name: deploy-dashboard

on:
  push:
    branches:
      - master
    paths:
      - 'packages/dashboard/**'

defaults:
  run:
    working-directory: packages/dashboard

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run build

      - uses: chrislennon/action-aws-cli@v1.1
      - run: aws s3 sync dist s3://${{ secrets.AWS_S3_BUCKET_NAME }}/dashboard/latest
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}

      - run: aws cloudfront create-invalidation --distribution-id ${{ secrets.AWS_DISTRIBUTION_ID }} --paths "/dashboard/latest/remoteEntry.js"
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}


# Marketing Module 4 ================================================ 


name: deploy-marketing

on:
  push:
    branches:
      - master
    paths:
      - 'packages/marketing/**'

defaults:
  run:
    working-directory: packages/marketing

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run build

      - uses: chrislennon/action-aws-cli@v1.1
      - run: aws s3 sync dist s3://${{ secrets.AWS_S3_BUCKET_NAME }}/marketing/latest
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}

      - run: aws cloudfront create-invalidation --distribution-id ${{ secrets.AWS_DISTRIBUTION_ID }} --paths "/marketing/latest/remoteEntry.js"
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}

# Recommend Product API

<span style="color: red;">This project use custom recommendation api developed by fast api in [this repository](https://github.com/neirinzaralwin/product-recommendation-model-api).</span>

<div style="display: flex; align-items: center;">
    <img src="https://andrewbeeken.co.uk/wp-content/uploads/2018/11/nodejs.jpg?w=1200" width="200px" height="100px">
    <img src="https://repository-images.githubusercontent.com/69495170/8125e100-61bc-11e9-8d9f-eb01f522f962" width="200px" height="100px">
</div>

## Overview

This project implements a recommedation backend api which use custom model api service.

## Steps

Make sure npm is installed

```bash
npm --version
```

Install required packages within <code>package.json</code>

```bash
npm i
```

Run the backend app <code>backend/server.ts</code> in dev mode

```bash
npm run backend:dev
```

## API

<strong  style="color: green;"> GET: </strong> Get all products (I've limited to 20)
<code>http://127.0.0.1:3031/products/</code>

<strong  style="color: orange;"> POST: </strong> Get recommended product by name
<code>http://127.0.0.1:3031/products/recommend</code>
![recommend-product](screenshots/recommend_request.png 'This is a photo')

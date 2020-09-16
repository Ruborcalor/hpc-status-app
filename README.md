# Status App

## Stack

The frontend is developed in React with CRA and Material-UI. The backend is developed with node express.

## Data

There are four views in the status app:
- Shared Partitions
- Private Partitions
- Fairshare
- Storage

Each of these pull data from a json file, the location of which can be customized in `app.js`.

### sharedPartitionData.json:
```
[{
  "name": "Public Partition 1",
  "nodes": {
    "active": 400,
    "draining": 159,
    "free": 252
  },
  "processors": {
    "active": 13252,
    "draining": 2000,
    "free": 7748
  },
  "jobs": {
    "running": 1325,
    "queued": 200,
    "blocked": 12
  }
}, {
  "name": "Public Partition 2",
  "nodes": {
    "active": 500,
    "draining": 159,
    "free": 252
  },
  "processors": {
    "active": 13252,
    "draining": 2000,
    "free": 7748
  },
  "jobs": {
    "running": 1325,
    "queued": 200,
    "blocked": 12
  }
}]
```

### privatePartitionData.json:
```
[{
  "name": "Private Partition 1",
  "users": ["gautierk", "anotheruser", "ckillian"],
  "nodes": {
    "active": 200,
    "draining": 459,
    "free": 552
  },
  "processors": {
    "active": 20987,
    "draining": 2000,
    "free": 1758
  },
  "jobs": {
    "running": 100,
    "queued": 200,
    "blocked": 100
  }
}, {
  "name": "Private Partition 2",
  "users": ["gautierk", "anotheruser", "ckillian"],
  "nodes": {
    "active": 600,
    "draining": 859,
    "free": 952
  },
  "processors": {
    "active": 23252,
    "draining": 1000,
    "free": 1748
  },
  "jobs": {
    "running": 325,
    "queued": 200,
    "blocked": 92
  }
}]
```

### fairshareData.json:
```
[{
  "name": "Lab 1",
  "fairshare": 0.7,
  "users": ["gautierk", "anotheruser", "ckillian"],
  "fairshareTableData": [{
    "user": "mwesson",
    "usage": 9688438
  }, {
    "user": "trhone",
    "usage": 2423585
  }, {
    "user": "saydjari",
    "usage": 2234131
  }, {
    "user": "rualanxue",
    "usage": 40678
  }, {
    "user": "oij",
    "usage": 9688438
  }, {
    "user": "supername",
    "usage": 2423585
  }, {
    "user": "yesname",
    "usage": 2234131
  }, {
    "user": "hiname",
    "usage": 40678
  }]
}, {
  "name": "Lab 2",
  "fairshare": 0.2,
  "users": ["gautierk", "anotheruser", "ckillian"],
  "fairshareTableData": [{
    "user": "mwesson",
    "usage": 9688438
  }, {
    "user": "trhone",
    "usage": 2423585
  }, {
    "user": "saydjari",
    "usage": 2234131
  }, {
    "user": "rualanxue",
    "usage": 40678
  }]
}]
```

### storageData.json
```
[{
  "name": "Homefolder",
  "path": "/n/academic_homes/g_34166/u_316301_g_34166",
  "users": ["ckillian"],
  "block": {
    "limit": 1000,
    "usage": 932
  },
  "file": {
    "limit": 400,
    "usage": 274
  }
}, {
  "name": "Global Scratch",
  "path": "/n/scratch",
  "users": ["gautierk"],
  "block": {
    "limit": 5000,
    "usage": 932
  },
  "file": {
    "limit": 500,
    "usage": 300
  }
}]
```

## Development

Developed with node v10. Yarn v1.22 is used for managing node packages.

During start the frontend by running `cd client && yarn start` and start the backend by running `node app.js`.

Prepare a production build with `cd client && yarn build`.

## Available Scripts

In the `client` directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

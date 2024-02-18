# NodeJS gitlab CICD Base project

This project made for initialize for any nodejs project that use docker, gitlab ci and jest, unit test, together.

## Installation

Use the Node package manager to install.

```bash
npm install 
```

## Testing script
Use test script for run the jest unit tester
```
npm test
```
## gitlab-ci.yml
This file was configured to running on docker at port 4001 and contains 4 stages .

The project will start jobs when make commit or merge code to main branch
## jest
Test coverage treshold setting below
```bash
 coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

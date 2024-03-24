# Warehouse Robot Control

This Git repository contains code to implement the primary control mechanism for a robot installed in a warehouse. The robot moves along a grid on the warehouse's roof, with dimensions of 10 by 10, aligned along north-south and east-west axes.

## Features & Commands

- Send a series of commands to control the robot.
- Ensure the robot stays within the warehouse boundaries.

The robot accepts the following commands:
- `N`: Move north
- `W`: Move west
- `E`: Move east
- `S`: Move south

## Example

An example command sequence:
```
N E S W
```
This sequence will move the robot in a full square, returning it to its starting position.

## Prerequisites

this application is developeda and tested on the following platforms:

```
node : v20.11.1
yarn : 1.22.19
```

## Getting started

Make sure that you have Node.js installed on your project. Run the following command to install all dependencies:

```
yarn install
```

Run this command to compile and watch for changes:

```
yarn start --watch
```

Run this command to compile and bundle the TypeScript code into `bundle.js`:

```
yarn build
```

## Testing

We have used Jest for the Unit Testing and test can be found in `/test` folder

Run this command to crun the test suite:

```
yarn test
```


## License

This project is open-source under the MIT license.

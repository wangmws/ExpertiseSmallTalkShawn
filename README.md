[![node](https://img.shields.io/badge/sagan-0.5+-green.svg)](https://nodejs.org/en) [![node](https://img.shields.io/badge/expertise-small_talk-yellow.svg)](http://small-talk-expertise.mybluemix.net/docs/) [![node](https://img.shields.io/badge/node-6.10.0-lightgrey.svg)](https://nodejs.org/en)

# Description

...

## How To Run Expertise Locally

To run expertise locally you can use the following command

```
npm start
```

**Note!** Make sure the port is not used by any other expertise / server as the expertise will not start.

## How to Test Your Expertise

### Converse With Expertise

The expertise can be tested directly with the expertise converse REST API. Use the following json block in the expertise swagger page.

```
{
  "id": "001",
  "text": "hello",
  "retext": "hello",
  "version": "1.0",
  "language": "en-US",
  "attributes": {
    "intent": "hello"
  },
  "context": {
    "user": {
      "id": "user-001"
    },
    "application": {
      "id": "app-001",
      "attributes": {
      }
    },
    "session": {
      "new": true,
      "attributes": {
      },
      "version": "1.0"
    }
  }
}
```

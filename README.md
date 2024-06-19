# API

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/ttran375/api)

The repository contains:

* Distributed code from **eCentennial**: `server.js` used to build an API server.
* `/.devcontainer`: Configuration file used by **Codespaces** to determine operating system.
* `/.vscode`: Configuration file used by **Codespaces** to configure Visual Studio Code settings.
* `package.json` and `yarn.lock`: Defines the application information for [Node.js](https://nodejs.org/), dependent packages, and the versions needed for each.

## RESTful API

This is a simple Express application that manages a list of items. It supports basic CRUD operations through a RESTful API:

* Retrieve all items
* Retrieve a items by ID
* Add a new item
* Edit an existing item by ID
* Delete a item by ID

### Getting Started

Select **Open in GitHub Codespaces** and then **Create codespace**. **GitHub** will prepare the development environment.

### Install Packages

Install the necessary dependencies for both the server and client parts of the application.

```sh
yarn
```

### Start the Server

After installing the packages, start the server:

```sh
yarn start
```

## Test the REST API

### Testing the API with Thunder Client

1. **Open Thunder Client:**
   * Open **Thunder Client** readily installed in **Codespaces** by clicking on its icon on the sidebar.

2. **Create a New Request:**
   * In **Thunder Client**, click on the **New Request** button to start setting up the API request.
   * Enter the API endpoint URL in the URL field: `http://localhost:8080/api/items`.
   * Select the HTTP method `POST` from the dropdown next to the URL field.

3. **Set Up Request Body:**
   * Click on the "Body" tab, choose and enter the JSON data:

   ```json
   {
     "sportName": "Swimming"
   }
   ```

4. **Send the Request:**
   * Click the "Send" button to execute the request. **Thunder Client** will display the response from the API, including status code, response time, and the body.

### Endpoints

#### Get all items

* **URL:** `/api/items`
* **Method:** `GET`
* **Response:**

  ```json
  [
    "Soccer",
    "Handball",
    "Volleyball",
    "Cricket",
    "Swimming"
  ]
  ```

#### Get an item by ID

* **URL:** `/api/items/:itemId`
* **Method:** `GET`
* **URL Params:**
  * `itemId` - ID of the sport
* **Response:**

  ```json
  {
    "sportName": "Volleyball"
  }
  ```

#### Add a new item

* **URL:** `/api/items`
* **Method:** `POST`
* **Body:**

  ```json
  {
    "sportName": "Basketball"
  }
  ```

* **Response:**

  ```json
  {
    "message": "Added Basketball as item identifier 5"
  }
  ```

#### Edit an item by ID

* **URL:** `/api/items/:id`
* **Method:** `PUT`
* **URL Params:**
  * `id` - ID of the sport
* **Body:**

  ```json
  {
    "sportName": "Rugby"
  }
  ```

* **Response:**

  ```json
  {
    "message": "Updated item with identifier: 0 to Rugby"
  }
  ```

#### Delete an item by ID

* **URL:** `/api/items/:id`
* **Method:** `DELETE`
* **URL Params:**
  * `id` - ID of the sport
* **Response:**

  ```json
  {
    "message": "Deleted sport: Volleyball"
  }
  ```

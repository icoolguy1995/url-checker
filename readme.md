# URL Checker

The URL Checker is a simple web application that allows users to check the validity of URLs and determine if they point to a file or a folder. This project includes a basic UI for inputting URLs and displays results in real-time.

## Project Structure

- src/css/: Contains CSS files for styling the application.
- src/img/: Contains images used in the application.
- src/js/: Contains JavaScript files, including the main logic for URL checking and debouncing.
- src/tests/: Contains test files for the JavaScript code.
- src/index.html: The main HTML file for the web application.

## Running the Project

To run the URL Checker, simply open the src/index.html file in a web browser. This can be done by navigating to the url-checker/src directory and opening the index.html file directly in your browser of choice.

## Running Tests

This project uses Jest for testing. To run the tests, follow these steps:

1. Ensure you have Node.js installed on your system. If not, download and install it from [Node.js website](https://nodejs.org/).

2. Navigate to the root of the project (url-checker folder) in your terminal or command prompt.

3. Install the necessary dependencies (including Jest) by running:

   npm install

4. To run the tests, execute:

   npm test

   This command will run all tests located in the src/tests/ directory.

## Dependencies

- Jest: Used for running tests on the JavaScript code.

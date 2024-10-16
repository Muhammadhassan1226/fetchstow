# FetchStow

FetchStow is a CLI tool that allows you to fetch data from an API and store it in a JSON file. It's designed to simplify the process of retrieving and saving data from external sources.

## Features

- Fetch data from any public API.
- Validate API URLs and filenames.
- Save fetched data as a JSON file.
- Easy-to-use command-line interface.

## Installation

To install FetchStow, you can use npm:

```bash
git clone https://github.com/Muhammadhassan1226/fetchstow.git
cd fetchstow
npm i 
```

# Usage

You can run FetchStow using the command line. The basic syntax is as follows:
```bash
npm run start <apiUrl> <filename>
```
Parameters
<apiUrl>: The URL of the API you want to fetch data from.
<filename>: The name of the file to store the fetched data (must end with .json).

# Example

npm run start https://jsonplaceholder.typicode.com/todos/1 output.json

# Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request. For any issues, please open an issue in the repository.


#!/usr/bin/env node

import { Command } from "commander";
import WritetoFile from "../core/filesys";
import fetchAndStoreData from "../core/api";
import { ValidateUrl, Validatefilename } from "../core/validators";
import Logging from "../../utils/logger";

const commandline = new Command()

commandline
  .version('1.0.0')
  .description('Fetch data from an API and store it in a JSON file')
  .argument('<apiUrl>', 'URL of the API to fetch data from')
  .argument('<filename>', 'Name of the file to store the data')
  .action(async(apiUrl:string,filename:string) => {
        console.log(`Fetching data from ${apiUrl}...`);
        if(!ValidateUrl(apiUrl)){
        Logging.error(`Invalid Url ${apiUrl}`)
        process.exit(1)
        }

        if (!Validatefilename(filename)) {
            Logging.error('Filename must end with .json');
            process.exit(1);
          }

          try {
            const data = await fetchAndStoreData(apiUrl)
            await WritetoFile(filename,data)
          } catch (error: any) {
            if (error.message.includes('NetworkError')) {
                throw new Error(`Failed to fetch data: API is down`);
              }
            Logging.error(`Error during fetch and store: ${error.message}`);
            process.exit(1);
          }

  })

  commandline.parse(process.argv);
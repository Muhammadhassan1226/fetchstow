import { writeFile } from 'node:fs';
import Logging from '../../utils/logger'

 const WritetoFile = async (filename:string,data:any) => {
    try {
          // Convert the data object to a JSON string
       const jsonString = JSON.stringify(data, null, 2);
         writeFile(filename,jsonString , () => {
         Logging.info(`Data successfully written to ${filename}`);
         })
    } catch (error:any) {
        Logging.error(`Error writing to file ${filename}: ${error.message}`);
       throw new Error(`Failed to write to file: ${error.message}`);
    }
}



export default WritetoFile

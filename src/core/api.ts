
import Logging from "../../utils/logger";

const fetchAndStoreData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    Logging.info(`Data fetched successfully from ${url}`);
    return data as any;
  } catch (error:any) {
    Logging.error(`Error fetching data from ${url}: ${error.message}`);
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
};

export default fetchAndStoreData
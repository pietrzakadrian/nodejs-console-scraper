import { Browser } from "puppeteer";
import { TimeTableResponse } from "../interfaces";
import { logger } from "../utils";
import { scraper } from "./page-scraper";

export async function scrapeAll(
  browser: Browser,
  URL: string
): Promise<TimeTableResponse> {
  let timeTable: TimeTableResponse;

  try {
    timeTable = await scraper(browser, URL);
  } catch (err) {
    logger.error("Could not create a browser instance: ", err);
  }

  return timeTable;
}

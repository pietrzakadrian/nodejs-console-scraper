import { Browser } from "puppeteer";
import { TimeTableResponse } from "../interfaces";
import { scraper } from "./page-scraper";

export async function scrapeAll(
  browser: Browser,
  URL: string
): Promise<TimeTableResponse> {
  let timeTable: TimeTableResponse;

  try {
    timeTable = await scraper(browser, URL);
  } catch (err) {
    console.log("Could not resolve the browser instance => ", err);
  }

  return timeTable;
}

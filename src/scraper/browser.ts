import puppeteer, { Browser } from "puppeteer";
import { logger } from "../utils";

export async function startBrowser(): Promise<Browser> {
  let browser: Browser;

  try {
    logger.info("Opening the browser");

    browser = await puppeteer.launch({
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });
  } catch (err) {
    logger.error("Could not create a browser instance: ", err);
  }

  return browser;
}

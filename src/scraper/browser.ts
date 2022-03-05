import puppeteer, { Browser } from "puppeteer";

export async function startBrowser(): Promise<Browser> {
  let browser;

  try {
    console.log("Opening the browser......");

    browser = await puppeteer.launch({
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });
  } catch (err) {
    console.log("Could not create a browser instance => : ", err);
  }

  return browser;
}

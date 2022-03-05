import { Browser } from "puppeteer";
import { TimeTableResponse } from "../interfaces";

export async function scraper(
  browser: Browser,
  URL: string
): Promise<TimeTableResponse> {
  const data: TimeTableResponse = {};
  const page = await browser.newPage();

  console.log(`Navigating to ${URL}...`);

  await page.goto(URL);
  await page.waitForSelector("#table_details");

  data["weekdays"] = await page.$$eval(
    ".tab-content #details tr.rzD td:nth-child(2)",
    (text) => [...new Set(text.map((el) => el.innerHTML))]
  );
  data["schedule"] = await page.$$eval(
    ".tab-content #details tr.rzD",
    (text: HTMLElement[]) =>
      text.map((el) =>
        el.innerText
          .replaceAll("\n", "")
          .split(/\s\s+/g)
          .filter((e) => e.trim().length > 0)
      )
  );

  browser.close();

  return data;
}

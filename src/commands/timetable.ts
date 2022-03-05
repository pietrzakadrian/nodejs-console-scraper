import readlineSync from "readline-sync";
import type { Arguments, CommandBuilder } from "yargs";
import { ClassDay } from "../models";
import { scrapeAll as scraperController, startBrowser } from "../scraper";

type Options = {
  URL: string;
};

export const command: string = "timetable <URL>";

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs.positional("URL", { type: "string", demandOption: true });

export const handler = async ({ URL }: Arguments<Options>): Promise<void> => {
  const browserInstance = await startBrowser();
  const { schedule, weekdays } = await scraperController(browserInstance, URL);

  process.stdout.write("Available weekdays:\n");

  weekdays.forEach((weekday, index) => {
    process.stdout.write(`[${index}]: ${weekday}\n`);
  });

  const selectedWeekday = readlineSync.question(
    "Select the day of the week number: "
  );

  const selectedSchedule = schedule.filter(
    (item) => item[1] === weekdays[selectedWeekday]
  );

  selectedSchedule.forEach((item) => {
    const classDay = new ClassDay(
      item[0],
      item[1],
      item[2],
      item[3],
      item[4],
      item[5],
      item[6],
      item[7]
    );

    process.stdout.write(
      `date: ${classDay.date} | day: ${classDay.day} | from: ${classDay.from} | to: ${classDay.to} | subject: ${classDay.subject} | type: ${classDay.type} | teacher: ${classDay.teacher} | classroom: ${classDay.classroom}\n`
    );
  });

  process.exit(0);
};

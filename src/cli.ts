#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .commandDir("commands")

  .check(function (argv) {
    if (argv.URL && !(argv.URL as string).includes("plan.uz.zgora.pl")) {
      throw new Error(
        "Incorrect address. Please enter a URL from the domain plan.uz.zgora.pl."
      );
    }

    return true;
  })
  .strict()
  .alias({ h: "help" }).argv;

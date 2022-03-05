# Node.js Console Web Data Scraper ⬇️

### A console application that downloads and parses content from a web page.

## Installation

```bash
# 1. Clone the application repository
git clone https://github.com/pietrzakadrian/nodejs-console-scraper

# 2. Enter the application directory
cd nodejs-console-scraper

# 3. Install required npm packages and build application
yarn && yarn build
```

## Start the program

```bash
./build/cli.js timetable http://www.plan.uz.zgora.pl/grupy_plan.php\?ID\=25126
```

## Action example

```bash
❯ ./build/cli.js timetable http://www.plan.uz.zgora.pl/grupy_plan.php\?ID\=25126
info: Opening the browser
info: Navigating to http://www.plan.uz.zgora.pl/grupy_plan.php?ID=25126
Available weekdays:
[0]: So
[1]: Ni
[2]: Nr
Select the day of the week number: 1
date: 2022-03-27 | day: Ni | from: 11:00 | to: 12:20 | subject: Modelowanie i animacja postaci 3D | type: P | teacher: dr inż. Andrzej Czajkowski | classroom: 308 A-2
date: 2022-03-27 | day: Ni | from: 12:45 | to: 14:15 | subject: Modelowanie i animacja postaci 3D | type: L | teacher: dr inż. Andrzej Czajkowski | classroom: 308 A-2
date: 2022-03-27 | day: Ni | from: 15:05 | to: 16:35 | subject: Systemy wizualizacji procesów | type: L | teacher: dr inż. Adam Markowski | classroom: 507 A-2
date: 2022-03-27 | day: Ni | from: 16:40 | to: 18:00 | subject: Historia techniki | type: W | teacher: dr Hanna Kurowska | classroom: 110/111 A-2
date: 2022-04-10 | day: Ni | from: 09:15 | to: 10:45 | subject: Zachowania człowieka w organizacji i na rynku pracy | type: W | teacher: dr inż. Patrycja Łychmus | classroom: 120 A-2
date: 2022-04-10 | day: Ni | from: 10:55 | to: 12:35 | subject: Modelowanie i animacja postaci 3D | type: W | teacher: dr inż. Andrzej Czajkowski | classroom: 109 A-2
date: 2022-04-10 | day: Ni | from: 12:45 | to: 14:15 | subject: Modelowanie i animacja postaci 3D | type: L | teacher: dr inż. Andrzej Czajkowski | classroom: 308 A-2
date: 2022-04-10 | day: Ni | from: 15:05 | to: 16:35 | subject: Systemy wizualizacji procesów | type: L | teacher: dr inż. Adam Markowski | classroom: 507 A-2
date: 2022-04-10 | day: Ni | from: 16:40 | to: 18:20 | subject: Systemy wizualizacji procesów | type: W | teacher: dr inż. Adam Markowski | classroom: 507 A-2
date: 2022-04-24 | day: Ni | from: 11:00 | to: 12:20 | subject: Modelowanie i animacja postaci 3D | type: P | teacher: dr inż. Andrzej Czajkowski | classroom: 308 A-2
date: 2022-04-24 | day: Ni | from: 12:45 | to: 14:15 | subject: Modelowanie i animacja postaci 3D | type: L | teacher: dr inż. Andrzej Czajkowski | classroom: 308 A-2
date: 2022-04-24 | day: Ni | from: 15:05 | to: 16:35 | subject: Systemy wizualizacji procesów | type: L | teacher: dr inż. Adam Markowski | classroom: 507 A-2
date: 2022-04-24 | day: Ni | from: 16:40 | to: 18:00 | subject: Historia techniki | type: W | teacher: dr Hanna Kurowska | classroom: 110/111 A-2
date: 2022-05-15 | day: Ni | from: 10:55 | to: 12:35 | subject: Modelowanie i animacja postaci 3D | type: W | teacher: dr inż. Andrzej Czajkowski | classroom: 109 A-2
date: 2022-05-15 | day: Ni | from: 12:45 | to: 14:15 | subject: Modelowanie i animacja postaci 3D | type: L | teacher: dr inż. Andrzej Czajkowski | classroom: 308 A-2
date: 2022-05-15 | day: Ni | from: 15:05 | to: 16:35 | subject: Systemy wizualizacji procesów | type: L | teacher: dr inż. Adam Markowski | classroom: 507 A-2
date: 2022-05-15 | day: Ni | from: 16:40 | to: 18:20 | subject: Systemy wizualizacji procesów | type: W | teacher: dr inż. Adam Markowski | classroom: 507 A-2
date: 2022-05-22 | day: Ni | from: 11:00 | to: 12:20 | subject: Modelowanie i animacja postaci 3D | type: P | teacher: dr inż. Andrzej Czajkowski | classroom: 308 A-2
date: 2022-05-22 | day: Ni | from: 12:45 | to: 14:15 | subject: Modelowanie i animacja postaci 3D | type: L | teacher: dr inż. Andrzej Czajkowski | classroom: 308 A-2
date: 2022-05-22 | day: Ni | from: 15:05 | to: 16:35 | subject: Systemy wizualizacji procesów | type: L | teacher: dr inż. Adam Markowski | classroom: 507 A-2
date: 2022-05-22 | day: Ni | from: 16:40 | to: 18:00 | subject: Historia techniki | type: W | teacher: dr Hanna Kurowska | classroom: 110/111 A-2
date: 2022-05-29 | day: Ni | from: 10:55 | to: 12:35 | subject: Modelowanie i animacja postaci 3D | type: W | teacher: dr inż. Andrzej Czajkowski | classroom: 109 A-2
date: 2022-05-29 | day: Ni | from: 12:45 | to: 14:15 | subject: Modelowanie i animacja postaci 3D | type: L | teacher: dr inż. Andrzej Czajkowski | classroom: 308 A-2
date: 2022-05-29 | day: Ni | from: 15:05 | to: 16:35 | subject: Systemy wizualizacji procesów | type: L | teacher: dr inż. Adam Markowski | classroom: 507 A-2
date: 2022-05-29 | day: Ni | from: 16:40 | to: 18:20 | subject: Systemy wizualizacji procesów | type: W | teacher: dr inż. Adam Markowski | classroom: 507 A-2
date: 2022-06-12 | day: Ni | from: 11:00 | to: 12:20 | subject: Modelowanie i animacja postaci 3D | type: P | teacher: dr inż. Andrzej Czajkowski | classroom: 308 A-2
date: 2022-06-12 | day: Ni | from: 12:45 | to: 14:15 | subject: Modelowanie i animacja postaci 3D | type: L | teacher: dr inż. Andrzej Czajkowski | classroom: 308 A-2
date: 2022-06-12 | day: Ni | from: 15:05 | to: 16:35 | subject: Systemy wizualizacji procesów | type: L | teacher: dr inż. Adam Markowski | classroom: 507 A-2
date: 2022-06-12 | day: Ni | from: 16:40 | to: 18:00 | subject: Historia techniki | type: W | teacher: dr Hanna Kurowska | classroom: 110/111 A-2
```

### URL validation

```bash
❯ ./build/cli.js timetable google.com
cli.js timetable <URL>

Pozycyjne:
  URL                                                   [ciąg znaków] [wymagany]

Opcje:
      --version  Pokaż numer wersji                                    [boolean]
  -h, --help     Pokaż pomoc                                           [boolean]

Incorrect address. Please enter a URL from the domain plan.uz.zgora.pl.
```

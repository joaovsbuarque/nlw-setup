import { genateteDatesFromYearBeginning } from "../utils/genarete-dates-from-years-beginning";
import { HabitDay } from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = genateteDatesFromYearBeginning();

const minimumSumaryDatesSize = 18 * 7;
const amoutOfDatesToFill = minimumSumaryDatesSize - summaryDates.length;

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDays, i) => {
          return (
            <div
              key={`${weekDays}-${i}`}
              className="text-zinc-400 text-xl h-10 w-10 item-center justify-center font-bold"
            >
              {weekDays}
            </div>
          );
        })}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => {
          return <HabitDay amount={5} completed={3} key={date.toString()} />;
        })}

        {amoutOfDatesToFill > 0 &&
          Array.from({ length: amoutOfDatesToFill }).map((_, i) => {
            return (
              <div
                key={i}
                className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
              />
            );
          })}
      </div>
    </div>
  );
}

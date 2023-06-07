import UpcomingEvents from "./UpcomingEvents";
import PreviousEvents from "./PreviousEvents";
export default function Events() {
  return (
    <div className="pt-[12rem] mx-auto p-4">
      <UpcomingEvents />
      <PreviousEvents />
    </div>
  );
}

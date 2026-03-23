import SectionTitle from "@/components/events/SectionTitle";
import EventCard from "@/components/events/EventCard";
import { EVENTS } from "@/lib/events";
import FormOverlap from "@/components/FormOverlap";
import CallToAction from "@/components/CallToAction";

export default function EventsPage() {
  return (
    <main className="w-full bg-white">
      <div
        className="max-w-7xl mx-auto px-7"
        style={{ paddingTop: "64px", paddingBottom: "80px" }}
      >
        {/* Page title */}
        <div className="mb-14">
          <SectionTitle title="Events" />
        </div>

        {/* Event cards */}
        <div className="flex flex-col gap-14">
          {EVENTS.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
            <FormOverlap />
            <CallToAction />
    </main>
  );
}
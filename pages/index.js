import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
    const featuredEvents = getFeaturedEvents();

    return (
        //  Show Featured Events
        <div>
            <EventList items={featuredEvents} />
        </div>
    );
};


export default HomePage;
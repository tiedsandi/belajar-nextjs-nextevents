import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../dummy-data";


const FilteredEventsPage = () => {
    const router = useRouter();

    const filterData = router.query.slug;

    if (!filterData) {
        return <p className="center">Loading...</p>
    }

    const filterYear = filterData[0];
    const filterMonth = filterData[1];

    const numYear = +filterYear;
    const numMonth = +filterMonth;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>Invalid filter. Please adjust your values!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>No Events found for the chosen filter!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
        )
    }

    const date = new Date(numYear, numMonth);

    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    );
};


export default FilteredEventsPage;
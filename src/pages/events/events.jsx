import Calendar from "../../components/Calendar/Calendar";
import EventsTable from "../../components/EventsTable/EventsTable";

export function Events() {
	return (
		<div>
			<Calendar title="Calendario de Eventos" />
			<EventsTable />
		</div>
	);
}

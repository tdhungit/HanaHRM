import React, {Component} from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Button
} from 'reactstrap';

import {T, t, PT} from '/imports/common/Translation';
import FullCalendar from '../../components/FullCalendar/FullCalendar';

class ViewCalendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            view: 'month', // month,agendaWeek,agendaDay,
            monthColor: 'primary',
            agendaWeekColor: 'secondary',
            agendaDayColor: 'secondary',
            date: new Date(),
            events: [
                {
                    title: 'Default event',
                    start: new Date(),
                    // plus 30 minutes
                    end: new Date(Date.now + 30 * 60 * 1000),
                }
            ],
        };

        this.onEventSelect = this.onEventSelect.bind(this);
    }

    changeView(view) {
        this.setState({
            view: view,
            monthColor: 'secondary',
            agendaWeekColor: 'secondary',
            agendaDayColor: 'secondary',
            [view + 'Color']: 'primary'
        });
    }

    onEventSelect(start, end) {
        const events = this.state.events;

        const newEventsSource = events.concat({
            title: `Event #${events.length}`,
            // moment object to simple date object
            start: start.toDate(),
            end: end.toDate(),
        });

        this.setState({
            events: newEventsSource,
        });
    }

    render() {
        const calendarOptions = {
            header: false,

            id: 'calendar-example',
            defaultView: this.state.view,
            defaultDate: this.state.date,
            timezone: 'local',

            editable: true,
            droppable: true,
            selectable: true,

            slotDuration: '00:15',
            scrollTime: '08:00',
            columnFormat: 'ddd DD/MM',
            displayTime: true,
            firstDay: 1,

            select: this.onEventSelect,

            // please, use funciton events source for reactivity support
            events: (start, end, timezone, callback) => {
                callback(this.state.events);
            },
        };

        return (
            <div className="activities-ViewCalendar animated fadeIn">
                <PT title={t.__('View Calendar')}/>
                <Card>
                    <CardHeader>
                        <i className="fa fa-calendar"/>
                        <strong><T>Calendar</T></strong>
                    </CardHeader>
                    <CardBody>
                        <div className="calendar-header">
                            <Row>
                                <Col md="3">
                                    <div className="pull-left">
                                        <Button outline type="button" size="sm"><T>Back</T></Button>
                                        <Button outline type="button" size="sm"><T>Today</T></Button>
                                        <Button outline type="button" size="sm"><T>Next</T></Button>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="text-center fc-title">20/10/1987</div>
                                </Col>
                                <Col md="3">
                                    <div className="pull-right">
                                        <Button outline type="button" size="sm" color={this.state.monthColor}
                                                onClick={this.changeView.bind(this, 'month')}><T>Month</T></Button>
                                        <Button outline type="button" size="sm" color={this.state.agendaWeekColor}
                                                onClick={this.changeView.bind(this, 'agendaWeek')}><T>Week</T></Button>
                                        <Button outline type="button" size="sm" color={this.state.agendaDayColor}
                                                onClick={this.changeView.bind(this, 'agendaDay')}><T>Day</T></Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="activities-calendar">
                            <FullCalendar options={calendarOptions} />
                        </div>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default ViewCalendar;

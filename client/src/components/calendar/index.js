import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick

{/* <link href='client/node_modules/@fullcalendar/core/main.css' rel='stylesheet'> </link>
<link href='client/node_modules/@fullcalendar/daygrid/main.css' rel='stylesheet'> </link> */}

require('../../../node_modules/@fullcalendar/core/main.css')
require('../../../node_modules/@fullcalendar/daygrid/main.css')

class CalendarApp extends React.Component {

  calendarComponentRef = React.createRef()
  state = {
    calendarWeekends: true,
    //load calendar events database
    // calendarEvents: [ // initial event data
    //   { title: 'Event Now', start: new Date() }
    // ]
  }

  // render() {
  //   return (
  //     <div className='app'>
  //       <div className='app-top'>
  //         <button onClick={ this.toggleWeekends }>toggle weekends</button>&nbsp;
  //         <button onClick={ this.gotoPast }>go to a date in the past</button>&nbsp;
  //         (also, click a date/time to add an event)
  //       </div>
  //       <div className='app-calendar'>
  //         <FullCalendar
  //           defaultView="dayGridMonth"
  //           header={{
  //             left: 'prev,next today',
  //             center: 'title',
  //             right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  //           }}
  //           plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
  //           ref={ this.calendarComponentRef }
  //           weekends={ this.state.calendarWeekends }
  //           events={ this.state.calendarEvents }
  //           dateClick={ this.handleDateClick }
  //           />
  //       </div>
  //     </div>
  //   )
  // }
  
  render() {
    return (
      <div className="card text-center">
        <div className="card-header"></div>
        <div className="card-body calendar-card-body">
        <FullCalendar 
        defaultView="dayGridMonth"
        firstday = '1'
        locale = 'en'
        header={{
          left:   'title',
          center: 'Schedule of Events',
          right:  'today prev,next'
        }}
        buttonText = {{
          today:    'today',
          month:    'month',
          week:     'week',
          day:      'day',
          list:     'list'
        }}
            plugins={[ dayGridPlugin ]}
            ref={ this.calendarComponentRef }
            weekends={ this.state.calendarWeekends }
            events={ this.state.calendarEvents }
            dateClick={ this.handleDateClick }
            />
            </div>
      </div>
    );
  }
};
export default CalendarApp;

//   toggleWeekends = () => {
//     this.setState({ // update a property
//       calendarWeekends: !this.state.calendarWeekends
//     })
//   }

//   gotoPast = () => {
//     let calendarApi = this.calendarComponentRef.current.getApi()
//     calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
//   }

//   handleDateClick = (arg) => {
//     if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
//       this.setState({  // add new event data
//         calendarEvents: this.state.calendarEvents.concat({ // creates a new array
//           title: 'New Event',
//           start: arg.date,
//           allDay: arg.allDay
//         })
//       })
//     }
//   }

// }

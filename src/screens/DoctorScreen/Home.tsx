import React, {useCallback, useMemo, useState} from 'react';
import {View, Text} from 'react-native';
import {
  Calendar,
  CalendarList,
  WeekCalendar,
  Agenda,
  Timeline,
  DateData,
  AgendaEntry,
  AgendaSchedule,
} from 'react-native-calendars';
const RANGE = 24;
const initialDate = '2024-03-25';
const nextWeekDate = '2024-04-01';
const nextMonthDate = '2024-04-25';
interface State {
  items?: AgendaSchedule;
}
const Home = () => {
  const [selected, setSelected] = useState('');
  const horizontalView = true;

  return (
    <View>
      <Text>Doctor Home</Text>
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          '2024-03-25': {selected: true, marked: true, selectedColor: 'blue'},
          '2024-03-26': {marked: true},
          '2024-03-27': {selected: true, marked: true, selectedColor: 'blue'},
        }}
      />
      {selected ? <Text>{selected}</Text> : null}
      <CalendarList
        // testID={testIDs.calendarList.CONTAINER}
        pastScrollRange={RANGE}
        futureScrollRange={RANGE}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        calendarHeight={!horizontalView ? 390 : undefined}
        // theme={!horizontalView ? theme : undefined}
        horizontal={horizontalView}
        pagingEnabled={horizontalView}
        staticHeader={horizontalView}
        minDate="2024-03-25"
        maxDate="2024-04-01"
      />
      {/* <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems}
        selected={'2017-05-16'}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        showClosingKnob={true}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#43515c'},
        //    '2017-05-09': {textColor: '#43515c'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        // renderDay={this.renderDay}
        // hideExtraDays={false}
        // showOnlySelectedDayItems
        // reservationsKeyExtractor={this.reservationsKeyExtractor}
      /> */}
      {/* <WeekCalendar /> */}
    </View>
  );
};

export default Home;

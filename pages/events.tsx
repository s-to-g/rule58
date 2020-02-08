import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import Box from 'ui/Box';
import Text from 'ui/Text';
import EVENTS_QUERY from 'graphql/EventsQuery';

const Events = () => {
  const {data, loading} = useQuery(EVENTS_QUERY);
  const events = !loading && data?.events;
  console.log('events', events);
  return (
    events &&
    events.map((event: any) => (
      <Box key={event.id}>
        <Text>{event.title}</Text>
      </Box>
    ))
  );
};

export default Events;

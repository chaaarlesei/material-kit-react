import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { BookingView } from 'src/sections/booking/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Bookings - ${CONFIG.appName}`}</title>
      </Helmet>

      <BookingView />
    </>
  );
}

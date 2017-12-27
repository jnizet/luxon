/* global test expect */

import { DateTime } from '../../src/luxon';

//------
// min
//-------
test('DateTime.min returns the only dateTime if solo', () => {
  const m = DateTime.min(DateTime.fromJSDate(new Date(1982, 5, 25)));
  expect(m).toBeTruthy();
  expect(m.valueOf()).toBe(DateTime.fromJSDate(new Date(1982, 5, 25)).valueOf());
});

test('DateTime.min returns the min dateTime', () => {
  const m = DateTime.min(
    DateTime.fromJSDate(new Date(1982, 5, 25)),
    DateTime.fromJSDate(new Date(1982, 3, 25)),
    DateTime.fromJSDate(new Date(1982, 3, 26))
  );
  expect(m.valueOf()).toBe(DateTime.fromJSDate(new Date(1982, 3, 25)).valueOf());
});

test('DateTime.min returns undefined if no argument', () => {
  const m = DateTime.min();
  expect(m).toBeUndefined();
});

test('DateTime.min is stable', () => {
  const m = DateTime.min(
    DateTime.fromJSDate(new Date(1982, 5, 25)),
    DateTime.fromJSDate(new Date(1982, 3, 25)).reconfigure({ locale: 'en-GB' }),
    DateTime.fromJSDate(new Date(1982, 3, 25)).reconfigure({ locale: 'en-US' })
  );
  expect(m.locale).toBe('en-GB');
});

//------
// max
//-------
test('DateTime.max returns the only dateTime if solo', () => {
  const m = DateTime.max(DateTime.fromJSDate(new Date(1982, 5, 25)));
  expect(m).toBeTruthy();
  expect(m.valueOf()).toBe(DateTime.fromJSDate(new Date(1982, 5, 25)).valueOf());
});

test('DateTime.max returns the max dateTime', () => {
  const m = DateTime.max(
    DateTime.fromJSDate(new Date(1982, 5, 25)),
    DateTime.fromJSDate(new Date(1982, 3, 25)),
    DateTime.fromJSDate(new Date(1982, 3, 26))
  );
  expect(m.valueOf()).toBe(DateTime.fromJSDate(new Date(1982, 5, 25)).valueOf());
});

test('DateTime.max returns undefined if no argument', () => {
  const m = DateTime.max();
  expect(m).toBeUndefined();
});

test('DateTime.max is stable', () => {
  const m = DateTime.max(
    DateTime.fromJSDate(new Date(1982, 2, 25)),
    DateTime.fromJSDate(new Date(1982, 3, 25)).reconfigure({ locale: 'en-GB' }),
    DateTime.fromJSDate(new Date(1982, 3, 25)).reconfigure({ locale: 'en-US' })
  );
  expect(m.locale).toBe('en-GB');
});

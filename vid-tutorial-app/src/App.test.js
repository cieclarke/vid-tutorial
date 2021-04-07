import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './components/App';
import React from 'react';

test('smoke test: renders app home content result list', async () => {
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.findAllByRole('listitem')).toBeTruthy();
  });
  
});

test('renders app home content header', () => {
  const {  getByRole }  = render(<App />);
  expect(getByRole('header')).toBeTruthy();
});

test('renders app home content info list', () => {
  const {  getByRole }  = render(<App />);
  expect(getByRole('list')).toBeTruthy();
});



test('renders app home content result list', async () => {
  
  render(<App />);
  
  await waitFor(() => {
    expect(screen.findAllByRole('listitem')).toBeTruthy();
  });
});

test('renders app data search', async () => {
  
  render(<App />);

  const input = screen.getByRole('search');
  const radio = screen.getByRole('tags');
  input.value = "Eve";
  radio.checked = true;
  fireEvent.click(screen.getByText('Search'));

  await waitFor(() => {
    expect(screen.findAllByRole('listitem')).toBeTruthy();
  });
  
});


test('renders app tag search less than equal to 20', async () => {
  
  render(<App />);

  const input = screen.getByRole('search');
  const radio = screen.getByRole('tags');
  input.value = "Hard";
  radio.checked = true;
  fireEvent.click(screen.getByText('Search'));

  await waitFor(() => {
    expect(screen.findAllByRole('listitem')).toBeTruthy();
    expect(screen.findAllByRole('listitem').length).toBeLessThanOrEqual(20);
  });
  
});

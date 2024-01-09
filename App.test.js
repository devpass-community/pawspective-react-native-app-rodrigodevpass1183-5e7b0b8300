import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';
import { DetailsScreen } from './DetailScreen';

const delay = ms => new Promise(res => setTimeout(res, ms));

describe('ListScreen', () => {

  it('renders a list of breeds when data is loaded', async () => {
    const { getByText } = render(<App />);
    await delay(3000);

    const breed1Element = getByText('affenpinscher');
    expect(breed1Element).toBeTruthy();
  }, 10000);
});

describe('DetailsScreen', () => {

  it('renders a list of images when data is loaded', async () => {
    const { getByTestId } = render(<DetailsScreen route={{ params: { breed: 'bulldog'} } } />);

    await delay(3000);

    const image = getByTestId('https://images.dog.ceo/breeds/bulldog-boston/20200710_175933.jpg');
    expect(image).toBeTruthy();
  }, 10000);
});

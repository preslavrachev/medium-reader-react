import SearchResultsPage from '../model/SearchResultsPage';
import Image from '../model/Image';
import fixture from './fixtures/mock-medium-list-response.json';

it('asserts that the images are present', () => {
  const mockData: SearchResultsPage = fixture as SearchResultsPage;
  const images:string[] = mockData.payload.value.posts
    .map(p => p.virtuals.previewImage ? p.virtuals.previewImage.imageId : 'imageIdPlaceholder.png');

  expect(images).toMatchSnapshot();
});
import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_CONTENT_DELIVERY,
});

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response));

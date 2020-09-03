// @json
import securityData from './security-data.json';
import techCollection from './tech-collection.json';

export default ({
    ...securityData,
    ...techCollection
});

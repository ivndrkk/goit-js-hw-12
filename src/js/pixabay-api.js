    let query = '';

    function updateQuery(newQuery) {
    query = newQuery;
    }

    function getBaseUrl() {
    const API_KEY = '47095824-8bdea46d531b71ca6f863e2d0';
    return `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
    }

    export { updateQuery, getBaseUrl };

let query = '';

function updateQuery(newQuery) {
    query = newQuery;
}

function getBaseUrl(query, page = 1, perPage = 15) {
    const API_KEY = '47095824-8bdea46d531b71ca6f863e2d0';
    return `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
}

export { updateQuery, getBaseUrl };

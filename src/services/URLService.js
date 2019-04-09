import queryString from 'query-string';

class URLService {

    addParametersToURLHash(baseHash, newParameters) {
        const params = queryString.parse(baseHash);
        const newParams = {...params, ...newParameters};
        return "#" + queryString.stringify(newParams);
    }

    getCurrentParams() {
        return queryString.parse(location.hash);
    }

}

export default new URLService;

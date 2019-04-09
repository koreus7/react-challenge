import HttpService from './HttpService';

class BookEndpointService {
  
  getBooks(apiUrl, page, itemsPerPage, filter, cb) {
    HttpService.request({
      method: 'POST',
      url: `${apiUrl}/api/books`,
      data: {
        page,
        itemsPerPage,
        filters: filter ? [{ type: "all", values: [filter] }] : undefined
      }
    }, (err, res) => {
      err ? cb(err, null) : cb(null, res);
    });
  }
  
}

export default new BookEndpointService;
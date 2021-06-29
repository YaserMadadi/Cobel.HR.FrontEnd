
export class Paginate {

    constructor(_recordPerPage: number = 80, _currentPage: number = 1) {
        this.recordPerPage = _recordPerPage;
        this.currentPage = _currentPage;
    }

    public recordPerPage: number;

    public pageCount: number;

    public currentPage: number;
}

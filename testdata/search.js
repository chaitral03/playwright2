class search{
    constructor(page)
    {
        this.searchbox=page.getByPlaceholder('Search for products, brands and more')
        this.pd=page.getByText('Vitamin C+E Gel Facewash 100ml')
    }
}
export default search
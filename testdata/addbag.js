class addbag{
    constructor(page)
    {
        this.abt=page.locator('//span[@class="myntraweb-sprite pdp-whiteBag sprites-whiteBag pdp-flex pdp-center"]')
        this.btn=page.getByRole("button",{name:'Pack'})
        this.cart=page.locator("//span[.='Bag']")
        this.c=page.locator("//span[.='Bag']")
    }  
}
export default addbag
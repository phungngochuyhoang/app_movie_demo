
const Layout = function ({children}) {

    return (
        <div className="container-fluid">
            <main className="row">{children}</main>
        </div>
    )
}

export default Layout
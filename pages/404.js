


export default function Custom404() {

    const body = {
        display: 'flex',
        justifyContent: 'center',
        height: 'calc(100vh - 50px)',
        alignItems: 'center'
    }

    return (
        <div style={body}>
            <h1 style={{
                textAlign: 'center',

            }}>404 - Page Not Found</h1>
        </div>
    )
}
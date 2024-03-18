export default function Loader() {
    return (
        <div className="preloader">
            <img src="/dist/media/img/logo-2x.png" alt="logo" />
            <p className="lead font-weight-bold text-muted my-5">Loading Chat App ...</p>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
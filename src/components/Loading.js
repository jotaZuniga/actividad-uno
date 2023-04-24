export const Loading = () => {
    return (
        <div className="container-fluid d-flex justify-content-center" style={{ height: '18rem'}}>
            <div className="d-flex flex-direction-column align-items-center">
                <strong>Loading...</strong>
                <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
        </div>      
    );
}
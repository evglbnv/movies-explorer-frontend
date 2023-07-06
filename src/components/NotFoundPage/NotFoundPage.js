import "./NotFoundPage.css"

function NotFoundPage() {
    return(
            <main className="not-found">
                <div className="not-found__info">
                    <span className="not-found__code">404</span>
                    <p className="not-found__message">Страница не найдена</p>
                </div>
                <button className="not-found__back-button" type="button">Назад</button>
            </main >
    )
}

export default NotFoundPage
const Cards = ({ title, button, content, children }) => {

    return (
        <div className="card-body">
            {children}
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
            <a href="#" className="btn btn-primary">{button}</a>
        </div>
    )
}

export default Cards;
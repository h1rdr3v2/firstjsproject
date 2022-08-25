export default function MainContent() {
    return(
        <div className="lcen content">
            <div className="user">
                <h1 className="name">Destiny Ezenwata</h1>
                <h3 className="title">Backend Developer</h3>
                <p className="web">devezealivinglegend.com</p>
            </div>
            <div className="contact">
                <button type="submit" class="btn btn-email">
                    <i class="icon bi bi-envelope-fill"></i> Email
                </button>
                <button type="submit" class="btn btn-in">
                    <i class="icon bi bi-linkedin"></i> LinkedIn
                </button>
            </div>
            <div className="description">
                <h2 className="head">About</h2>
                <p className="detail">I am a backend developer with a particular interest
                 in making things simple and automating daily tasks.
                 I try to keep up with security and best practices, 
                 and am always looking for new things to learn.
                </p>
                <h2 className="head">Interests</h2>
                <p className="detail">
                Food expert. Music scholar. Reader.
                 Internet fanatic. Bacon buff. 
                 Entrepreneur. Travel geek. 
                 Pop culture ninja. Coffee fanatic.
                </p>
            </div>
        </div>
    )
}
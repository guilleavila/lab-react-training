import './IdCard.css'

const IdCard = (props) => {

    const { lastName, firstName, gender, height, birth, picture } = props

    return (
        <article>
            <img className="img-id" src={picture} alt="profile pic"></img>
            <div className="info">
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth: {birth.toDateString()}</p>
            </div>
        </article>
    )
}

export default IdCard
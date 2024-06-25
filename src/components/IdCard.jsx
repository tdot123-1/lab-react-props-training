const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div className="id-card">
            <img
                src={picture}
                alt="id picture"
                className="id-picture" 
            />
            <div className="id-info">
                <p><span>First name</span>: {firstName}</p>
                <p><span>Last name</span>: {lastName}</p>
                <p><span>Gender</span>: {gender}</p>
                <p><span>Height</span>: {height}</p>
                <p><span>Birth</span>: {birth.toDateString()}</p>
            </div>
        </div>
    );
}

export default IdCard;
const CreditCard = ({ 
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
}) => {

    let image;

    if (type === "Visa") {
        image = "./src/assets/images/visa.png";
    }
    else if (type === "Master Card") {
        image = "./src/assets/images/master-card.svg";
    }
    else {
        image = "no-image";
    }

    function displayNumber(number) {
        const finalDigits = number.slice(-4);
        const firstDigits = "*".repeat(number.length - 4);
        const numberToDisplay = firstDigits + finalDigits;

        const formattedNumber = `
        ${numberToDisplay.slice(0, 4)} ${numberToDisplay.slice(4, 8)}  ${numberToDisplay.slice(8, 12)}  ${numberToDisplay.slice(12)}  
        `;

        return formattedNumber;
    }

    return (
        <div className="credit-card" style={{ 
            backgroundColor: `${bgColor}`,
            color: color,
        }}>
            <div>
                <img className="credit-card-logo" src={image}/>
            </div>
            <p className="credit-card-nr">{displayNumber(number)}</p>
            <div className="credit-card-info">
                <p>Expires {expirationMonth}/{expirationYear} <span>{bank}</span></p>
                <p>{owner}</p>
            </div>
        </div>
    );
}

export default CreditCard;
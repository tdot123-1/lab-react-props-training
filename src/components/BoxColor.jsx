const BoxColor = ({ r, g, b}) => {
    return (
        <div
            style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
            className="box-color"
        >
            rgb({r}, {g}, {b})
        </div>
    );
}

export default BoxColor;
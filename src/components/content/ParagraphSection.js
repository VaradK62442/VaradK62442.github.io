function ParagraphSection({ paragraph, image, position, has_link = false }) {
    return (
        <div
            className={`flex items-center mb-4 ${
                position === "left" ? "flex-row" : "flex-row-reverse"
            }`}
        >
            <div className="w-40 h-40 mx-4 flex-shrink-0">
                <img
                    src={"/media/" + image}
                    alt="About"
                    className={`w-40 h-40 object-cover rounded-xl shadow-lg ${
                        has_link ? "transition-transform duration-300 hover:scale-105" : ""
                    }`}
                />
            </div>
            <p className="text-justify">
                {paragraph}
            </p>
        </div>
    );
}

export default ParagraphSection;
function ParagraphSection({ paragraph, image, position }) {
    return (
        <div
            class={`flex items-center mb-4 ${
                position === "left" ? "flex-row" : "flex-row-reverse"
            }`}
        >
            <img
                src={"/media/" + image}
                alt="About"
                class="w-40 h-40 object-cover rounded-xl shadow-lg mx-4"
            />
            <p class="text-justify">
                {paragraph}
            </p>
        </div>
    );
}

export default ParagraphSection;
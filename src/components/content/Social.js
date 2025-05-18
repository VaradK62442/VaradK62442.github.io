// component for a social link

function Social({ icon, link, title, description }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-crimson rounded-lg hover:bg-crimson-600 transition shadow"
        >
            <img src={icon} alt={title} className="w-16 h-16 mr-4 rounded-full" />
            <div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p>{description}</p>
            </div>
        </a>
    );
}

export default Social;
import React from 'react';

const content = [
    {
        title: "Efficiëntie en Groei door Slimme Strategieën",
        text: "In een steeds veranderende markt is het cruciaal om niet alleen mee te bewegen, maar ook vooruit te denken. Succesvolle bedrijven investeren in slimme strategieën die processen optimaliseren en groei stimuleren.",
        image: "/Building.jpg",
        reverse: false, // Beeld links, tekst rechts
    },
    {
        title: "Duurzaam Ondernemen met Resultaat",
        text: "Succes in de moderne economie vereist niet alleen winstgevendheid, maar ook duurzaamheid en innovatie. Bedrijven die investeren in verantwoorde en flexibele strategieën, blijven de concurrentie voor.",
        image: "/Building2.jpg",
        reverse: true, // Beeld rechts, tekst links
    }
];

const PictureText: React.FC = () => {
    return (
        <div className="flex flex-col gap-20 px-12 mt-50 mb-50">
            {content.map((item, index) => (
                <div 
                    key={index}
                    className={`flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 mt-12 ${
                        item.reverse ? "md:flex-row-reverse" : ""
                    }`}
                >
                    {/* Image Section */}
                    <div className="w-full md:w-5/12 flex justify-center">
                        <img
                            src={item.image}
                            alt="Building"
                            className="w-full h-auto max-w-md md:max-w-lg rounded-2xl object-cover"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-5/12 flex justify-center items-center text-center md:text-left">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-3">
                                {item.title}
                            </h2>
                            <p className="text-lg md:text-xl text-black max-w-md border-l-[#b6ccd8] border-l-4 pl-4">
                                {item.text}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PictureText;
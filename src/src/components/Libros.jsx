import React from 'react';

const Libros = () => {
    return (
        <div className="animate-fade-in max-w-4xl mx-auto text-cosiaca-brown space-y-8">
            <header className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-anton text-cosiaca-brown">
                    LIBRO: Antecedente Narrativo
                </h1>
                <p className="text-xl mt-2 text-cosiaca-brown-light/70">Una obra literaria que dialoga con el universo transmedia de Cosiaca 350.</p>
            </header>
            
            <div className="bg-cosiaca-beige/30 p-8 rounded-xl shadow-2xl border border-cosiaca-beige md:flex md:items-center md:space-x-8">
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <img 
                        src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400" 
                        alt="Portada del libro País de Cosiacas, ciegos y puritanos" 
                        className="w-full rounded-lg shadow-lg mb-4" 
                    />
                    <div className="text-center">
                        <a 
                            href="https://www.youtube.com/watch?v=rYi4ZQXZWaU" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-cosiaca-red text-white px-4 py-2 rounded-full hover:bg-cosiaca-red-dark transition-colors font-medium"
                        >
                            📺 Ver Presentación
                        </a>
                    </div>
                </div>
                <div className="md:w-2/3">
                    <h2 className="text-3xl font-anton text-cosiaca-brown mb-4">
                        "País de Cosiacas, ciegos y puritanos"
                    </h2>
                    <p className="text-lg mb-4">
                        El libro <strong>País de Cosiacas, ciegos y puritanos</strong>, escrito por Juan Alejandro Ramírez, constituye uno de los referentes narrativos que inspiraron el desarrollo del universo transmedia Cosiaca 350.
                    </p>
                    <p className="mb-4">
                        A través de una aproximación histórica y literaria a la figura de Cosiaca, la obra explora elementos del humor, la oralidad y la identidad antioqueña. Algunos de estos enfoques dialogan con los contenidos desarrollados posteriormente en la plataforma digital, los pódcast y las piezas audiovisuales del proyecto.
                    </p>
                    <p>
                        El libro funciona como antecedente literario dentro de un proceso creativo más amplio, que integra investigación histórica adicional, desarrollo tecnológico, diseño interactivo, producción audiovisual y construcción transmedia liderada por el equipo de Núcleo Colectivo.
                    </p>
                </div>
            </div>
            
            <div className="bg-cosiaca-beige/30 p-8 rounded-xl shadow-2xl border border-cosiaca-beige text-center">
                <h2 className="text-2xl font-anton text-cosiaca-brown mb-4">
                    📖 Sobre el Libro
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    <div className="bg-cosiaca-cream/50 p-4 rounded-lg border border-cosiaca-beige">
                        <h3 className="font-bold text-cosiaca-brown mb-2">📚 Género</h3>
                        <p className="text-cosiaca-brown/80">Crónica Novelada Histórica</p>
                    </div>
                    <div className="bg-cosiaca-cream/50 p-4 rounded-lg border border-cosiaca-beige">
                        <h3 className="font-bold text-cosiaca-brown mb-2">✍️ Autor</h3>
                        <p className="text-cosiaca-brown/80">Juan Alejandro Ramírez</p>
                    </div>
                    <div className="bg-cosiaca-cream/50 p-4 rounded-lg border border-cosiaca-beige">
                        <h3 className="font-bold text-cosiaca-brown mb-2">🎨 Ilustración</h3>
                        <p className="text-cosiaca-brown/80">Manuel Malacio</p>
                    </div>
                    <div className="bg-cosiaca-cream/50 p-4 rounded-lg border border-cosiaca-beige">
                        <h3 className="font-bold text-cosiaca-brown mb-2">🎯 Enfoque</h3>
                        <p className="text-cosiaca-brown/80">Humor e identidad cultural</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Libros;
const Footer = () => {
    return (
            <footer className="bg-gray-900 text-white py-6 px-4">
            <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
            <p className="text-center text-sm sm:text-left">
                © 2024 NIGGA. Semua hak cipta dilindungi.
            </p>
            <div className="mt-4 flex space-x-4 sm:mt-0">
                <a href="#privacy" className="text-gray-400 hover:text-white transition duration-200">
                Kebijakan Privasi
                </a>
                <a href="#terms" className="text-gray-400 hover:text-white transition duration-200">
                Syarat & Ketentuan
                </a>
                <a href="#contact" className="text-gray-400 hover:text-white transition duration-200">
                Kontak
                </a>
            </div>
            </div>
        </footer>
    )
}

export default Footer
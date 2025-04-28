import { Container, Facebook, Twitter, Youtube, Linkedin } from "lucide-react"

const Footer = () => {
    return (
        <footer className="footer footer-center p-10">
            <aside>
                <p className="font-bold">
                    Diarrassouba
                    <span className="text-accent">DEV</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://x.com/Yacouba03072002?t=zcbam9eIU_QVVtsJI3jtpg&s=08" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://www.linkedin.com/in/yacouba-diarrassouba-9813b726b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://www.facebook.com/share/16Wz9r8dyD/" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-6 h-6 text-current" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer

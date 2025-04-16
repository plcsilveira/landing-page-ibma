import { Facebook, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
        <div className="grid grid-cols-1 md:grid-cols-4 p-5">
            <div className="text-center">
                <h3 className="font-semibold mb-4">Igreja Batista Manancial no Angelim</h3>
                <p className="text-sm text-muted-foreground">
                    Um lugar de vida e esperança para toda a família.
                </p>
            </div>
            <div className="text-center">
                <h4 className="font-medium mb-4">Links Rápidos</h4>
                <ul className="space-y-2 text-sm">
                    <li>
                        <Link href="/programacao" className="text-muted-foreground hover:text-primary">
                        Programação
                        </Link>
                    </li>
                    <li>
                        <Link href="/eventos" className="text-muted-foreground hover:text-primary">
                        Eventos
                        </Link>
                    </li>
                    <li>
                        <Link href="/contato" className="text-muted-foreground hover:text-primary">
                        Contato
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="text-center">
                <h4 className="font-medium mb-4">Horários de Culto</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Domingo: 9h e 18h</li>
                    <li>Quarta: 19h30</li>
                </ul>
            </div>
            <div className="flex flex-col items-center text-center">
                <h4 className="font-medium mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                    <a href="#" className="text-muted-foreground hover:text-primary">
                        <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                        <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                        <Youtube className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </div>
        <div className="flex py-5 items-center justify-center border-t text-sm text-muted-foreground">
          © {new Date().getFullYear()} Igreja Batista Manancial no Angelim. Todos os direitos reservados.
        </div>
    </footer>
  )
}
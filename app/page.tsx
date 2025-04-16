import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
       <section className="relative h-[600px] px-5">
        <div className="absolute inset-0">
          <Image
            src="https://images.adsttc.com/adbr001cdn.archdaily.net/wp-content/uploads/2012/02/1329664061_690_cruz_18_pjtpresbiterio_picture.jpg"
            alt="Igreja"
            className="w-full h-full object-cover"
            width={1920}
            height={600}
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Bem-vindo à Igreja Batista Manancial no Angelim
            </h1>
            <p className="text-xl mb-8">
              Um lugar de vida e esperança para toda a família
            </p>
            <Button size="lg" asChild className="border border-gray-700">
              <Link href="/contato">Venha nos Visitar</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50 px-5">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Próximos Eventos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Calendar className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Culto de Celebração</h3>
                <p className="text-muted-foreground mb-4">
                  Domingo às 18h - Um tempo especial de adoração e palavra
                </p>
                <Button variant="secondary" className="w-full">Saiba Mais</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Clock className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Culto de Oração</h3>
                <p className="text-muted-foreground mb-4">
                  Quarta às 19h30 - Momento de buscar a Deus em oração
                </p>
                <Button variant="secondary" className="w-full">Saiba Mais</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <MapPin className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Escola Bíblica</h3>
                <p className="text-muted-foreground mb-4">
                  Domingo às 9h - Aprendendo mais da Palavra de Deus
                </p>
                <Button variant="secondary" className="w-full">Saiba Mais</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Faça Parte da Nossa Família</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Venha conhecer nossa igreja e fazer parte desta família. Temos um lugar especial para você!
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contato">Entre em Contato</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

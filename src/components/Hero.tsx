import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Муниципальное бюджетное общеобразовательное учреждение
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            "Средняя общеобразовательная школа №3"
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Дальнереченского городского округа
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Icon name="FileText" className="mr-2 h-5 w-5" />
              Информация о приеме
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

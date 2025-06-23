import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="GraduationCap" className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="font-semibold">МБОУ СОШ №3</h3>
                <p className="text-sm text-gray-400">Дальнереченский ГО</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Качественное образование для каждого ученика в современной и
              дружелюбной атмосфере.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm">
              <p className="flex items-center">
                <Icon name="MapPin" className="mr-2 h-4 w-4 text-gray-400" />
                г. Дальнереченск, ул. Школьная, 3
              </p>
              <p className="flex items-center">
                <Icon name="Phone" className="mr-2 h-4 w-4 text-gray-400" />
                +7 (42356) 2-15-73
              </p>
              <p className="flex items-center">
                <Icon name="Mail" className="mr-2 h-4 w-4 text-gray-400" />
                school3@dalnerechensk.ru
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400 hover:text-white cursor-pointer">
                О школе
              </p>
              <p className="text-gray-400 hover:text-white cursor-pointer">
                Образовательные программы
              </p>
              <p className="text-gray-400 hover:text-white cursor-pointer">
                Поступление
              </p>
              <p className="text-gray-400 hover:text-white cursor-pointer">
                Контакты
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2024 МБОУ "СОШ №3" Дальнереченского городского округа. Все
            права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

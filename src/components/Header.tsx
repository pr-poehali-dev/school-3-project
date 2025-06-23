import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Icon name="GraduationCap" className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                МБОУ СОШ №3
              </h1>
              <p className="text-xs text-gray-600">Дальнереченский ГО</p>
              <p className="text-xs text-gray-600">
                692136, Приморский край, г. Дальнереченск, ул. 45 лет Октября,
                д.68
              </p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-blue-600"
            >
              Главная
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-blue-600"
            >
              О школе
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-blue-600"
            >
              Образование
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-blue-600"
            >
              Контакты
            </Button>
          </nav>

          <Button variant="outline" size="sm" className="md:hidden">
            <Icon name="Menu" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

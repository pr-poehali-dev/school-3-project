import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AdmissionInfo = () => {
  const admissionSteps = [
    {
      step: "1",
      title: "Подача заявления",
      description: "С 1 апреля по 30 июня для поступающих в 1 класс",
      icon: "FileText",
    },
    {
      step: "2",
      title: "Предоставление документов",
      description:
        "Свидетельство о рождении, медицинская карта, справка о регистрации",
      icon: "Folder",
    },
    {
      step: "3",
      title: "Рассмотрение заявления",
      description: "В течение 7 рабочих дней после подачи документов",
      icon: "Clock",
    },
  ];

  const requiredDocs = [
    "Заявление о приеме в школу",
    "Свидетельство о рождении ребенка (копия)",
    "Справка о регистрации по месту жительства",
    "Медицинская карта ребенка",
    "Фотографии 3×4 (2 шт.)",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Информация о приеме в школу
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы рады приветствовать новых учеников в нашей школе. Ознакомьтесь с
            процедурой поступления и необходимыми документами.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Calendar" className="mr-2 h-5 w-5 text-blue-600" />
                Сроки подачи документов
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold">1 класс</h4>
                  <p className="text-gray-600">1 апреля - 30 июня</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold">2-11 классы</h4>
                  <p className="text-gray-600">
                    В течение учебного года при наличии свободных мест
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="MapPin" className="mr-2 h-5 w-5 text-blue-600" />
                Где подать документы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="flex items-start">
                  <Icon
                    name="Building"
                    className="mr-2 h-4 w-4 text-gray-500 mt-1"
                  />
                  Секретариат школы (каб. 101)
                </p>
                <p className="flex items-start">
                  <Icon
                    name="Clock"
                    className="mr-2 h-4 w-4 text-gray-500 mt-1"
                  />
                  Пн-Пт: 8:00-17:00, Сб: 8:00-12:00
                </p>
                <p className="flex items-start">
                  <Icon
                    name="Phone"
                    className="mr-2 h-4 w-4 text-gray-500 mt-1"
                  />
                  +7 (42356) 2-15-73
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {admissionSteps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="FileCheck" className="mr-2 h-5 w-5 text-blue-600" />
              Необходимые документы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {requiredDocs.map((doc, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name="Check" className="h-4 w-4 text-green-600" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Download" className="mr-2 h-5 w-5" />
            Скачать заявление
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionInfo;

import { app } from "@setup/bootstrap";

import { HotelError } from "@modules/hotels/domain";

export function useHotelFactory() {
  function makeHotel(params?: Partial<IHotel>): IHotel {
    return {
      name: "Hotel Kingdom",
      categories: ["Lazer", "Turismo"],
      starRating: 4,
      commodities: [
        "5e2ea717-21e7-405f-b9ae-af5f8c38674b",
        "8ea68a5d-a51d-4592-93d3-efaa19aa7d97",
        "0fe3b371-a5f6-4546-a0d3-201c2535f22b"
      ],
      description: `Com vistas panorâmicas do oceano e suítes elegantemente
         decoradas, oferecemos uma fuga idílica da vida cotidiana. 
         Relaxe em nossa piscina de águas cristalinas, entregue-se 
         a tratamentos rejuvenescedores no nosso spa de classe mundial 
         ou saboreie pratos requintados em nosso restaurante à beira-mar. 
         Com uma localização privilegiada na deslumbrante Praia Dourada, 
         somos o refúgio perfeito para escapar do mundo e se envolver em
         uma experiência de hospitalidade transcendente. Seja bem-vindo ao 
         seu refúgio de sofisticação e tranquilidade.`,
      status: "available",
      internalInformation: {
        hotelPolicies: `Cancelamentos feitos com menos de 24 horas de antecedência 
        estão sujeitos a uma taxa equivalente a uma diária. Reservas não reembolsáveis 
        não podem ser canceladas e estão sujeitas a pagamento integral no momento da reserva.`,
        breakfastTax: 8.99,
        issTax: 25.0,
        serviceTax: 39.99,
        contacts: [
          {
            name: "Rogério Gomes",
            email: "gomess@gmail.com",
            phoneNumber: "9966885123",
            note: "Proprietário do Hotel"
          }
        ]
      },
      address: {
        postalCode: "12345-678",
        number: "123",
        street: "Avenida das Palmeiras",
        complement: "Andar 5, Suíte 501",
        neighbourhood: "Praia Azul",
        city: "Cidade Maravilhosa",
        state: "SP",
        latitude: -22.987654,
        longitude: -43.123456
      },
      ...params
    }  as any;;
  }

  function makeService() {
    return app().hotelService;
  }

  function makeHotelError() {
    return HotelError;
  }

  return {
    makeHotel,
    makeService,
    makeHotelError
  };
}

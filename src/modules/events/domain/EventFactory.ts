import { app } from "@setup/bootstrap";

import { EventError } from "@modules/events/domain";

//  Date
const startDate = new Date();
startDate.setDate(startDate.getDate() + 10);
const endDate = new Date();
endDate.setDate(endDate.getDate() + 20);

export function useEventFactory() {
  function makeEvent(params?: Partial<IEvent>): IEvent {
    return {
      name: "Fight Club",
      description: `A primeira regra do Clube da Luta é: você não fala sobre o Clube da Luta. A segunda regra do Clube da Luta é: você não fala sobre o Clube da Luta. Terceira regra do Clube da Luta: se alguém gritar "Pára!", fraquejar, sinalizar, a luta está terminada. Quarta regra: apenas dois caras numa luta.`,
      tags: ["tecnologia", "inovação"],
      privacy: "public",
      type: "Tecnlogia",
      status: "pending",
      estimatedAudience: 200,
      dateTime: {
        startDate,
        endDate,
        startTime: "08:00",
        endTime: "22:00"
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
    } as any;
  }

  function makeService() {
    return app().eventService;
  }

  function makeEventError() {
    return EventError;
  }

  return {
    makeEvent,
    makeService,
    makeEventError
  };
}

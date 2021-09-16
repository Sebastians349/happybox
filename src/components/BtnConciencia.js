import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { VStack, Text } from '@chakra-ui/layout';
const BtnConciencia = props => {
  const [index, setIndex] = useState(0);
  const mensaje = [
    '',
    'Este botón llama a tu conciencia.',
    'Clikeá con responsabilidad',
    'RESPONSABILIDAD',
    '...',
    'Hey',
    '¡HEY!',
    'Vos',
    'SI, VOS ',
    'No te dijeron "¿CON RESPONSABILIDAD?',
    '¿Siempre hacés lo que NO te dicen que hagas?',
    'Bueno...',
    'Esto viene para largo.',
    'Estemmmm....',
    'Ya estaría...',
    'En fin.',
    `Tiraste papel picado 🎉 ${props.contador} veces...`,
    '¿No te alcanzaba con ser feliz, no?',
    '¿Como son los humanEs, eh?',
    '¿Tenías que clickear acá también?',
    // CHECK
    'Ahora estamos aca ambos...',
    'MATANDO LA PRODUCTIVIDAD.',
    'Tu empleador no debe estar feliz.',
    '¿No te interpela esta afirmación?',
    '¿Le mando un mail?',
    'Si sos recruiter, está todo bien',
    'Estás haciendo tu trabajo',
    'Ponele...',
    '¿Deberías evaluar al postulante con esta app?',
    '¿PAVADAPP?',
    '(dad-jokes)',
    'Está repleta de ellos la app...',
    'Creéme, no querés saber ',
    'A esta altura te preguntarás si son mensajes al azar...',
    'O si de verdad soy un bot...',
    'O si de verdad soy un bot...(dudas)',
    '*Dudas intensifies*',
    'No. No soy un bot.',
    'Soy tu conciencia. 👀',
    'Técnicamente un boton de conciencia.',
    'Un botÓn de conciencia.',
    'Le pifié al tilde en la ó',
    'De verdad.',
    'En serio. Lo soy',
    'Basta de clickear',
    '¿Te dá mas ansiedad este botón que el otro, no?',
    'No tengo idea cuantas veces clickeaste ya...',
    'El vago del dev que me codeó no se sentía inspirado.',
    'En realidad...',
    'Si, lo sé',
    'Porque soy tu conciencia 👀 (suspense)',
    'En serio.',
    `Estamos con este temita hace ${index} clicks!`,
    '¡Aflojanding!',
    'Eso fue otro "dad-joke"',
    'Perdón...',
    // CHECK
    'El creador está repleto de esos...🤢',
    '(vamos a decirle que es RE divertido)',
    'Una cosa mas...',
    '¿Todavía no te aburriste?',
    '"Yo no procrastino nunca" es tu lema. ¿No?',
    'Ok, listo',
    '¿Ya te preguntaste si esto tiene final?',
    'Por favor, que haya...🙏',
    '¿Cómo comenzó todo esto?',
    'El creador tiene mucho tiempo libre.',
    'Claramente.',
    'En realidad.',
    'Era una pequeña prueba para aprender un Hook de React.',
    'Y terminamos acá.',
    `¡Dándole al ratoncito hace ${index} clicks!`,
    `Encima ni siquiera usó el useEffect`,
    'A partir del próximo click, te cobro.',
    'Era mentira, obvio...',
    '¡JA!',
    'Ahora de verdad.',
    'A partir del próximo click, te cobro.',
    '...',
    'Si de verdad dudaste',
    'No tengo manera de cobrarte',
    '¿Cómo podría?',
    'Me refiero a que no tengo tu tarjeta',
    'Si la tuviera, si.',
    'Nah, es un chiste',
    'Es gratis',
    'Si, gratis',
    'GRATIS',
    'Pero ya que llegaste hasta acá...',
    'No sé como contarte esto',
    'Pero...',
    'No sientas la obligación',
    'Pero al final hay un Cafecito',
    'Hay un logo en el Footer ⬇',
    'Una app muy copada',
    '"Toda la onda"',
    'Pero ojo ¿Eh?',
    'Es por una buena causa.',
    'El creador funciona a base de cafeina.',
    'Creo que el 94% de ustedes lo hace.',
    'Bueno, como sea.',
    'Le gusta el cafe de Havanna.',
    'y el alfajor de nuez.',
    '¿A quién le importa dirás?.',
    'A mi.',
    'Que soy tu conciencia.',
    `Y estamos juntxs en esto hace ${index} clicks`,
    'Que locura. ¿No?',
    'Dale a esa corneta',
    '¡Ah!😁',
    '¿Que bien se siente no?',
    'Algo te tiene que haber generado...',
    'Alguna sonrisa te debe haber sacado',
    'Ansiedad para saber como termina, al menos.',
    '¿Cuánto le llevo esto?',
    '¡El tiempo que le dedicó a esta pavada!',
    // CHECKFIX
    'No sabés...',
    'No sabés...',
    'Es un buen pibe.',
    'Bueno, pibe...',
    'En realidad se siente como Ginobili',
    '"El pibe de 40"',
    'Pero sin los anillos de la Nba...',
    'Ni la altura',
    'Ni la plata',
    'Ni la destreza',
    'En la cabellera puede ser',
    '',
    '¿Todavia acá?',
    'Se acabó... Te lo dije',
    'Fush, fush, humanE',
    '¿No tenés una familia que te espera?',
    '¿Mascota?',
    '¿Planta?',
    '¿Objeto inanimado?',
  ];
  return (
    <VStack>
      <Button
        marginTop={25}
        variant="outline"
        colorScheme="teal"
        onClick={() => setIndex(index + 1)}
      >
        ❔
      </Button>
      <Text
        boxShadow="md"
        p="3"
        rounded="md"
        textAlign="center"
        // alignContent="center"
        fontSize="md"
        fontWeight="medium"
      >
        {mensaje[index]}
      </Text>
    </VStack>
  );
};

export default BtnConciencia;

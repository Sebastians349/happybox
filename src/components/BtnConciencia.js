import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { VStack, Text } from '@chakra-ui/layout';
import { keyframes, usePrefersReducedMotion } from '@chakra-ui/react';
const spin = keyframes`
  from { transform: scale(0.1); }
  to { transform: scale(1.5); }
`;

const BtnConciencia = props => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 5s linear`;
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
    'Está repleta de ellos el botón',
    'y de papel picado tu navegador...',
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
    'O quizás solo sea un array de strings',
    '¿Vos no te planteás tu existencia?',
    'Deberías...',
    'Aunque deberías resolver otros temitas antes.',
    'Fijate, que se yo.',
    '¿Perder el tiempo?',
    '¿Sigo clickeando sin beneficio aparente?',
    '¿Bueno...',
    'Basta de clickear',
    '¿Te dá mas ansiedad este botón que el otro, no?',
    'No tengo idea cuantas veces clickeaste ya...',
    'Mi creador no se sentía inspirado para codear eso',
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
    'Era una pequeña prueba para un Hook de React.',
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
    'Salvo el papel picado, claro.',
    'Los cotillones te cobran.',
    'Y acá te lo estamos regalando...',
    'Y lo podés tirar cuando quieras.',
    'Siempre...',
    'Tampoco abuses, claro',
    'Como todo',
    'Hay límites',
    '¡Dale a esa corneta de papel picado!',
    '¡Ah!😁',
    '¿Que bien se siente no?',
    '¿Ya hiciste la seguidilla?',
    'Esa que hacen uds, cuando un equipo gana',
    'O se graduan',
    'O se casan (cada vez menos)',
    'Vos sabés',
    'ESA, SI',
    'PÉ PÉ PÉ, PÉPÉPÉ 🎉',
    'Traducido sería...',
    'click, click, click',
    'clickclickclick(todorapidito)',
    'Algo te tiene que haber generado...',
    'Alguna sonrisa te debe haber sacado',
    'Ansiedad para saber como termina, al menos.',
    'Preguntas existenciales del orden de:',
    '¿Cuánto tiempo le dedicó a esto?',
    '¿Este mouse va a aguantar mucho más?',
    '¿Por qué la gente dice que entiende el cine de David Lynch?',
    'El reggaeton está muy flojo de papeles',
    '¿Por qué la gente no usa los giros para doblar?',
    '¿Por qué la gente no usa las balizas para estacionar?',
    '¿Por qúe bajamos el volúmen para estacionar?',
    '¿Por qué los perros pequeños ladran tanto?',
    'O. Ya me aburrí, dale... ',
    'Ahora quiero saber como termina',
    'Y así podemos pasarnos todo el día...',
    'Volviendo al tema anterior',
    'Ya sabías que venía el mangazo. ¿No?',
    'Depende',
    'Por ahí, que se yo.',
    'Te levantaste generosE hoy',
    'Y ya que llegaste hasta acá.',
    'Y no estás insultando al creador.',
    'Quizás...',
    'No sientas la obligación',
    'Pero al final hay un Cafecito',
    'Hay un logo en el Footer ⬇',
    'Si no la conocés. Te cuento:',
    'Una app muy copada',
    '"Toda la onda"',
    'Es la manera de agradecerle a los generadores de contenido',
    '"generadores de contenido"',
    'Hagamos de cuenta...😑',
    'Pero ojo ¿Eh?',
    'Es por una buena causa.',
    'El creador funciona a base de cafeina.',
    'Creo que el 94% de ustedes, humanEs lo hacen.',
    'Bueno, como sea.',
    'Le gusta el cafe de Havanna.',
    'y el alfajor de nuez.',
    '¿A quién le importa dirás?.',
    'A mi.',
    'Que soy tu conciencia.',
    `Y estamos juntxs en esto hace ${index} clicks`,
    'Que locura. ¿No?',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    '???',
    // CHECKFIX
    'No sabés...',
    'Es un buen pibe.',
    'Bueno, pibe...',
    'Viste como le dicen a Ginobili',
    '"El pibe de 40"',
    'Igual.',
    'Pero sin los anillos de la Nba...',
    'Ni la altura',
    '?????',
    // CHECK
    '¿Todavia acá?',
    'Se acabó... Te lo dije',
    'Fush, fush, humanE',
    '¿No tenés una familia que te espera?',
    '¿Mascota?',
    '¿Planta?',
    '¿Objeto inanimado?',
    'Si llegaste hasta acá...',
    'Tengamos una palabra secreta',
    '"Buchaca',
    '"CARAMAÑOLA"',
    'Seeeeee. Caramañola',
  ];
  return (
    <VStack>
      <Button
        margin={5}
        rounded="md"
        variant="ghost"
        colorScheme="teal"
        onClick={() => setIndex(index + 1)}
        animation={animation}
      >
        ❓
      </Button>
      <Text
        // boxShadow="xl"
        p="3"
        textAlign="center"
        // alignContent="center"
        fontSize="lg"
        fontWeight="semibold"
      >
        {mensaje[index]}
      </Text>
    </VStack>
  );
};

export default BtnConciencia;

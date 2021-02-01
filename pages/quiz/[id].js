import React from 'react';

export default function QuizDaGaleraPage() {
  return (
    <div>Desafio</div>
  );
}

export async function getServerSideProps(context) {
  const dbExterno = await fetch('https://aluraquiz-css.omariosouto.vercel.app')
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Falha em pegar os dados');
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      dbExterno,
    },
  };
}

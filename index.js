module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'respuesta ok, HOLA MUNDO',
        input: event,
      },
      null,
      2
    ),
  };
};

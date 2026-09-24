# simulador-entrevistas
SIMULADOR DE ENTREVISTAS PARA DATABRICKS EN MUTTDATA
=====================================================

VERSIÓN CON BANCO DE PREGUNTAS SEPARADO

ARCHIVOS
- index.html: aplicación y lógica. Normalmente no necesitas editarlo.
- banco_preguntas.js: banco editable por rol.

USO
1. Mantén ambos archivos en la misma carpeta.
2. Abre index.html con doble clic.
3. Para cambiar preguntas, abre banco_preguntas.js con cualquier editor de texto.
4. Guarda y recarga el navegador.

ESTRUCTURA DE UNA PREGUNTA
    {
      id: 201,
      role: "Ingeniero de Datos",
      topic: "Delta Lake",
      kind: "scenario",
      es: "Pregunta en español",
      en: "Question in English"
    }

REGLAS
- id: único en todo el banco.
- role: debe coincidir exactamente con el nombre del rol.
- topic: tema usado también por el evaluador local.
- kind: experience, theory, scenario o hands-on.
- es/en: versiones en ambos idiomas.

RECOMENDACIÓN
Para agregar una pregunta, copia una existente dentro del rol correcto y cambia sus campos.
El archivo valida IDs duplicados, campos faltantes y tipos inválidos al cargarse.
